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
    <article className="flight-details">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Plane aria-hidden="true" className="h-8 w-8 text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold">Flight to {destination}</h2>
            <p className="text-sm text-gray-500">
              {flightNumber} • {airline}
            </p>
          </div>
        </div>
        <time className="text-right">
          <span className="block text-lg font-semibold">{departureTime}</span>
          <span className="block text-sm text-gray-500">{departureDate}</span>
        </time>
      </header>
      <footer className="mt-4 flex justify-between text-sm">
        <div>
          <h3 className="font-semibold">From</h3>
          <p>{origin}</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold">Duration</h3>
          <p>{duration}</p>
        </div>
        <div className="text-right">
          <h3 className="font-semibold">To</h3>
          <p>{arrival}</p>
        </div>
      </footer>
    </article>
  )
}
