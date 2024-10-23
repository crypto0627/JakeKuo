// Schedules
const createSchedule = (activities: [string, string][]) =>
  activities.map(([time, activity]) => ({ time, activity }))

export const schedules: {
  [country: string]: {
    [day: string]: { time: string; activity: string }[]
  }
} = {
  China: {
    'Day 1': createSchedule([
      ['06:30', '桃園機場集合'],
      ['08:45 - 10:50', 'Flight from 桃園國際機場 to 上海浦東機場'],
      ['11:00 - 12:30', '出關 機場吃午餐'],
      ['13:00 - 14:30', '坐地鐵到南京東路站'],
      ['14:30', 'Check in 全季酒店 & 放行李'],
      ['15:00 - 17:30', '南京東路步行街'],
      [
        '17:30 - 19:30',
        '坐地鐵到陸家嘴打卡上海三大高樓 進國金中心5樓天台可以拍到東方明珠'
      ],
      ['19:30 - 21:00', '坐地鐵回南京東路步行街 逛外灘與銀行'],
      ['21:00', '回酒店']
    ]),
    'Day 2': createSchedule([
      ['08:30 - 09:00', '搭乘地鐵到武康路'],
      ['09:00 - 11:00', '武康大樓打卡點 宋慶齡故居 武康大樓郵政所 羅密歐陽台'],
      ['11:00 - 12:00', '搭地鐵到新天地 吃午餐'],
      ['12:00 - 13:30', '吃午餐'],
      ['13:30 - 14:30', '新天地逛街 搭地鐵到 上海孫中山故居'],
      ['14:30 - 15:30', '逛孫中山故居'],
      ['15:30 - 18:30', '搭地鐵到豫園 逛豫園和城隍廟'],
      ['18:30', '吃晚餐'],
      ['19:30', '回酒店'],
      ['19:30', '逛外灘風景']
    ]),
    'Day 3': createSchedule([
      ['08:30 - 09:30', '搭乘地鐵到上海虹橋站 轉高鐵前往蘇州站'],
      ['09:30 - 12:30', '搭高鐵中'],
      ['12:30 - 13:30', '抵達蘇州站吃午餐'],
      ['13:30 - 13:40', '酒店Check in 放行李'],
      ['13:40 - 17:40', '逛蘇州博物館(提前7天預約 公眾號搜蘇州博物館) 拙政園'],
      ['17:40 - 19:00', '逛平江路 吃晚餐'],
      ['19:00 - 21:30', '誠品 東方之門 金雞湖 星海廣場'],
      ['21:30 - 22:00', '回酒店']
    ]),
    'Day 4': createSchedule([
      ['08:30 - 09:30', '虎丘'],
      ['09:30 - 12:30', '寒山寺和楓橋風景區'],
      ['12:30 - 13:30', '吃午餐'],
      ['13:30 - 17:30', '西園寺逛逛 打車到七里山塘風景區逛逛'],
      ['17:30 - 19:30', '打車到觀前街 吃晚餐'],
      ['19:30 - 20:00', '回酒店']
    ]),
    'Day 5': createSchedule([
      ['08:30 - 10:30', '前往烏鎮'],
      ['09:30 - 10:30', '酒店寄放行李'],
      [
        '10:30 - 17:30',
        '遊烏鎮 西柵 木新美術館 草木本色染坊 烏鎮郵局 水上集市'
      ],
      ['17:30 - 18:30', '吃晚餐'],
      ['18:30 - 20:30', '烏鎮夜景'],
      ['20:30 - 21:30', '回酒店休息']
    ]),
    'Day 6': createSchedule([
      ['08:30 - 09:30', '搭乘大巴前往杭州'],
      ['09:30 - 10:30', '酒店放行李'],
      [
        '10:30 - 17:30',
        '遊西湖十景路線: 柳浪聞鶯 坐船 三潭映月 坐船 花港觀魚 步行 雷鋒夕照 步行 南屏晚鐘 步行 蘇堤春曉 步行 曲院風荷 步行 平湖秋月 步行 斷橋殘雪 完成'
      ],
      ['17:30 - 18:30', '吃晚餐 杭州酒家'],
      ['18:30 - 20:30', '逛in77百貨 西湖噴水秀 19:30']
    ]),
    'Day 7': createSchedule([
      ['08:30 - 09:30', '吃早餐'],
      ['09:30 - 10:30', '武林門碼頭 坐船'],
      [
        '10:30 - 17:30',
        '京杭大運河 到 拱宸橋 步行 小河直街 大兜路歷史街區 香積寺 打車至武林夜市 吃晚餐'
      ],
      ['17:30 - 18:30', '武林夜市逛街'],
      ['18:30', '打車到錢塘江城市阳台 看燈光秀 19:30']
    ]),
    'Day 8': createSchedule([
      ['08:30 - 09:30', '早上到上海'],
      ['09:30 - 11:00', '搭高鐵中'],
      ['11:00 - 14:30', '上海虹橋機場站附近百貨逛逛'],
      ['14:30 - 16:30', '前往浦東機場'],
      ['16:30 - 19:45', 'Check in 登機 逛機場']
    ])
  },
  Japan: {
    'Day 1': createSchedule([
      ['05:50 - 08:50', '08:50 桃園國際機場出境'],
      ['08:50 - 12:55', 'Flight from 桃園國際機場 to 東京成田機場'],
      ['12:55 - 13:55', '抵達東京'],
      ['13:55 - 15:00', 'Check in at 新宿御宛APA'],
      ['15:00 - 18:00', '新宿 → 銀座逛街 不想逛衣服 可以去秋葉原'],
      ['18:30 - 20:30', '晚餐 新宿餃子の福包'],
      ['20:30 - 22:30', '新宿歌舞伎町 namco']
    ]),
    'Day 2': createSchedule([
      ['08:30 - 09:30', '抵達 豐洲市場'],
      ['09:30 - 10:30', '吃美食 豐洲市場'],
      ['10:30 - 12:30', '逛街 豐洲千客萬來'],
      [
        '12:30 - 15:30',
        '想看酷炫的景→豐洲teamLab Planets(需預約) 想逛街→Mitsui Shopping Park LaLaport都市船塢豐洲或泡湯'
      ],
      ['15:30 - 18:30', 'Visit 台場海濱公園 鋼彈 自由女神像 台場夜景 彩虹大橋'],
      ['18:30 - 19:30', '晚餐 台場'],
      ['19:30 - 20:30', '回酒店']
    ]),
    'Day 3': createSchedule([
      ['09:30 - 10:30', '早餐 新宿'],
      ['10:30 - 12:00', '澀谷八公銅像'],
      ['12:00 - 14:00', '涉谷敘敘苑燒肉'],
      ['14:00 - 17:00', '涉谷 原宿逛街 不想逛街可以去明治神宮和表參道'],
      ['17:00 - 18:30', '晚餐 涉谷'],
      ['18:30 - 20:30', '涉谷Sky'],
      ['20:30 - 21:00', '回酒店']
    ]),
    'Day 4': createSchedule([
      ['09:30 - 10:30', '新宿APA Hotel to 鎌倉站 鎌倉大酒店放行李'],
      ['10:30 - 13:30', '鎌倉高校前 (SLAM DANK 平交道, 七里濱美景咖啡)'],
      ['13:30 - 14:30', '長谷寺'],
      ['14:30 - 17:00', '鎌倉大佛, 鶴岡八幡宮 Check in 鎌倉大都會大酒店'],
      ['17:00 - 18:00', '晚餐 鎌倉大都會大酒店']
    ]),
    'Day 5': createSchedule([
      ['08:00 - 10:30', '鎌倉大都會大酒店 to 江島神社'],
      ['10:30 - 11:00', '江之島海蠟燭展望燈塔'],
      ['11:00 - 13:00', '江之島岩屋'],
      ['13:00 - 14:30', '午餐 江之島'],
      ['14:30 - 15:30', '新江之島水族館'],
      ['15:30 - 16:30', '回酒店'],
      ['16:30 - 18:00', '晚餐 鎌倉大都會大酒店']
    ]),
    'Day 6': createSchedule([
      ['08:30 - 09:30', 'Check out 鎌倉大都會大酒店'],
      ['09:30 - 12:00', '鎌倉站 → 羽田機場'],
      ['15:00', '飛機起飛返台']
    ])
  }
}

export const dailySchedule = {
  China: [
    'Day 1',
    'Day 2',
    'Day 3',
    'Day 4',
    'Day 5',
    'Day 6',
    'Day 7',
    'Day 8'
  ],
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
      day: 'Day 4',
      name: '新宿到鎌倉',
      description: '搭乘JR湘南新宿線 新宿站 → 鎌倉站'
    },
    { id: 10, day: 'Day 4', name: '鎌倉周遊', description: '鎌倉周遊券' },
    { id: 11, day: 'Day 5', name: '鎌倉周遊', description: '鎌倉周遊券' },
    {
      id: 12,
      day: 'Day 6',
      name: '鎌倉到羽田機場',
      description: '搭乘橫須賀線 鎌倉站 → 橫濱站轉乘京急本線 羽田機場第三航廈'
    }
  ],
  China: [
    {
      id: 1,
      day: 'Day 1',
      name: '上海浦東機場到南京東路站',
      description: '上海浦東機場地鐵 → 南京東路站 地鐵2號線 $7 1小時'
    },
    {
      id: 2,
      day: 'Day 1',
      name: '南京東路站到陸家嘴站',
      description: '南京東路站 → 陸家嘴站 地鐵2號線 $3 11分鐘'
    },
    {
      id: 3,
      day: 'Day 1',
      name: '陸家嘴站到南京東路站',
      description: '陸家嘴站 → 南京東路 地鐵2號線 $3 11分鐘'
    },
    {
      id: 4,
      day: 'Day 2',
      name: '南京東路站到交通大學站',
      description: '南京東路站 → 交通大學站 地鐵10號線 $4 14分鐘'
    },
    {
      id: 5,
      day: 'Day 2',
      name: '上海圖書館到新天地站',
      description: '上海圖書館站 → 一大會址 新天地站 地鐵10號線 $3 6分鐘'
    },
    {
      id: 6,
      day: 'Day 2',
      name: '新天地到孫中山故居',
      description: '打車或步行'
    },
    {
      id: 7,
      day: 'Day 2',
      name: '孫中山故居到豫園',
      description: '一大会址·新天地站 → 豫園站 地鐵10號線 $3'
    },
    {
      id: 8,
      day: 'Day 2',
      name: '豫園回酒店',
      description: '豫園站 → 南京東路站 地鐵10號線 $3'
    },
    {
      id: 9,
      day: 'Day 3',
      name: '上海到蘇州',
      description:
        '南京東路站 → 上海虹橋站 地鐵2號線 $5 38分鐘 轉搭高鐵到蘇州火車站 $31 35分鐘'
    },
    {
      id: 10,
      day: 'Day 3',
      name: '酒店到拙政園 蘇州博物館',
      description: '蘇州站 → 北寺塔站 4號線 $2 20分鐘'
    },
    {
      id: 11,
      day: 'Day 3',
      name: '蘇州博物館到平江路',
      description: '拙政园苏博站 → 悬桥巷站 6號線 $2'
    },
    {
      id: 12,
      day: 'Day 3',
      name: '平江路到誠品',
      description: '相门站 → 时代广场站 1號線 $3'
    },
    {
      id: 13,
      day: 'Day 3',
      name: '誠品到東方之門',
      description: '时代广场站 → 东方之门站 1號線 $2 '
    },
    {
      id: 14,
      day: 'Day 3',
      name: '東方之門回酒店',
      description: '东方之门站 → 乐桥站 1號線 下車 轉搭4號線到苏州火车站 $3'
    },
    {
      id: 15,
      day: 'Day 4',
      name: '酒店到虎丘',
      description: '打車'
    },
    {
      id: 16,
      day: 'Day 4',
      name: '虎丘到寒山寺',
      description: '打車'
    },
    {
      id: 17,
      day: 'Day 4',
      name: '寒山寺到西園寺',
      description: '步行'
    },
    {
      id: 18,
      day: 'Day 4',
      name: '西園寺到七里山塘景区',
      description: '打車'
    },
    {
      id: 19,
      day: 'Day 4',
      name: '七里山塘景区到觀前街',
      description: '打車'
    },
    {
      id: 20,
      day: 'Day 4',
      name: '觀前街回酒店',
      description: '察院场站 → 蘇州站 4號線 $2'
    },
    {
      id: 21,
      day: 'Day 5',
      name: '蘇州到烏鎮',
      description: '蘇州站坐大巴或打車'
    },
    {
      id: 22,
      day: 'Day 6',
      name: '烏鎮到杭州',
      description: '坐大巴或打車'
    },
    {
      id: 23,
      day: 'Day 7',
      name: '酒店到武林碼頭',
      description: '打車'
    },
    {
      id: 24,
      day: 'Day 7',
      name: '城市陽台到桔子酒店',
      description: '打車'
    },
    {
      id: 25,
      day: 'Day 8',
      name: '杭州桔子酒店到上海虹橋站',
      description:
        '定安路站 → 城站 地铁1号线 $2 步行至杭州站轉搭高鐵到上海虹橋站'
    },
    {
      id: 26,
      day: 'Day 8',
      name: '上海虹橋站到浦東機場站',
      description: '搭地铁2号线 $8 1小時44分鐘'
    }
  ]
}

// Ticket
export const ticketData = {
  China: [
    {
      id: 1,
      day: 'Day 1',
      name: '上海之巔',
      description: '118層上海之巔觀光廳門票(提前一天預約)',
      imageSrc: '/image.png',
      link: 'https://www.klook.com/zh-TW/activity/4333-shanghai-tower-observation-deck-shanghai/'
    },
    {
      id: 2,
      day: 'Day 2',
      name: '宋慶齡故居',
      description: '宋慶齡故居門票(提前一天預約)',
      imageSrc: '/image.png',
      link: 'https://www.shsoong-chingling.com/list-canguanyuyue.html'
    },
    {
      id: 3,
      day: 'Day 2',
      name: '孫中山故居',
      description: '孫中山故居門票(提前一天預約)',
      imageSrc: '/image.png',
      link: 'https://sswgw.org.cn/jggk/sscl/shszsgjjng/3939.htm'
    },
    {
      id: 4,
      day: 'Day 3',
      name: '蘇州博物館',
      description: '蘇州博物館門票(提前七天預約)免費 10/26號預約11/2號入館',
      imageSrc: '/image.png',
      link: 'https://www.szmuseum.com/Other/ReservationTip'
    },
    {
      id: 5,
      day: 'Day 3',
      name: '拙政園',
      description: '拙政園門票(提前一天預約) $80',
      imageSrc: '/image.png',
      link: 'https://tw.trip.com/travel-guide/attraction/suzhou/humble-administrator-s-garden-82473/'
    },
    {
      id: 6,
      day: 'Day 4',
      name: '虎丘',
      description: '虎丘門票(提前一天預約) $60',
      imageSrc: '/image.png',
      link: 'https://suzhou.bendibao.com/tour/2020820/ly80094.shtm'
    },
    {
      id: 7,
      day: 'Day 4',
      name: '寒山寺',
      description: '寒山寺門票(提前一天預約) $20',
      imageSrc: '/image.png',
      link: 'https://m.suzhou.bendibao.com/tour/69042.shtm'
    },
    {
      id: 8,
      day: 'Day 4',
      name: '西園寺',
      description: '西園寺門票(現場買) $5',
      imageSrc: '/image.png',
      link: 'https://m.suzhou.bendibao.com/tour/69042.shtm'
    },
    {
      id: 9,
      day: 'Day 5',
      name: '烏鎮西柵',
      description: '烏鎮西柵 $150',
      imageSrc: '/image.png',
      link: 'https://tw.trip.com/travel-guide/attraction/tongxiang/wuzhen-water-town-79254/'
    },
    {
      id: 10,
      day: 'Day 7',
      name: '杭州武林門碼頭坐船',
      description: '船票 $150',
      imageSrc: '/image.png',
      link: ''
    }
  ],
  Japan: [
    {
      id: 1,
      day: 'Day 2',
      name: 'Teamlab Plants & 萬葉俱樂部溫泉',
      description: 'Teamlab Plants & 萬葉俱樂部溫泉套票',
      imageSrc: '/master-trip/teamlab_plants.webp',
      link: 'https://www.klook.com/zh-TW/activity/25300-teamlab-planets-toyosu-tokyo-ticket/'
    },
    {
      id: 2,
      day: 'Day 3',
      name: 'Shibuya sky',
      description: 'Shibuya sky ticket link',
      imageSrc: '/master-trip/shibuya.webp',
      link: 'https://www.klook.com/zh-TW/activity/70672-shibuya-sky-tokyo/'
    }
  ]
}

// Cuisine
export const cuisineData = {
  China: [
    {
      id: 1,
      day: 'Day 1',
      name: '上海 蟹黃面 生煎包 湯包 紅糖滋粑 串串 本幫菜',
      description: '推薦餐廳',
      imageSrc: '/master-trip/生煎包.webp',
      link: 'https://www.vietjetair.com/zh-TW/pages/%E4%B8%8A%E6%B5%B7%E5%90%8D%E8%8F%9C%EF%BC%8C%E5%BF%85%E5%98%97-1711435768998'
    }
  ],
  Japan: [
    {
      id: 1,
      day: 'Day 3',
      name: 'Shibuya敘敘苑燒肉',
      description: '敘敘苑預約鏈接',
      imageSrc: '/master-trip/shushuyuan.webp',
      link: 'https://www.jojoen.co.jp/cn/'
    },
    {
      id: 2,
      day: 'Day 1',
      name: '新宿 餃子の福包',
      description: '餃子の福包',
      imageSrc: '/master-trip/chaochifubao.webp',
      link: 'https://maps.app.goo.gl/bNcsCTcv9JW7kcKs6'
    },
    {
      id: 3,
      day: 'Day 1',
      name: '新宿 HARBS',
      description: 'HARBS',
      imageSrc: '/image.png',
      link: 'https://maps.app.goo.gl/bNcsCTcv9JW7kcKs6'
    }
  ]
}
