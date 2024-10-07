import {
  FaPlane,
  FaHotel,
  FaUmbrellaBeach,
  FaCamera,
  FaUtensils
} from 'react-icons/fa'

// Ticket
export const ticketChinaData = [
  {
    id: 1,
    name: 'free',
    description: 'free',
    imageSrc: 'free',
    link: 'free'
  }
]

export const ticketJapanData = [
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

// Schedules
export const schedulesChina = {
  'Day 1': [{ time: '', activity: 'Free day' }],
  'Day 2': [{ time: '', activity: 'Free day' }],
  'Day 3': [{ time: '', activity: 'Free day' }],
  'Day 4': [{ time: '', activity: 'Free day' }],
  'Day 5': [{ time: '', activity: 'Free day' }]
}

export const schedulesJapan = {
  'Day 1': [
    {
      time: '05:50 AM - 08:50 AM',
      activity: '08:50 AM 桃園國際機場出境'
    },
    {
      time: '08:50 AM - 12:55 PM',
      activity: 'Flight from 桃園國際機場 to 東京成田機場'
    },
    {
      time: '12:55 PM - 01:55 PM',
      activity: 'Arrive at Tokyo'
    },
    { time: '01:55 PM - 03:00 PM', activity: 'Check in at 新宿御宛APA' },
    { time: '03:00 PM - 06:30 PM', activity: '涉谷Sky' },
    { time: '07:00 PM - 08:30 PM', activity: 'Dinner at 涉谷敘敘苑燒肉' },
    {
      time: '08:30 PM - 10:30 PM',
      activity: 'Walk at 新宿歌舞伎町'
    }
  ],
  'Day 2': [
    { time: '08:30 AM - 09:30 AM', activity: 'Arrive at 豐洲市場' },
    { time: '09:30 AM - 10:30 AM', activity: 'Eat brunch at 豐洲市場' },
    { time: '10:30 AM - 12:30 PM', activity: 'Shop at 豐洲千客萬來' },
    {
      time: '12:30 PM - 03:30 PM',
      activity:
        '年輕人逛豐洲teamLab Planets(需預約) 老人家逛Mitsui Shopping Park LaLaport都市船塢豐洲'
    },
    {
      time: '03:30 PM - 06:30 PM',
      activity: 'Visit 台場海濱公園 鋼彈 自由女神像 台場夜景 彩虹大橋'
    },
    { time: '06:30 PM - 07:30 PM', activity: 'Dinner at 台場' },
    { time: '07:30 PM - 08:30 PM', activity: 'Return to 新宿APA Hotel' }
  ],
  'Day 3': [
    { time: '09:30 AM - 10:30 AM', activity: 'Eat brunch at 新宿' },
    {
      time: '10:30 AM - 10:45 PM',
      activity: 'Travel by 山手線 from 新宿 to 惠比壽'
    },
    {
      time: '10:45 AM - 11:45 AM',
      activity: 'Transfer train from 惠比壽 to 鎌倉'
    },
    {
      time: '11:45 AM - 01:30 PM',
      activity: '江之島大都會酒店放行李 附近吃午餐'
    },
    { time: '01:30 PM - 02:30 PM', activity: 'Lunch at 江之島' }
  ],
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

export const ChinaDaily = [
  'Day 1',
  'Day 2',
  'Day 3',
  'Day 4',
  'Day 5',
  'Day 6',
  'Day 7'
]

export const JapanDaily = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5']

export const activities = [
  { name: 'Flight', icon: FaPlane },
  { name: 'Check-in Hotel', icon: FaHotel },
  { name: 'Beach Time', icon: FaUmbrellaBeach },
  { name: 'Sightseeing', icon: FaCamera },
  { name: 'Dinner', icon: FaUtensils }
]

// Transportation
export const transportJapanData = [
  {
    id: 1,
    name: '成田機場到新宿APA Hotel',
    description: '成田機場第一航廈(成田特快) → 新宿',
    link: 'https://www.klook.com/zh-TW/rails-32/1012-japan/route-1336/naritaairportterminalo-to-shinjuku-trains/'
  },
  {
    id: 2,
    name: '新宿APA Hotel到Shibuya Sky',
    description: '搭乘副都心線 新宿三丁目站-> 澀谷站'
  },
  {
    id: 3,
    name: '新宿APA Hotel到豐洲市場',
    description: '搭乘新宿線 新宿三丁目站 -> 市谷站轉乘 有樂町線 -> 豐洲站'
  },
  {
    id: 4,
    name: '豐洲到台場',
    description: '搭乘海鷗線 豐洲站 -> 台場站'
  },
  {
    id: 5,
    name: '台場到新宿APA Hotel',
    description: 'Organic and plant-based dishes'
  },
  {
    id: 6,
    name: '新宿APA Hotel到鎌倉大都會酒店',
    description: 'Organic and plant-based dishes'
  }
]

export const transportChinaData = [
  {
    id: 1,
    name: '上海浦東機場到全季酒店(南京東路店)',
    description: '上海浦東機場地鐵 → 南京東路站',
    link: 'https://www.klook.com/zh-TW/rails-32/1012-japan/route-1336/naritaairportterminalo-to-shinjuku-trains/'
  }
]

// Cuisine
export const cuisineChinaData = [
  {
    id: 1,
    name: 'Shibuya敘敘苑燒肉',
    description: '敘敘苑預約鏈接',
    imageSrc: '/master-trip/shushuyuan.webp',
    link: 'https://www.jojoen.co.jp/cn/'
  },
  {
    id: 2,
    name: '新宿 餃子の福包',
    description: '餃子の福包',
    imageSrc: '/master-trip/chaochifubao.webp',
    link: 'https://maps.app.goo.gl/bNcsCTcv9JW7kcKs6'
  }
]
export const cuisineJapanData = [
  {
    id: 1,
    name: 'Shibuya敘敘苑燒肉',
    description: '敘敘苑預約鏈接',
    imageSrc: '/master-trip/shushuyuan.webp',
    link: 'https://www.jojoen.co.jp/cn/'
  },
  {
    id: 2,
    name: '新宿 餃子の福包',
    description: '餃子の福包',
    imageSrc: '/master-trip/chaochifubao.webp',
    link: 'https://maps.app.goo.gl/bNcsCTcv9JW7kcKs6'
  }
]
