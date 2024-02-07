import axios from 'axios'
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from '../reducers/assessmentTable.reducer'

export const fetchData = (url) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataRequest())
      const response = await axios.get(url)
      dispatch(fetchDataSuccess(response.data))
    } catch (error) {
      dispatch(fetchDataFailure(error.message))
    }
  }
}
