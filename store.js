import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slices/playerSlice'
import targetSlice from './slices/targetSlice'

export const store = configureStore({
  reducer: {
    players: playerReducer,
    target: targetSlice,
  },
})