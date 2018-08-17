import ajax from './interceptors'

export default login = (data) => {
  return ajax ({
    url: '/login',
    method: 'post',
    data: data
  })
}