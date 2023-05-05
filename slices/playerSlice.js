import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  player1: "",
  player2: "",
  player3: "",
  player4: ""
}

export const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    assignPlayer1: (state,action) => {
      state.player1 = action.payload
    },

    assignPlayer2: (state,action) => {
      state.player2 = action.payload
    },

    assignPlayer3: (state,action) => {
      state.player3 = action.payload
    },

    assignPlayer4: (state,action) => {
      state.player4 = action.payload
    },


  },
})

// Action creators are generated for each case reducer function
export const { assignPlayer1, assignPlayer2, assignPlayer3, assignPlayer4 } = playerSlice.actions

export default playerSlice.reducer