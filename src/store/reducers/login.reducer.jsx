import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', // Initialize state from local storage
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true
      localStorage.setItem('isLoggedIn', 'true') // Store isLoggedIn state in local storage
    },
    logout(state) {
      state.isLoggedIn = false
      localStorage.setItem('isLoggedIn', 'false') // Store isLoggedIn state in local storage
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
