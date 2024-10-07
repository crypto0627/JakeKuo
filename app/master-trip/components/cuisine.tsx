'use client'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { CountryButton } from './countrybtn'
import { setCountry } from '@/lib/store/countrySlice'
import Image from 'next/image'

const cuisineData = [
  {
    id: 1,
    name: 'Sushi Restaurant',
    description: 'Authentic Japanese cuisine',
    imageSrc: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Italian Bistro',
    description: 'Homemade pasta and pizza',
    imageSrc: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Vegan Cafe',
    description: 'Organic and plant-based dishes',
    imageSrc: '/placeholder.svg'
  }
]

export function Cuisine() {
  const [countrySelected, setCountrySelected] = useState<string>('China')

  const dispatch = useDispatch()
  const handleCountryChange = (country: string) => {
    dispatch(setCountry(country))
  }

  const Country = useSelector(
    (state: RootState) => state.country.selectedCountry
  )

  useEffect(() => {
    if (Country === 'China' || Country === 'Japan') {
      setCountrySelected(Country)
    }
  }, [Country])

  const cuisineRef = useRef(null)
  const isCuisineInView = useInView(cuisineRef, { once: false, amount: 0.3 })

  return (
    <motion.section
      id="cuisine"
      ref={cuisineRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isCuisineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex h-screen w-full bg-background"
    >
      <div className="flex flex-1 flex-col">
        <header className="border-b bg-background px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">美食地圖</h2>
          </div>
        </header>
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <CountryButton
                isSelected={countrySelected === 'China'}
                onClick={() => {
                  setCountrySelected('China')
                  handleCountryChange('China')
                }}
              >
                China
              </CountryButton>
              <CountryButton
                isSelected={countrySelected === 'Japan'}
                onClick={() => {
                  setCountrySelected('Japan')
                  handleCountryChange('Japan')
                }}
              >
                Japan
              </CountryButton>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-6 overflow-x-auto">
            {cuisineData.map((cuisine) => (
              <div key={cuisine.id} className="border rounded-lg">
                <Image
                  src={cuisine.imageSrc}
                  width={300}
                  height={300}
                  alt={`${cuisine.name} Image`}
                  className="object-cover w-full rounded-t-lg"
                  style={{ aspectRatio: '300/300', objectFit: 'cover' }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{cuisine.name}</h3>
                  <p className="text-muted-foreground">{cuisine.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
