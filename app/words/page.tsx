'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Volume2 } from 'lucide-react'
import type { Flashcard } from '@/types/FlashCardTypes'

export default function FlashcardApp() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  const addFlashcard = (day: number, word: string, meaning: string) => {
    const newFlashcard: Flashcard = {
      id: Date.now(),
      day,
      word,
      meaning
    }
    setFlashcards([...flashcards, newFlashcard])
  }

  const updateFlashcard = (
    id: number,
    day: number,
    word: string,
    meaning: string
  ) => {
    setFlashcards(
      flashcards.map((card) =>
        card.id === id ? { ...card, day, word, meaning } : card
      )
    )
    setEditingId(null)
  }

  const deleteFlashcard = (id: number) => {
    setFlashcards(flashcards.filter((card) => card.id !== id))
  }

  const speakWord = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = 'en-US'
    window.speechSynthesis.speak(utterance)
  }

  const days = Array.from(new Set(flashcards.map((card) => card.day))).sort(
    (a, b) => a - b
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">英語單字卡應用</h1>
      <FlashcardForm onSubmit={addFlashcard} />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">按天查看單字卡</h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3">
            <Select onValueChange={(value) => setSelectedDay(Number(value))}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="選擇一天" />
              </SelectTrigger>
              <SelectContent>
                {days.map((day) => (
                  <SelectItem key={day} value={day.toString()}>
                    第 {day} 天
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedDay !== null && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">
                  第 {selectedDay} 天單字卡
                </h3>
                <div className="space-y-4">
                  {flashcards
                    .filter((card) => card.day === selectedDay)
                    .map((card) => (
                      <Flashcard
                        key={card.id}
                        flashcard={card}
                        onEdit={() => setEditingId(card.id)}
                        onDelete={() => deleteFlashcard(card.id)}
                        onUpdate={(day, word, meaning) =>
                          updateFlashcard(card.id, day, word, meaning)
                        }
                        isEditing={editingId === card.id}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>
          <div className="w-full md:w-2/3">
            <div className="bg-gray-100 p-4 rounded-2xl h-full">
              <h3 className="text-lg font-semibold mb-2">
                第 {selectedDay || '(選擇一天)'} 天的單字
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {selectedDay !== null &&
                  flashcards
                    .filter((card) => card.day === selectedDay)
                    .map((card) => (
                      <div
                        key={card.id}
                        className="bg-white p-2 rounded shadow flex items-center justify-between"
                      >
                        <span>{card.word}</span>
                        <div className="flex space-x-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => alert(card.meaning)}
                          >
                            中文意思
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => speakWord(card.word)}
                            aria-label={`朗讀 ${card.word}`}
                          >
                            <Volume2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type FlashcardFormProps = {
  onSubmit: (day: number, word: string, meaning: string) => void
  initialDay?: number
  initialWord?: string
  initialMeaning?: string
}

function FlashcardForm({
  onSubmit,
  initialDay = 1,
  initialWord = '',
  initialMeaning = ''
}: FlashcardFormProps) {
  const [day, setDay] = useState(initialDay)
  const [word, setWord] = useState(initialWord)
  const [meaning, setMeaning] = useState(initialMeaning)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (day && word && meaning) {
      onSubmit(day, word, meaning)
      setDay(1)
      setWord('')
      setMeaning('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input
        type="number"
        value={day}
        onChange={(e) => setDay(Number(e.target.value))}
        placeholder="輸入天數"
        min={1}
        required
      />
      <Input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="輸入單字"
        required
      />
      <Input
        type="text"
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
        placeholder="輸入中文意思"
        required
      />
      <Button type="submit">新增單字卡</Button>
    </form>
  )
}

type FlashcardProps = {
  flashcard: Flashcard
  onEdit: () => void
  onDelete: () => void
  onUpdate: (day: number, word: string, meaning: string) => void
  isEditing: boolean
}

function Flashcard({
  flashcard,
  onEdit,
  onDelete,
  onUpdate,
  isEditing
}: FlashcardProps) {
  if (isEditing) {
    return (
      <FlashcardForm
        onSubmit={(day, word, meaning) => onUpdate(day, word, meaning)}
        initialDay={flashcard.day}
        initialWord={flashcard.word}
        initialMeaning={flashcard.meaning}
      />
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{flashcard.word}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">天數: {flashcard.day}</p>
        <p>中文意思: {flashcard.meaning}</p>
        <div className="mt-2 space-x-2">
          <Button onClick={onEdit}>編輯</Button>
          <Button onClick={onDelete} variant="destructive">
            刪除
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
