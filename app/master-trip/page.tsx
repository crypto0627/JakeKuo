'use client'
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const NavLinks = ({ onClose }: { onClose: () => void }) => (
  <>
    {['explore', 'gallery', 'journey'].map((section) => (
      <a
        key={section}
        href={`/${section}`}
        className="block py-2 hover:text-green-200"
        onClick={onClose}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </a>
    ))}
  </>
)

export default function MasterTrip() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <div className="min-h-screen text-green-900 bg-banner bg-cover bg-center bg-no-repeat relative">
      {/* Navbar */}
      <nav className="text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold">Master Trip</span>
          <div className="hidden md:flex space-x-4">
            <NavLinks onClose={() => {}} />
          </div>
          <button
            className="md:hidden text-white focus:outline-none w-8 h-8 relative"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}
            />
          </button>
        </div>
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          <NavLinks onClose={() => setIsMenuOpen(false)} />
        </div>
      </nav>
      {/* Banner */}
      <section className="flex flex-col items-center justify-center min-h-[600px]">
        <h1 className="text-9xl font-extrabold text-center bg-gradient-to-r from-red-600 via-orange-500 to-indigo-400 inline-block text-transparent bg-clip-text italic">
          China
        </h1>
        <div className="mt-12">
          {/* Carousel 的卡片 */}
          <div className="flex xl:flex-row flex-col gap-5">
            {cardData.map((card, index) => (
              <CustomCard
                key={index}
                title={card.title}
                content={card.content}
                className="flex-shrink-0 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// 新增 Card 組件
const CustomCard = ({
  title,
  content,
  className
}: {
  title: string
  content: string
  className?: string
}) => (
  <Card className={`min-w-[200px] ${className}`}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
  </Card>
)

// 定義卡片數據
const cardData = [
  { title: '杭州', content: '這是卡片 1 的內容。' },
  { title: '蘇州', content: '這是卡片 2 的內容。' },
  { title: '上海', content: '這是卡片 3 的內容。' }
  // 可以根據需要添加更多卡片
]
