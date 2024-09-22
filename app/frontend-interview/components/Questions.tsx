'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

const categories = [
  { name: 'JavaScript', count: 34 },
  { name: 'HTML', count: 4 },
  { name: 'CSS', count: 9 },
  { name: 'React', count: 13 },
  { name: '瀏覽器', count: 19 },
  { name: '前端工具', count: 7 },
  { name: '網路安全', count: 5 },
  { name: '效能優化', count: 5 },
  { name: '前端架構/設計', count: 4 }
]

const generateCategoryContent = (category: string, count: number) => {
  return Array.from({ length: count }, (_, i) => `${category} ${i + 1}`)
}

export default function Questions() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name)
  const [selectedCategoryCount, setSelectedCategoryCount] = useState(
    categories[0].count
  )

  const handleCategoryClick = (name: string, count: number) => {
    setSelectedCategory(name)
    setSelectedCategoryCount(count)
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          前端面試題目分類
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
                      onClick={() =>
                        handleCategoryClick(category.name, category.count)
                      }
                    >
                      {category.name} ({category.count})
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
                    {generateCategoryContent(
                      selectedCategory,
                      selectedCategoryCount
                    ).map((item, index) => (
                      <li
                        key={index}
                        className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
