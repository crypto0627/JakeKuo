'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { categories } from '../contents/content'
import AnswerModal from './AnswerModel'

export default function Questions() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name)
  const [selectedAnswer, setSelectedAnswer] = useState<{
    question: string
    answer: string
  } | null>(null)

  const handleCategoryClick = (name: string) => {
    setSelectedCategory(name)
  }

  const openAnswer = (question: string, answer: string) => {
    setSelectedAnswer({ question, answer })
  }

  const closeAnswer = () => {
    setSelectedAnswer(null)
  }

  const selectedContent =
    categories.find((c) => c.name === selectedCategory)?.questions || []

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Frontend interview questions category
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <Card>
              <CardContent className="p-4">
                <ul>
                  {categories.map((category) => (
                    <li
                      key={category.name}
                      className={`cursor-pointer p-2 rounded ${
                        selectedCategory === category.name
                          ? 'bg-blue-100 text-blue-600'
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      {category.name} ({category.questions.length})
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="w-full md:w-2/3">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-4">
                  {selectedCategory}
                </h3>
                <div className="h-[300px] overflow-y-auto">
                  <ul className="space-y-5">
                    {selectedContent.map((item, index) => (
                      <li
                        key={index}
                        className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <p>{item.question}</p>
                        <Button
                          onClick={() => openAnswer(item.question, item.answer)}
                          className="mt-2"
                        >
                          Answer
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {selectedAnswer && (
        <AnswerModal
          question={selectedAnswer.question}
          answer={selectedAnswer.answer}
          onClose={closeAnswer}
        />
      )}
    </section>
  )
}
