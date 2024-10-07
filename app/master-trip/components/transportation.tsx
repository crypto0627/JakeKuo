'use client'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { CountryButton } from './countrybtn'
import { setCountry } from '@/lib/store/countrySlice'
import Link from 'next/link'

const transportJapanData = [
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

const transportChinaData = [
  {
    id: 1,
    name: '上海浦東機場到全季酒店(南京東路店)',
    description: '上海浦東機場地鐵 → 南京東路站',
    link: 'https://www.klook.com/zh-TW/rails-32/1012-japan/route-1336/naritaairportterminalo-to-shinjuku-trains/'
  }
]

export function Transportation() {
  const [countrySelected, setCountrySelected] = useState<string>('China')

  const dispatch = useDispatch()
  const handleCountryChange = (country: string) => {
    dispatch(setCountry(country))
  }

  const Country = useSelector(
    (state: RootState) => state.country.selectedCountry
  )

  useEffect(() => {
    if (Country === 'China' || Country === 'Japan') {
      setCountrySelected(Country)
    }
  }, [Country])

  const transportRef = useRef(null)
  const isTransportInView = useInView(transportRef, {
    once: false,
    amount: 0.1
  })

  return (
    <motion.section
      id="transport"
      ref={transportRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isTransportInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex h-screen w-full bg-background"
    >
      <div className="flex flex-1 flex-col">
        <header className="border-b bg-background px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">交通資訊</h2>
          </div>
        </header>
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <CountryButton
                isSelected={countrySelected === 'China'}
                onClick={() => {
                  setCountrySelected('China')
                  handleCountryChange('China')
                }}
              >
                China
              </CountryButton>
              <CountryButton
                isSelected={countrySelected === 'Japan'}
                onClick={() => {
                  setCountrySelected('Japan')
                  handleCountryChange('Japan')
                }}
              >
                Japan
              </CountryButton>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countrySelected === 'China' ? (
              <>
                {transportChinaData.map((transport) => (
                  <div key={transport.id} className="border rounded-lg">
                    {transport.link ? (
                      <Link href={transport.link} target="_blank">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">
                            {transport.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {transport.description}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">
                          {transport.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {transport.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <>
                {transportJapanData.map((transport) => (
                  <div key={transport.id} className="border rounded-lg">
                    {transport.link ? (
                      <Link href={transport.link} target="_blank">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">
                            {transport.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {transport.description}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">
                          {transport.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {transport.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
