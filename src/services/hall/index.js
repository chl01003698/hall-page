import axios from 'axios'
import { generateAPI } from '@/libs/common'
import { createPayment } from '../common'

export const hallPayment = function (data, token = '') {
  return new Promise((resolve, reject) => {
    axios({
      headers: {
        Authorization: token
      },
      method: 'POST',
      url: generateAPI('/api/v1/orders'),
      data: data
    }).then(response => {
      createPayment(response.data.data)
      resolve({status: {code: 0, message: 'success'}})
    }).catch(error => {
      reject(error)
    })
  })
}
