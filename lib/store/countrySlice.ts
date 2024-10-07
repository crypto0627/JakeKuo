import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CountryState {
  selectedCountry: string
}

const initialState: CountryState = {
  selectedCountry: 'China' // 預設值
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      state.selectedCountry = action.payload
    }
  }
})

export const { setCountry } = countrySlice.actions
export default countrySlice.reducer
