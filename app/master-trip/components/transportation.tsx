'use client'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { CountryButton } from './countrybtn'
import { setCountry } from '@/lib/store/countrySlice'
import Link from 'next/link'
import { transportData, dailySchedule } from '../constants/tripData'
import { setDaily } from '@/lib/store/dailySlice'
import { Button } from '@/components/ui/button'

export function Transportation() {
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

  const transportRef = useRef(null)
  const isTransportInView = useInView(transportRef, {
    once: false,
    amount: 0.1
  })

  const renderTransport = useMemo(() => {
    const currentTransportData = transportData[countrySelected]
    return currentTransportData
      .filter((transport) => transport.day === selectedDay)
      .map((transport) => (
        <TransportCard key={transport.id} transport={transport} />
      ))
  }, [countrySelected, selectedDay])

  return (
    <motion.section
      id="transport"
      ref={transportRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isTransportInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex h-screen w-full bg-background lg:px-20"
    >
      <div className="flex flex-1 flex-col">
        <header className="border-b bg-background px-6 py-4">
          <h2 className="text-xl font-semibold">交通資訊</h2>
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
              {currentDailySchedule.map((day: string) => (
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
            {renderTransport}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

const TransportCard = ({
  transport
}: {
  transport: {
    id: number
    day: string
    link?: string
    name: string
    description: string
  }
}) => (
  <div className="border rounded-lg">
    {transport.link ? (
      <Link href={transport.link} target="_blank">
        <TransportCardContent transport={transport} />
      </Link>
    ) : (
      <TransportCardContent transport={transport} />
    )}
  </div>
)

const TransportCardContent = ({
  transport
}: {
  transport: { name: string; description: string; day: string }
}) => (
  <div className="p-4">
    <h3 className="text-lg font-semibold">{transport.name}</h3>
    <p className="text-muted-foreground">{transport.description}</p>
  </div>
)
