import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './reducers/dashboard.reducer'
import courseReducer from './reducers/course.reducer'
import assessmentTableReducer from './reducers/assessmentTable.reducer'
const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    course: courseReducer,
    assessmentTable: assessmentTableReducer,
  },
})

export default store
