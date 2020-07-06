
import taroRequest from '../../utils/request'

export function getFun(data) {
  return taroRequest({
    url: '/',
    method: 'GET',
    data,
  })
}
