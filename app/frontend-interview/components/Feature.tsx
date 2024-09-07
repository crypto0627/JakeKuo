'use client'
import { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const features = [
  {
    title: 'AI-Powered Answers',
    description: 'Get instant, accurate responses to your questions.',
    image: '/master-fe/ai-powered.webp',
  },
  {
    title: 'Frontend Interview Prep',
    description: 'Practice with real interview questions.',
    image: '/master-fe/interview-prep.webp',
  },
  {
    title: 'Personalized Learning',
    description: 'Adaptive learning paths tailored to your needs.',
    image: '/master-fe/personalized-learning.webp',
  },
]

const AUTOPLAY_INTERVAL = 3000 // 3秒

export default function Feature() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === features.length - 1 ? 0 : prevIndex + 1
        ),
      AUTOPLAY_INTERVAL
    )

    return () => {
      resetTimeout()
    }
  }, [currentIndex])

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Our Features
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-full relative overflow-hidden h-[400px]"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
