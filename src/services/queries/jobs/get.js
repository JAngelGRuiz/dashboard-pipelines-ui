import { API_ENDPOINTS } from '../../endpoints'
import { serviceAPI } from '../../service-api'

export const getJobs = () => (
  serviceAPI({
    url: API_ENDPOINTS.jobs,
    method: 'GET'
  })
)
