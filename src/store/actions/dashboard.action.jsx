import axios from 'axios'
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from '../reducers/dashboard.reducer'

export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataRequest())
      const response = await axios.get(
        'https://stagingstudentpython.edwisely.com/reactProject/dashboardData'
      )
      dispatch(fetchDataSuccess(response.data))
    } catch (error) {
      dispatch(fetchDataFailure(error.message))
    }
  }
}
