import { configureStore } from '@reduxjs/toolkit'
import  emojiReducer from '../emoji/emojiSlice'

export const store = configureStore({
  reducer: {
    emoji : emojiReducer
    
  },
})