// Ticket
export const ticketData = {
  China: [
    {
      id: 1,
      name: 'free',
      description: 'free',
      imageSrc: '/test.webp',
      link: 'free'
    }
  ],
  Japan: [
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
}

// Schedules
const createSchedule = (activities: [string, string][]) =>
  activities.map(([time, activity]) => ({ time, activity }))

export const schedules: {
  [country: string]: {
    [day: string]: { time: string; activity: string }[]
  }
} = {
  China: {
    'Day 1': [{ time: '', activity: 'Free day' }],
    'Day 2': [{ time: '', activity: 'Free day' }],
    'Day 3': [{ time: '', activity: 'Free day' }],
    'Day 4': [{ time: '', activity: 'Free day' }],
    'Day 5': [{ time: '', activity: 'Free day' }]
  },
  Japan: {
    'Day 1': createSchedule([
      ['05:50 AM - 08:50 AM', '08:50 AM 桃園國際機場出境'],
      ['08:50 AM - 12:55 PM', 'Flight from 桃園國際機場 to 東京成田機場'],
      ['12:55 PM - 01:55 PM', 'Arrive at Tokyo'],
      ['01:55 PM - 03:00 PM', 'Check in at 新宿御宛APA'],
      ['03:00 PM - 06:00 PM', '新宿 → 銀座逛街 UNIQLO 銀座店 HARBS下午茶'],
      ['06:30 PM - 08:30 PM', 'Dinner at 新宿餃子の福包'],
      ['08:30 PM - 10:30 PM', 'Walk at 新宿歌舞伎町']
    ]),
    'Day 2': createSchedule([
      ['08:30 AM - 09:30 AM', 'Arrive at 豐洲市場'],
      ['09:30 AM - 10:30 AM', 'Eat brunch at 豐洲市場'],
      ['10:30 AM - 12:30 PM', 'Shop at 豐洲千客萬來'],
      [
        '12:30 PM - 03:30 PM',
        '想看酷炫的景→豐洲teamLab Planets(需預約) 想逛街→Mitsui Shopping Park LaLaport都市船塢豐洲或泡湯'
      ],
      [
        '03:30 PM - 06:30 PM',
        'Visit 台場海濱公園 鋼彈 自由女神像 台場夜景 彩虹大橋'
      ],
      ['06:30 PM - 07:30 PM', 'Dinner at 台場'],
      ['07:30 PM - 08:30 PM', 'Return to 新宿御宛APA Hotel']
    ]),
    'Day 3': createSchedule([
      ['09:30 AM - 10:30 AM', 'Eat breakfast at 新宿'],
      ['10:30 AM - 12:00 PM', '涉谷Sky'],
      ['12:00 PM - 02:00 PM', '涉谷敘敘苑燒肉'],
      ['02:00 PM - 05:00 PM', '涉谷逛街 不想逛街可以去明治神宮和表參道'],
      ['05:00 PM - 06:30 PM', 'Dinner at 新宿']
    ]),
    'Day 4': createSchedule([
      ['09:30 AM - 10:30 AM', '新宿APA Hotel to 鎌倉站 鎌倉大酒店放行李'],
      ['10:30 AM - 01:30 PM', '鎌倉高校前 (SLAM DANK 平交道, 七里濱美景咖啡)'],
      ['01:30 PM - 02:30 PM', '長谷寺'],
      ['02:30 PM - 05:00 PM', '鎌倉大佛, 鶴岡八幡宮'],
      ['05:00 PM - 06:00 PM', 'Free time, 鎌倉大都會大酒店 dinner']
    ]),
    'Day 5': createSchedule([
      ['08:00 AM - 10:30 AM', '鎌倉大都會大酒店 to 江島神社'],
      ['10:30 AM - 11:00 AM', '江之島海蠟燭展望燈塔 visit'],
      ['11:00 AM - 01:00 PM', 'Visit 江之島岩屋'],
      ['01:00 PM - 02:30 PM', 'Lunch at 江之島'],
      ['02:30 PM - 03:30 PM', 'Visit 新江之島水族館'],
      ['03:30 PM - 04:30 PM', 'Return to 鎌倉大都會大酒店'],
      ['04:30 PM - 06:00 PM', 'Dinner at hotel']
    ]),
    'Day 6': createSchedule([
      ['08:30 AM - 09:30 AM', 'Check out 鎌倉大都會大酒店'],
      ['09:30 AM - 12:00 AM', '鎌倉站 → 成田機場'],
      ['15:00 PM', '飛機起飛返台']
    ])
  }
}

export const dailySchedule = {
  China: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
  Japan: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6']
}

// Transportation
export const transportData = {
  Japan: [
    {
      id: 1,
      day: 'Day 1',
      name: '成田機場到新宿APA Hotel',
      description: '成田機場第一航廈(成田特快) → 新宿',
      link: 'https://www.klook.com/zh-TW/rails-32/1012-japan/route-1336/naritaairportterminalo-to-shinjuku-trains/'
    },
    {
      id: 2,
      day: 'Day 1',
      name: '新宿APA Hotel到銀座站',
      description: '搭乘丸之內線 新宿御苑前站 → 銀座站'
    },
    {
      id: 3,
      day: 'Day 1',
      name: '銀座站到新宿APA Hotel',
      description: '搭乘丸之內線 銀座站 → 新宿御苑前站'
    },
    {
      id: 4,
      day: 'Day 2',
      name: '新宿APA Hotel到豐洲站',
      description: '搭乘新宿線 新宿御苑前站 → 市谷站轉乘有樂町線 → 豐洲站'
    },
    {
      id: 5,
      day: 'Day 2',
      name: '豐洲站到台場',
      description: '搭乘海鷗線 豐洲站 → 台場站'
    },
    {
      id: 6,
      day: 'Day 2',
      name: '台場到新宿APA Hotel',
      description: '搭乘海鷗線 台場站 → 新宿站'
    },
    {
      id: 7,
      day: 'Day 3',
      name: '新宿到涉谷',
      description: '搭乘副都心線 新宿三丁目站 → 涉谷站'
    },
    {
      id: 8,
      day: 'Day 3',
      name: '涉谷到新宿',
      description: '搭乘副都心線 涉谷站 → 新宿三丁目站'
    },
    {
      id: 9,
      day: 'Day 3',
      name: '新宿到鎌倉',
      description: '搭乘JR湘南新宿線 新宿站 → 鎌倉站'
    },
    { id: 10, day: 'Day 3', name: '鎌倉周遊', description: '鎌倉周遊券' },
    { id: 11, day: 'Day 4', name: '鎌倉周遊', description: '鎌倉周遊券' },
    { id: 12, day: 'Day 5', name: '鎌倉周遊', description: '鎌倉周遊券' },
    { id: 13, day: 'Day 6', name: '鎌倉到成田機場', description: '包車前往' }
  ],
  China: [
    {
      id: 1,
      day: 'Day 1',
      name: '上海浦東機場到全季酒店(南京東路店)',
      description: '上海浦東機場地鐵 → 南京東路站',
      link: 'https://www.klook.com/zh-TW/rails-32/1012-japan/route-1336/naritaairportterminalo-to-shinjuku-trains/'
    }
  ]
}

// Cuisine
export const cuisineData = {
  China: [
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
  ],
  Japan: [
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
}
