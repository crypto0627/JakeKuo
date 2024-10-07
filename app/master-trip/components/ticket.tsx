'use client'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { CountryButton } from './countrybtn'
import { setCountry } from '@/lib/store/countrySlice'
import Image from 'next/image'
import Link from 'next/link'

const ticketData = [
  {
    id: 1,
    name: 'Shibuya sky',
    description: 'Shibuya sky ticket link',
    imageSrc: '/master-trip/shibuya.webp',
    link: 'https://www.klook.com/zh-TW/activity/70672-shibuya-sky-tokyo/'
  },
  {
    id: 2,
    name: 'Teamlab Plants & 萬葉俱樂部溫泉',
    description: 'Teamlab Plants & 萬葉俱樂部溫泉套票',
    imageSrc: '/master-trip/teamlab_plants.webp',
    link: 'https://www.klook.com/zh-TW/activity/25300-teamlab-planets-toyosu-tokyo-ticket/'
  }
]

export function Ticket() {
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

  const ticketDataRef = useRef(null)
  const isTicketInView = useInView(ticketDataRef, { once: false, amount: 0.1 })

  return (
    <motion.section
      id="cuisine"
      ref={ticketDataRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isTicketInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex h-screen w-full bg-background"
    >
      <div className="flex flex-1 flex-col">
        <header className="border-b bg-background px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">門票資訊</h2>
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
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ticketData.map((ticket) => (
              <div key={ticket.id} className="border rounded-lg">
                {ticket.link ? (
                  <Link href={ticket.link} target="_blank">
                    <Image
                      src={ticket.imageSrc}
                      width={300}
                      height={300}
                      alt={`${ticket.name} Image`}
                      className="object-cover w-full h-48 rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{ticket.name}</h3>
                      <p className="text-muted-foreground">
                        {ticket.description}
                      </p>
                    </div>
                  </Link>
                ) : (
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
                      <p className="text-muted-foreground">
                        {ticket.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
