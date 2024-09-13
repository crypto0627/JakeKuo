'use client'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    title: 'AI-Powered Assistance',
    description: 'Get instant help with our advanced AI assistant.',
  },
  {
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with your team in real-time.',
  },
  {
    title: 'Customizable Workflows',
    description: 'Create and customize workflows to fit your unique needs.',
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain insights with our powerful analytics tools.',
  },
  {
    title: 'Secure Data Storage',
    description: 'Your data is safe with our enterprise-grade security.',
  },
  {
    title: 'Integration Ecosystem',
    description: 'Connect with your favorite tools and services effortlessly.',
  },
]

export default function Feature() {
  const leftFeatures = features.slice(0, 3)
  const rightFeatures = features.slice(3)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Our Features
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 space-y-4">
            {leftFeatures.map((feature, index) => (
              <Card key={index} className="border">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <Image
              src="/master-fe/feature-image.webp"
              alt="Feature Overview"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/3 space-y-4">
            {rightFeatures.map((feature, index) => (
              <Card key={index} className="border">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
