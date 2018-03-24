const crypto = require('crypto')
const Url = require('url')

const domain = 'http://192.168.225.95:7005'
export const confirm = '123123'

export const generateAPI = (url) => {
  let expiry = new Date().getTime()
  let query = 'confirm=' + confirm + '&expiry=' + expiry
  let sUrl = domain + url + '?' + query
  let signature = crypto.createHmac('sha1', confirm).update(Url.parse(sUrl).format()).digest('base64')
  return sUrl + '&signature=' + signature
}
