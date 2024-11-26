'use client'

import { useState, useLayoutEffect, useCallback } from 'react'
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
  const [aiResponse, setAiResponse] = useState('')

  // 使用 debounce 來限制 API 呼叫頻率
  const debouncedApiCall = useCallback(
    debounce(async (prompt: string) => {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 60000)

        const response = await fetch('http://localhost:11434/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'llama3.2',
            prompt,
            stream: true
          }),
          signal: controller.signal
        })

        const reader = response.body?.getReader()
        const decoder = new TextDecoder()
        let fullResponse = ''

        if (reader) {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            const chunk = decoder.decode(value)
            const lines = chunk.split('\n')

            lines.forEach((line) => {
              if (line.trim()) {
                try {
                  const data = JSON.parse(line)
                  fullResponse += data.response
                  setAiResponse(fullResponse)
                } catch (e) {
                  console.error('解析JSON失敗:', e)
                }
              }
            })
          }
        }

        clearTimeout(timeoutId)
      } catch (error) {
        console.error('Error calling Ollama API:', error)
        setAiResponse(
          error instanceof Error && error.name === 'AbortError'
            ? '請求超時,請稍後再試'
            : '抱歉,發生錯誤,請稍後再試'
        )
      }
    }, 500),
    []
  )

  useLayoutEffect(() => {
    if (aiResponse) {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages]
        const lastMessage = newMessages[newMessages.length - 1]
        if (lastMessage && lastMessage.type === 'ai') {
          lastMessage.content = aiResponse
        }
        return newMessages
      })
    }
  }, [aiResponse])

  const handleSend = async () => {
    if (input.trim() || file) {
      const newMessage: Message = {
        id: Date.now(),
        type: 'user',
        content: input.trim(),
        file: file || undefined
      }

      const aiMessage: Message = {
        id: Date.now() + 1,
        type: 'ai',
        content: ''
      }

      setMessages((prev) => [...prev, newMessage, aiMessage])
      setIsLoading(true)
      await debouncedApiCall(input.trim())
      setIsLoading(false)
      setInput('')
      setFile(null)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Chat</h1>
      <Card className="flex-grow mb-6 p-6 shadow-lg">
        <ScrollArea className="h-[calc(100vh-16rem)]">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-500">
              Start Chat with AI!
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
                            See {message.file.name}
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
          placeholder="Input your message..."
          className="flex-grow min-h-[3rem] max-h-32 resize-none text-white"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSend()
            }
          }}
          disabled={isLoading}
        />
        <Button
          onClick={handleSend}
          className="px-6 hover:bg-blue-600"
          disabled={isLoading}
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
