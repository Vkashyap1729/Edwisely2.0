// store.js
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import dashboardReducer from './reducers/dashboard.reducer'
import courseReducer from './reducers/course.reducer'
import assessmentTableReducer from './reducers/assessmentTable.reducer'
import authReducer from './reducers/login.reducer'

// Configuring redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Reducers to persist
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    course: courseReducer,
    assessmentTable: assessmentTableReducer,
    auth: persistedAuthReducer, // Using the persisted version of authReducer
  },
})

export const persistor = persistStore(store)
export default store
