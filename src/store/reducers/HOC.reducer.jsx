// userSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  profile_picture: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setProfilePicture: (state, action) => {
      state.profile_picture = action.payload
    },
  },
})

export const { setName, setEmail, setProfilePicture } = userSlice.actions
export default userSlice.reducer
