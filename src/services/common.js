import pingpp from 'pingpp-js'

export const createPayment = function (charge) {
  return new Promise((resolve, reject) => {
    pingpp.createPayment(charge, (result, error) => {
      if (result === 'success') {
        resolve()
      } else if (result === 'fail') {
        reject(error)
      } else if (result === 'cancel') {
        reject(error)
      }
    })
  })
}
