import { Card, CardContent } from '@/components/ui/card'
import { useMemo } from 'react'
import { CountryButton } from './countrybtn'
import { FlightDetails } from './flightdetails'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../lib/store'
import { setCountry } from '../lib/store/countrySlice'

export function FlightInfo() {
  const dispatch = useDispatch()
  const selectedCountry = useSelector(
    (state: RootState) => state.country.selectedCountry
  )

  const handleCountryChange = (country: string) => {
    dispatch(setCountry(country))
  }

  const FlightInfoComponent = useMemo(() => {
    return selectedCountry === 'China' ? (
      <ChinaFlightInfo />
    ) : (
      <JapanFlightInfo />
    )
  }, [selectedCountry])

  return (
    <Card className="w-full max-w-3xl mx-auto -mt-16 z-10 bg-white shadow-lg">
      <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
        {['China', 'Japan'].map((country) => (
          <CountryButton
            key={country}
            isSelected={selectedCountry === country}
            onClick={() => handleCountryChange(country)}
          >
            {country}
          </CountryButton>
        ))}
      </div>
      <CardContent className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCountry}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {FlightInfoComponent}
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

function ChinaFlightInfo() {
  return (
    <>
      <FlightDetails
        destination="Shanghai"
        flightNumber="9C8952"
        airline="中華航空"
        departureTime="CST 08:45 - 10:50"
        departureDate="October 31, 2024"
        origin="Taipei (TPE)"
        duration="2h 05m"
        arrival="Shanghai (PVG)"
      />
      <div className="my-4 border-t border-gray-200"></div>
      <FlightDetails
        destination="Taipei"
        flightNumber="MU5005"
        airline="中華航空"
        departureTime="CST 19:50 - 21:55"
        departureDate="November 3, 2024"
        origin="Shanghai (PVG)"
        duration="1h 55m"
        arrival="Taipei (TPE)"
      />
    </>
  )
}

function JapanFlightInfo() {
  return (
    <>
      <FlightDetails
        destination="Tokyo"
        flightNumber="JL123"
        airline="長榮航空"
        departureTime="JST 08:50 - 12:55 ($NT 9445)"
        departureDate="February 5, 2025"
        origin="Taipei (TPE)"
        duration="4h 05m"
        arrival="Tokyo (NRT)"
      />
      <div className="my-4 border-t border-gray-200"></div>
      <FlightDetails
        destination="Taipei"
        flightNumber="JL124"
        airline="長榮航空"
        departureTime="JST 13:00 - 16:05 ($NT 8880)"
        departureDate="February 11, 2025"
        origin="Tokyo (NRT)"
        duration="3h 05m"
        arrival="Taipei (TPE)"
      />
    </>
  )
}
