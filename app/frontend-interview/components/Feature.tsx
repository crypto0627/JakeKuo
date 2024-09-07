'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useSwipeable } from 'react-swipeable'

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

export default function Feature() {
  const [offset, setOffset] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardWidthRef = useRef<number>(0)

  const nextFeature = useCallback(() => {
    if (containerRef.current) {
      const cardWidth =
        cardWidthRef.current || containerRef.current.children[0].clientWidth
      setIsTransitioning(true)
      setOffset((prev) => prev + cardWidth)

      if (offset >= cardWidth * features.length * 3) {
        setTimeout(() => {
          setIsTransitioning(false)
          setOffset(cardWidth * features.length)
        }, 300) // 短暫移除動畫，重置位置
      }
    }
  }, [offset])

  useEffect(() => {
    // 克隆的內容，保證無限循環
    if (containerRef.current) {
      cardWidthRef.current = containerRef.current.children[0].clientWidth
      setOffset(cardWidthRef.current * features.length)
    }

    const timer = setInterval(nextFeature, 3000) // 每3秒自動切換一次
    return () => clearInterval(timer)
  }, [nextFeature])

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (containerRef.current) {
        const cardWidth = cardWidthRef.current
        setIsTransitioning(true)
        setOffset((prev) => prev + cardWidth)

        if (offset >= cardWidth * features.length * 3) {
          setTimeout(() => {
            setIsTransitioning(false)
            setOffset(cardWidth * features.length)
          }, 300)
        }
      }
    },
    onSwipedRight: () => {
      if (containerRef.current) {
        const cardWidth = cardWidthRef.current
        setIsTransitioning(true)
        setOffset((prev) => prev - cardWidth)

        if (offset <= 0) {
          setTimeout(() => {
            setIsTransitioning(false)
            setOffset(cardWidth * features.length * 2)
          }, 300)
        }
      }
    },
    trackMouse: true,
  })

  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      {...handlers}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Our Features
        </h2>
        <div className="relative">
          <div
            ref={containerRef}
            className={`flex ${isTransitioning ? 'transition-transform duration-300 ease-linear' : ''}`}
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {[...features, ...features, ...features].map((feature, index) => (
              <Card
                key={index}
                className="w-full md:w-1/3 flex-shrink-0 relative overflow-hidden h-[400px] mx-2"
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
