import { API_ENDPOINTS } from '../../endpoints'
import { serviceAPI } from '../../service-api'

export const getPipelines = () => (
  serviceAPI({
    url: API_ENDPOINTS.pipelines,
    method: 'GET'
  })
)
