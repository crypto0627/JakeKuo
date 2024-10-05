'use client'
import { useState, useRef } from 'react'
import { CountryButton } from './countrybtn'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Compass } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import {
  FaPlane,
  FaHotel,
  FaUmbrellaBeach,
  FaCamera,
  FaUtensils
} from 'react-icons/fa'

const ChinaDaily = [
  'Day 1',
  'Day 2',
  'Day 3',
  'Day 4',
  'Day 5',
  'Day 6',
  'Day 7'
]

const JapanDaily = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5']

const activities = [
  { name: 'Flight', icon: FaPlane },
  { name: 'Check-in Hotel', icon: FaHotel },
  { name: 'Beach Time', icon: FaUmbrellaBeach },
  { name: 'Sightseeing', icon: FaCamera },
  { name: 'Dinner', icon: FaUtensils }
]

export default function Schedule() {
  const [selectedCountry, setSelectedCountry] = useState<'China' | 'Japan'>(
    'China'
  )
  const [selectedDay, setSelectedDay] = useState<string>('Day 1')

  const currentDailySchedule =
    selectedCountry === 'China' ? ChinaDaily : JapanDaily

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex h-screen w-full bg-background lg:px-20"
    >
      <div className="flex flex-1 flex-col">
        <header className="border-b bg-background px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Daily Schedule</h2>
          </div>
        </header>
        <div className="flex-1 p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                <CountryButton
                  isSelected={selectedCountry === 'China'}
                  onClick={() => {
                    setSelectedCountry('China')
                    setSelectedDay('Day 1')
                  }}
                >
                  China
                </CountryButton>
                <CountryButton
                  isSelected={selectedCountry === 'Japan'}
                  onClick={() => {
                    setSelectedCountry('Japan')
                    setSelectedDay('Day 1')
                  }}
                >
                  Japan
                </CountryButton>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {currentDailySchedule.map((day) => (
                <Button
                  key={day}
                  variant={selectedDay === day ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-6">
            {selectedCountry === 'China' ? (
              <ChinaSchedule day={selectedDay} />
            ) : (
              <JapanSchedule day={selectedDay} />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ChinaSchedule({ day }: { day: string }) {
  // Define schedules for each day
  const schedules = {
    'Day 1': [
      {
        time: '05:50 AM - 08:50 AM',
        activity: 'Travel from 台北萬華 to 桃園國際機場'
      },
      {
        time: '08:50 AM - 12:55 PM',
        activity: 'Flight from 桃園國際機場 to 東京成田機場'
      },
      {
        time: '12:55 PM - 01:55 PM',
        activity: 'Arrive at Tokyo, customs clearance'
      },
      { time: '01:55 PM onwards', activity: 'Check in at 新宿御宛APA' }
    ],
    'Day 2': [{ time: '', activity: 'Free day' }],
    'Day 3': [{ time: '', activity: 'Free day' }],
    'Day 4': [
      {
        time: '08:00 AM - 10:30 AM',
        activity: '鎌倉大都會大酒店 to 鎌倉高校前'
      },
      {
        time: '10:30 AM - 01:30 PM',
        activity: '鎌倉高校前 visit (SLAM DANK 平交道, 七里濱美景咖啡)'
      },
      { time: '01:30 PM - 02:30 PM', activity: 'Visit 長谷寺' },
      { time: '02:30 PM - 05:00 PM', activity: 'Visit 鎌倉大佛, 鶴岡八幡宮' },
      {
        time: '05:00 PM - 06:00 PM',
        activity: 'Free time, 鎌倉大都會大酒店 dinner'
      }
    ],
    'Day 5': [
      { time: '08:00 AM - 10:30 AM', activity: '鎌倉大都會大酒店 to 江島神社' },
      { time: '10:30 AM - 11:00 AM', activity: '江之島海蠟燭展望燈塔 visit' },
      { time: '11:00 AM - 01:00 PM', activity: 'Visit 江之島岩屋' },
      { time: '01:00 PM - 02:30 PM', activity: 'Lunch at 江之島' },
      { time: '02:30 PM - 03:30 PM', activity: 'Visit 新江之島水族館' },
      { time: '03:30 PM - 04:30 PM', activity: 'Return to 鎌倉大都會大酒店' },
      { time: '04:30 PM - 06:00 PM', activity: 'Dinner at hotel' }
    ]
  }

  const daySchedule = schedules[day as keyof typeof schedules] || []

  const getActivityIcon = (activity: string) => {
    const matchedActivity = activities.find((a) =>
      activity.toLowerCase().includes(a.name.toLowerCase())
    )
    return matchedActivity ? matchedActivity.icon : Compass
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule for {day} in China</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {daySchedule.map((item, index) => {
            const Icon = getActivityIcon(item.activity)
            return (
              <li key={index} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{item.activity}</div>
                  <div className="text-muted-foreground">{item.time}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}

function JapanSchedule({ day }: { day: string }) {
  const schedules = {
    'Day 1': [
      {
        time: '05:50 AM - 08:50 AM',
        activity: 'Travel from 台北萬華 to 桃園國際機場'
      },
      {
        time: '08:50 AM - 12:55 PM',
        activity: 'Flight from 桃園國際機場 to 東京成田機場'
      },
      {
        time: '12:55 PM - 01:55 PM',
        activity: 'Arrive at Tokyo, customs clearance'
      },
      { time: '01:55 PM onwards', activity: 'Check in at 新宿御宛APA' }
    ],
    'Day 2': [{ time: '', activity: 'Free day' }],
    'Day 3': [{ time: '', activity: 'Free day' }],
    'Day 4': [
      {
        time: '08:00 AM - 10:30 AM',
        activity: '鎌倉大都會大酒店 to 鎌倉高校前'
      },
      {
        time: '10:30 AM - 01:30 PM',
        activity: '鎌倉高校前 visit (SLAM DANK 平交道, 七里濱美景咖啡)'
      },
      { time: '01:30 PM - 02:30 PM', activity: 'Visit 長谷寺' },
      { time: '02:30 PM - 05:00 PM', activity: 'Visit 鎌倉大佛, 鶴岡八幡宮' },
      {
        time: '05:00 PM - 06:00 PM',
        activity: 'Free time, 鎌倉大都會大酒店 dinner'
      }
    ],
    'Day 5': [
      { time: '08:00 AM - 10:30 AM', activity: '鎌倉大都會大酒店 to 江島神社' },
      { time: '10:30 AM - 11:00 AM', activity: '江之島海蠟燭展望燈塔 visit' },
      { time: '11:00 AM - 01:00 PM', activity: 'Visit 江之島岩屋' },
      { time: '01:00 PM - 02:30 PM', activity: 'Lunch at 江之島' },
      { time: '02:30 PM - 03:30 PM', activity: 'Visit 新江之島水族館' },
      { time: '03:30 PM - 04:30 PM', activity: 'Return to 鎌倉大都會大酒店' },
      { time: '04:30 PM - 06:00 PM', activity: 'Dinner at hotel' }
    ]
  }

  const daySchedule = schedules[day as keyof typeof schedules] || []

  const getActivityIcon = (activity: string) => {
    const matchedActivity = activities.find((a) =>
      activity.toLowerCase().includes(a.name.toLowerCase())
    )
    return matchedActivity ? matchedActivity.icon : Compass
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule for {day} in Japan</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {daySchedule.map((item, index) => {
            const Icon = getActivityIcon(item.activity)
            return (
              <li key={index} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{item.activity}</div>
                  <div className="text-muted-foreground">{item.time}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}
