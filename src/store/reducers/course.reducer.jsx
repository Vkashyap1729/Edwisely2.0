import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  courseData: [],
  loading: false,
  error: null,
}

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true
      state.error = null
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false
      state.courseData = action.payload
    },
    fetchDataFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } =
  courseSlice.actions
export default courseSlice.reducer
