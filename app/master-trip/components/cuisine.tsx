'use client'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { CountryButton } from './countrybtn'
import { setCountry } from '@/lib/store/countrySlice'
import Image from 'next/image'
import Link from 'next/link'
import { cuisineData, dailySchedule } from '../constants/tripData'
import { setDaily } from '@/lib/store/dailySlice'
import { Button } from '@/components/ui/button'

export function Cuisine() {
  const [countrySelected, setCountrySelected] = useState<'China' | 'Japan'>(
    'China'
  )
  const [selectedDay, setSelectedDay] = useState<string>('Day 1')

  const dispatch = useDispatch()
  const Country = useSelector(
    (state: RootState) => state.country.selectedCountry
  )
  const Daily = useSelector((state: RootState) => state.daily.selectedDaily)

  const currentDailySchedule = dailySchedule[countrySelected]

  const handleCountryChange = (country: 'China' | 'Japan') => {
    setCountrySelected(country)
    setSelectedDay('Day 1')
    dispatch(setCountry(country))
    dispatch(setDaily('Day 1'))
  }

  const handleDayChange = (day: string) => {
    setSelectedDay(day)
    dispatch(setDaily(day))
  }

  useEffect(() => {
    if (Country === 'China' || Country === 'Japan') {
      setCountrySelected(Country)
    }
  }, [Country])

  useEffect(() => {
    if (currentDailySchedule.includes(Daily)) {
      setSelectedDay(Daily)
    }
  }, [Daily, currentDailySchedule])

  const cuisineRef = useRef(null)
  const isCuisineInView = useInView(cuisineRef, { once: false, amount: 0.1 })

  const renderCuisine = useMemo(() => {
    return cuisineData[countrySelected].map((cuisine) => (
      <CuisineCard key={cuisine.id} cuisine={cuisine} />
    ))
  }, [countrySelected])

  return (
    <motion.section
      id="cuisine"
      ref={cuisineRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isCuisineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex h-screen w-full bg-background lg:px-20"
    >
      <div className="flex flex-1 flex-col">
        <header className="border-b bg-background px-6 py-4">
          <h2 className="text-xl font-semibold">美食地圖</h2>
        </header>
        <div className="flex-1 p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              {['China', 'Japan'].map((country) => (
                <CountryButton
                  key={country}
                  isSelected={countrySelected === country}
                  onClick={() =>
                    handleCountryChange(country as 'China' | 'Japan')
                  }
                >
                  {country}
                </CountryButton>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {currentDailySchedule.map((day) => (
                <Button
                  key={day}
                  variant={selectedDay === day ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleDayChange(day)}
                >
                  {day}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCuisine}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

const CuisineCard = ({
  cuisine
}: {
  cuisine: {
    id: number
    link?: string
    name: string
    description: string
    imageSrc: string
  }
}) => (
  <div className="border rounded-lg">
    {cuisine.link ? (
      <Link href={cuisine.link} target="_blank">
        <CuisineCardContent cuisine={cuisine} />
      </Link>
    ) : (
      <CuisineCardContent cuisine={cuisine} />
    )}
  </div>
)

const CuisineCardContent = ({
  cuisine
}: {
  cuisine: { name: string; description: string; imageSrc: string }
}) => (
  <>
    <Image
      src={cuisine.imageSrc}
      width={300}
      height={300}
      alt={`${cuisine.name} Image`}
      className="object-cover w-full h-48 rounded-t-lg"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{cuisine.name}</h3>
      <p className="text-muted-foreground">{cuisine.description}</p>
    </div>
  </>
)
