import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  target: ""
}

export const targetSlice = createSlice({
  name: 'target',
  initialState,
  reducers: {
    setTarget: (state,action) => {
      state.target = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTarget } = targetSlice.actions

export default targetSlice.reducer