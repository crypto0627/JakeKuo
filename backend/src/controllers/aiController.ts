import { Request, Response } from 'express'
import Ai from '../models/Ai'

export const chatWithOllama = async (req: Request, res: Response) => {
  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({
        success: false,
        message: '消息不能為空'
      })
    }

    // 設置 SSE 標頭
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')

    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: message,
        stream: true
      })
    })

    let fullResponse = ''

    // 讀取響應流
    const reader = response.body?.getReader()
    const decoder = new TextDecoder()

    if (!reader) {
      throw new Error('無法獲取響應流')
    }

    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      // 解碼二進制數據
      const chunk = decoder.decode(value)
      const lines = chunk.split('\n')

      for (const line of lines) {
        if (line.trim()) {
          try {
            const data = JSON.parse(line)
            if (data.response) {
              fullResponse += data.response
              // 發送部分響應到客戶端
              res.write(
                `data: ${JSON.stringify({
                  success: true,
                  data: {
                    response: data.response,
                    done: data.done
                  }
                })}\n\n`
              )
            }

            // 如果是最後一條消息，保存到數據庫
            if (data.done) {
              await Ai.create({
                messages: [
                  { role: 'user', content: message },
                  { role: 'assistant', content: fullResponse }
                ]
              })

              // 發送結束信號
              res.write(
                `data: ${JSON.stringify({
                  success: true,
                  data: {
                    done: true,
                    finalResponse: fullResponse
                  }
                })}\n\n`
              )

              res.end()
              return
            }
          } catch (parseError) {
            console.error('解析行數據時出錯:', parseError)
          }
        }
      }
    }
  } catch (error) {
    console.error('完整錯誤信息:', error)
    res.write(
      `data: ${JSON.stringify({
        success: false,
        message: error instanceof Error ? error.message : '處理請求時發生錯誤'
      })}\n\n`
    )
    res.end()
  }
}
