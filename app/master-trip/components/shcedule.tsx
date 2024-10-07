'use client'
import { useState, useRef, useEffect } from 'react'
import { CountryButton } from './countrybtn'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Compass } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { setCountry } from '@/lib/store/countrySlice'
import {
  schedulesChina,
  schedulesJapan,
  ChinaDaily,
  JapanDaily,
  activities
} from '../constants/tripData'

export function Schedule() {
  const [selectedCountry, setSelectedCountry] = useState<'China' | 'Japan'>(
    'China'
  )
  const [selectedDay, setSelectedDay] = useState<string>('Day 1')

  const currentDailySchedule =
    selectedCountry === 'China' ? ChinaDaily : JapanDaily

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const dispatch = useDispatch()
  const handleCountryChange = (country: string) => {
    dispatch(setCountry(country))
  }

  const Country = useSelector(
    (state: RootState) => state.country.selectedCountry
  )

  useEffect(() => {
    if (Country === 'China' || Country === 'Japan') {
      setSelectedCountry(Country)
    }
  }, [Country])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex h-screen w-full bg-background lg:px-20"
    >
      <div className="flex flex-1 flex-col">
        <header className="border-b bg-background px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Daily Schedule</h2>
          </div>
        </header>
        <div className="flex-1 p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                <CountryButton
                  isSelected={selectedCountry === 'China'}
                  onClick={() => {
                    setSelectedCountry('China')
                    setSelectedDay('Day 1')
                    handleCountryChange('China')
                  }}
                >
                  China
                </CountryButton>
                <CountryButton
                  isSelected={selectedCountry === 'Japan'}
                  onClick={() => {
                    setSelectedCountry('Japan')
                    setSelectedDay('Day 1')
                    handleCountryChange('Japan')
                  }}
                >
                  Japan
                </CountryButton>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {currentDailySchedule.map((day) => (
                <Button
                  key={day}
                  variant={selectedDay === day ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-6">
            {selectedCountry === 'China' ? (
              <ChinaSchedule day={selectedDay} />
            ) : (
              <JapanSchedule day={selectedDay} />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ChinaSchedule({ day }: { day: string }) {
  const daySchedule = schedulesChina[day as keyof typeof schedulesChina] || []

  const getActivityIcon = (activity: string) => {
    const matchedActivity = activities.find((a) =>
      activity.toLowerCase().includes(a.name.toLowerCase())
    )
    return matchedActivity ? matchedActivity.icon : Compass
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule for {day} in China</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {daySchedule.map((item, index) => {
            const Icon = getActivityIcon(item.activity)
            return (
              <li key={index} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{item.activity}</div>
                  <div className="text-muted-foreground">{item.time}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}

function JapanSchedule({ day }: { day: string }) {
  const daySchedule = schedulesJapan[day as keyof typeof schedulesJapan] || []

  const getActivityIcon = (activity: string) => {
    const matchedActivity = activities.find((a) =>
      activity.toLowerCase().includes(a.name.toLowerCase())
    )
    return matchedActivity ? matchedActivity.icon : Compass
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule for {day} in Japan</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {daySchedule.map((item, index) => {
            const Icon = getActivityIcon(item.activity)
            return (
              <li key={index} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{item.activity}</div>
                  <div className="text-muted-foreground">{item.time}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}
