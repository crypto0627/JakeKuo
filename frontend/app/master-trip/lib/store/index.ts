import { configureStore } from '@reduxjs/toolkit'
import countryReducer from './countrySlice'
import dailyReducer from './dailySlice'
export const store = configureStore({
  reducer: {
    country: countryReducer,
    daily: dailyReducer
  }
})

// 根據需求設定Redux的類型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
