import axios from 'axios'

const service = axios.create({
  timeout:5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if(res.code != 0){
      return Promise.reject(new Error(res.message || 'Error'))
    }else{
      return res
    }
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service