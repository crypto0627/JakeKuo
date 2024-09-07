'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const blogPosts = [
  {
    title: 'Getting Started with AI',
    content:
      'Learn the basics of AI and how it can help you in your daily life.',
  },
  {
    title: 'Top 10 Frontend Interview Questions',
    content: 'Prepare for your next interview with these common questions.',
  },
  {
    title: 'The Future of AI in Education',
    content: 'Discover how AI is transforming the way we learn and teach.',
  },
]

export default function Blog() {
  const [currentPost, setCurrentPost] = useState(0)

  const nextPost = () => setCurrentPost((prev) => (prev + 1) % blogPosts.length)
  const prevPost = () =>
    setCurrentPost((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Latest Blog Posts
        </h2>
        <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevPost}
            className="md:self-center"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>{blogPosts[currentPost].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{blogPosts[currentPost].content}</p>
            </CardContent>
          </Card>
          <Button
            variant="outline"
            size="icon"
            onClick={nextPost}
            className="md:self-center"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
