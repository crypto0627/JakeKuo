import { FlightDetailsProps } from '@/interfaces/FlightDetailsInterfaces'
import { Plane } from 'lucide-react'

export function FlightDetails({
  destination,
  flightNumber,
  airline,
  departureTime,
  departureDate,
  origin,
  duration,
  arrival
}: FlightDetailsProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Plane className="h-8 w-8 text-blue-500" />
          <div>
            <h3 className="text-lg font-semibold">Flight to {destination}</h3>
            <p className="text-sm text-gray-500">
              {flightNumber} • {airline}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">{departureTime}</p>
          <p className="text-sm text-gray-500">{departureDate}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between text-sm">
        <div>
          <p className="font-semibold">From</p>
          <p>{origin}</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">Duration</p>
          <p>{duration}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">To</p>
          <p>{arrival}</p>
        </div>
      </div>
    </>
  )
}
