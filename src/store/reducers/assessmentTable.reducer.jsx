import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  assessmentTableData: [],
  loading: false,
  error: null,
}

const assessmentTableSlice = createSlice({
  name: 'assessmentTable',
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
  assessmentTableSlice.actions
export default assessmentTableSlice.reducer
