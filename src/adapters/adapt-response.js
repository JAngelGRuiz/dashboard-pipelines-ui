import PropTypes from 'prop-types'

export const adaptResponse = (resp, id) => {
  return resp.find(element => element[id]) || {}
}

adaptResponse.propTypes = {
  resp: PropTypes.array,
  id: PropTypes.string
}
