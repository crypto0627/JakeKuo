import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DailyState {
  selectedDaily: string
}

const initialState: DailyState = {
  selectedDaily: 'China' // 預設值
}

const dailySlice = createSlice({
  name: 'daily',
  initialState,
  reducers: {
    setDaily: (state, action: PayloadAction<string>) => {
      state.selectedDaily = action.payload
    }
  }
})

export const { setDaily } = dailySlice.actions
export default dailySlice.reducer
