'use client'

import {
  Schedule,
  FlightInfo,
  Cuisine,
  Navbar,
  Ticket,
  Transportation,
  Footer,
  Banner
} from './components'
import { Provider } from 'react-redux'
import { store } from '@/lib/store'

const SECTIONS = [
  { id: 'schedule', Component: Schedule },
  { id: 'transportation', Component: Transportation },
  { id: 'ticket', Component: Ticket },
  { id: 'cuisine', Component: Cuisine }
]

export default function ClientLayout() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col text-green-900 bg-white">
        <div className="bg-banner bg-cover bg-center bg-no-repeat h-screen relative">
          <Navbar />
          <Banner />
        </div>
        <FlightInfo />
        {SECTIONS.map(({ id, Component }) => (
          <section
            key={id}
            id={id}
            className={`my-8 lg:my-24 ${id === 'schedule' ? 'lg:mb-24' : ''}`}
          >
            <Component />
          </section>
        ))}
        <section id="footer" className="mt-32 lg:mt-0">
          <Footer />
        </section>
      </div>
    </Provider>
  )
}
