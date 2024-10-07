'use client'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { CountryButton } from './countrybtn'
import { setCountry } from '@/lib/store/countrySlice'
import Link from 'next/link'
import { transportChinaData, transportJapanData } from '../constants/tripData'

export function Transportation() {
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

  const transportRef = useRef(null)
  const isTransportInView = useInView(transportRef, {
    once: false,
    amount: 0.1
  })

  return (
    <motion.section
      id="transport"
      ref={transportRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isTransportInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex h-screen w-full bg-background"
    >
      <div className="flex flex-1 flex-col">
        <header className="border-b bg-background px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">交通資訊</h2>
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
            {countrySelected === 'China' ? (
              <>
                {transportChinaData.map((transport) => (
                  <div key={transport.id} className="border rounded-lg">
                    {transport.link ? (
                      <Link href={transport.link} target="_blank">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">
                            {transport.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {transport.description}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">
                          {transport.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {transport.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <>
                {transportJapanData.map((transport) => (
                  <div key={transport.id} className="border rounded-lg">
                    {transport.link ? (
                      <Link href={transport.link} target="_blank">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">
                            {transport.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {transport.description}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">
                          {transport.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {transport.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
