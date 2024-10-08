import { Metadata } from 'next'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  title: 'Master Trip - Family Travel',
  description: 'Family travel planning website'
}

export default function MasterTrip() {
  return <ClientLayout />
}
