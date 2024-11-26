'use client'
import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../lib/store'
import { CountryButton } from './countrybtn'
import { setCountry } from '../lib/store/countrySlice'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { schedules, dailySchedule } from '../constants/tripData'
import { setDaily } from '../lib/store/dailySlice'
import { Button } from '@/components/ui/button'

export function Schedule() {
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

  const renderSchedule = useMemo(() => {
    const scheduleData = schedules[countrySelected]
    const daySchedule =
      scheduleData[selectedDay as keyof typeof scheduleData] || []

    return (
      <Card>
        <CardHeader>
          <CardTitle>
            Schedule for {selectedDay} in {countrySelected}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {daySchedule.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div>
                  <div className="font-semibold">{item.activity}</div>
                  <div className="text-muted-foreground">{item.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    )
  }, [countrySelected, selectedDay])

  return (
    <section
      id="schedule"
      className="flex h-screen w-full bg-background lg:px-20"
    >
      <div className="flex flex-1 flex-col">
        <header className="border-b bg-background px-6 py-4">
          <h2 className="text-xl font-semibold">Daily Schedule</h2>
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
          <div className="mt-6 grid gap-6">
            <div className="min-h-[300px]">{renderSchedule}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
