import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'
import { CountryButton } from './countrybtn'
import { FlightDetails } from './flightdetails'
import { motion, AnimatePresence } from 'framer-motion'

export default function FlightInfo() {
  const [selectedCountry, setSelectedCountry] = useState<string>('China')

  return (
    <Card className="w-full max-w-3xl mx-auto -mt-16 z-10 bg-white shadow-lg">
      <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
        <CountryButton
          isSelected={selectedCountry === 'China'}
          onClick={() => setSelectedCountry('China')}
        >
          China
        </CountryButton>
        <CountryButton
          isSelected={selectedCountry === 'Japan'}
          onClick={() => setSelectedCountry('Japan')}
        >
          Japan
        </CountryButton>
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
            {selectedCountry === 'China' ? (
              <ChinaFlightInfo />
            ) : (
              <JapanFlightInfo />
            )}
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
        destination="Beijing"
        flightNumber="CA456"
        airline="Air China"
        departureTime="10:15"
        departureDate="May 20, 2024"
        origin="Taipei (TPE)"
        duration="3h 15m"
        arrival="Beijing (PEK)"
      />
      <div className="my-4 border-t border-gray-200"></div>
      <FlightDetails
        destination="Taipei"
        flightNumber="CA457"
        airline="Air China"
        departureTime="15:30"
        departureDate="May 27, 2024"
        origin="Beijing (PEK)"
        duration="3h 30m"
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
        departureTime="08:50 - 12:55 ($NT 9445)"
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
        departureTime="13:00 - 16:05 ($NT 8880)"
        departureDate="February 11, 2025"
        origin="Tokyo (NRT)"
        duration="3h 05m"
        arrival="Taipei (TPE)"
      />
    </>
  )
}
