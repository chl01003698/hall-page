<template>
  <div class="hello">
    <button @click="test">test</button>
  </div>
</template>

<script>
import { hallPayment } from '@/services/hall'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    test () {
      hallPayment({
        userId: '123',
        channel: 'wx_wap',
        platform: 'Android',
        clientIp: '127.0.0.1',
        count: 1,
        itemId: '1'
      }, 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTVkNmY0OTg0MDc0OTMzZTQ4YTk3OGEiLCJpYXQiOjE1MTYwNzI5NDR9.rSM9YuWNkzeMsOK7OEiPdBPNl76UarAelQjGRgnG7QI').then(data => {
        console.log(data.data)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
