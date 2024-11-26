'use client'

import { useState, useLayoutEffect, useCallback, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Paperclip, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Message } from '../types'
import { debounce } from 'lodash-es'

export default function AiChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const abortControllerRef = useRef<AbortController | null>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedStreamResponse = useCallback(
    debounce(async (message: string) => {
      try {
        // 如果有正在進行的請求,先中止它
        if (abortControllerRef.current) {
          abortControllerRef.current.abort()
        }

        // 創建新的 AbortController
        abortControllerRef.current = new AbortController()

        const response = await fetch('http://localhost:3001/api/ai/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message }),
          signal: abortControllerRef.current.signal
        })

        if (!response.ok) {
          throw new Error('API request failed')
        }

        const reader = response.body?.getReader()
        const decoder = new TextDecoder()

        if (!reader) {
          throw new Error('Failed to get response stream')
        }

        let currentResponse = ''
        let buffer = '' // 用於存儲不完整的JSON字符串

        while (true) {
          const { done, value } = await reader.read()

          if (done) {
            break
          }

          const chunk = decoder.decode(value)
          buffer += chunk

          // 處理完整的JSON行
          const lines = buffer.split('\n')
          buffer = lines.pop() || '' // 保存最後一個不完整的行

          for (const line of lines) {
            if (line.trim()) {
              try {
                const data = JSON.parse(line.replace('data: ', ''))
                if (data.success) {
                  currentResponse += data.data.response || ''

                  // 使用函數式更新來避免閉包問題
                  setMessages((prevMessages) => {
                    const lastMessage = prevMessages[prevMessages.length - 1]
                    if (lastMessage?.type === 'ai') {
                      return prevMessages.map((msg, index) =>
                        index === prevMessages.length - 1
                          ? { ...msg, content: currentResponse }
                          : msg
                      )
                    }
                    return prevMessages
                  })

                  if (data.data.done) {
                    setIsLoading(false)
                    setIsTyping(false)
                    break
                  }
                }
              } catch (parseError) {
                console.error('Error parsing response data:', parseError)
              }
            }
          }
        }
      } catch (error: unknown) {
        if (error instanceof Error && error.name === 'AbortError') {
          console.log('Request aborted')
          return
        }

        console.error('Error calling AI API:', error)
        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1]
          if (lastMessage?.type === 'ai') {
            return prevMessages.map((msg, index) =>
              index === prevMessages.length - 1
                ? {
                    ...msg,
                    content: 'Sorry, an error occurred. Please try again later.'
                  }
                : msg
            )
          }
          return prevMessages
        })
        setIsLoading(false)
        setIsTyping(false)
      } finally {
        abortControllerRef.current = null
      }
    }, 300), // 降低 debounce 時間以提高響應速度
    []
  )

  useLayoutEffect(() => {
    if (isTyping) {
      handleSend()
    }

    // 組件卸載時中止所有請求
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTyping])

  const handleSend = async () => {
    if (!isLoading && (input.trim() || file)) {
      const newMessage: Message = {
        id: Date.now(),
        type: 'user',
        content: input.trim(),
        file: file || undefined
      }

      const aiMessage: Message = {
        id: Date.now() + 1,
        type: 'ai',
        content: 'thinking...'
      }

      setMessages((prev) => [...prev, newMessage, aiMessage])
      setIsLoading(true)
      await debouncedStreamResponse(input.trim())
      setInput('')
      setFile(null)
      setIsTyping(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // 檢查文件大小 (例如限制為 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert('File size should not exceed 5MB')
        return
      }
      setFile(selectedFile)
    }
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Chat</h1>
      <Card className="flex-grow mb-6 p-6 shadow-lg">
        <ScrollArea className="h-[calc(100vh-16rem)]">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-500">
              Start chatting with AI!
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} mb-6`}
              >
                <div
                  className={`flex ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start max-w-[80%]`}
                >
                  <Avatar className="w-10 h-10">
                    <AvatarFallback
                      className={
                        message.type === 'user' ? 'bg-blue-500' : 'bg-gray-500'
                      }
                    >
                      {message.type === 'user' ? 'U' : 'AI'}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`mx-3 p-4 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    {message.file && (
                      <div className="mt-3">
                        {message.file.type.startsWith('image/') ? (
                          <Image
                            src={URL.createObjectURL(message.file)}
                            alt="Uploaded"
                            className="max-w-sm rounded-lg shadow-md"
                            width={100}
                            height={100}
                          />
                        ) : (
                          <Link
                            href={URL.createObjectURL(message.file)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-200 underline hover:text-blue-100"
                          >
                            View {message.file.name}
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </ScrollArea>
      </Card>
      <div className="flex items-center gap-3 sticky bottom-4">
        <Input
          type="file"
          accept="image/*,.pdf"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload">
          <Button
            variant="outline"
            size="icon"
            className="bg-gray-100 hover:scale-125 transition-all duration-300"
            asChild
          >
            <span>
              <Paperclip className="h-5 w-5" />
            </span>
          </Button>
        </label>
        {file && (
          <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {file.name}
          </span>
        )}
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your message..."
          className="flex-grow min-h-[3rem] max-h-32 resize-none text-white"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              if (!isTyping) {
                setIsTyping(true)
              }
            }
          }}
          disabled={isLoading}
        />
        <Button
          onClick={() => !isTyping && setIsTyping(true)}
          className="px-6 hover:bg-blue-600"
          disabled={isLoading}
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
