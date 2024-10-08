'use client'
import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { CountryButton } from './countrybtn'
import { setCountry } from '@/lib/store/countrySlice'
import Image from 'next/image'
import Link from 'next/link'
import { ticketData, dailySchedule } from '../constants/tripData'
import { setDaily } from '@/lib/store/dailySlice'
import { Button } from '@/components/ui/button'

export function Ticket() {
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

  const renderTickets = useMemo(() => {
    const currentTicketData = ticketData[countrySelected]
    return currentTicketData
      .filter((ticket) => ticket.day === selectedDay)
      .map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
  }, [countrySelected, selectedDay])

  return (
    <section
      id="ticket"
      className="flex h-screen w-full bg-background lg:px-20"
    >
      <div className="flex flex-1 flex-col">
        <header className="border-b bg-background px-6 py-4">
          <h2 className="text-xl font-semibold">門票資訊</h2>
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
            {renderTickets}
          </div>
        </div>
      </div>
    </section>
  )
}

const TicketCard = ({
  ticket
}: {
  ticket: {
    id: number
    day: string
    link?: string
    name: string
    description: string
    imageSrc: string
  }
}) => (
  <div className="border rounded-lg">
    {ticket.link ? (
      <Link href={ticket.link} target="_blank">
        <TicketCardContent ticket={ticket} />
      </Link>
    ) : (
      <TicketCardContent ticket={ticket} />
    )}
  </div>
)

const TicketCardContent = ({
  ticket
}: {
  ticket: { name: string; description: string; imageSrc: string; day: string }
}) => (
  <>
    <Image
      src={ticket.imageSrc}
      width={300}
      height={300}
      alt={`${ticket.name} Image`}
      className="object-cover w-full h-48 rounded-t-lg"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{ticket.name}</h3>
      <p className="text-muted-foreground">{ticket.description}</p>
    </div>
  </>
)
