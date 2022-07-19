import { API_ENDPOINTS } from '../../endpoints'
import { serviceAPI } from '../../service-api'

export const getProjects = () => (
  serviceAPI({
    url: API_ENDPOINTS.projects,
    method: 'GET'
  })
)
