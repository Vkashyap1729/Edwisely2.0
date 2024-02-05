// src/store/reducers/dashboardReducer.js
const initialState = {
  data: null,
  loading: false,
  error: null,
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DASHBOARD_DATA_REQUEST':
      return { ...state, loading: true, error: null }

    case 'FETCH_DASHBOARD_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null }

    case 'FETCH_DASHBOARD_DATA_FAILURE':
      return { ...state, loading: false, data: null, error: action.payload }

    // Add more cases for other actions
    default:
      return state
  }
}

export default dashboardReducer
