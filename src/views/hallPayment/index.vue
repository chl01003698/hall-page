<template>
    <div>
      <section>
        <div class="bg">
          <div class="titles"></div>
        </div>
        <div class="backdrop">
          <div class="title"></div>
          <div class="charge same">
            <i class="one"></i>
            <p class="first">支付宝支付</p>
            <p class="third">推荐支付宝用户使用</p>
            <i class="check_one"></i>
          </div>
          <div class="charge">
            <i class="two"></i>
            <p class="first">微信支付</p>
            <p class="third">推荐使用微信5.0及以上版本</p>
            <i class="check"></i>
          </div>
          <div class="charge">
            <i class="three"></i>
            <p class="first">银联支付</p>
            <p class="third" style="width:64%;">推荐使用微信5.0及以上版本</p>
            <i class="check_one"></i>
          </div>
          <div class="charge last">
            <i class="four"></i>
            <p class="first">银联支付</p>
            <p class="third" style="width:65%;">推荐使用微信5.0及以上版本</p>
            <i class="check_one"></i>
          </div>
        </div>
        <div class="content" id="content">
          <form action="">
            <input @click="pay" type="button" value="确认支付" class="chargebtn">
          </form>
        </div>

        <div class="costom">
          <div class="pic" id="pic"></div>
        </div>

        <div class="tips">
          <div class="tips-btn" id="pic-btn">查看更多 <i class="crate"></i></div>
        </div>

        <p class="service" style="width:48%">官方公众号：slj-qipai</p>
        <p class="service">客服热线：400-0348-369</p>
      </section>
    </div>
</template>

<script>
import '@/libs/refreshRem'
import { hallPayment } from '@/services/hall'
export default {
  name: 'index',
  data () {
    return {
      channels: [
        {}
      ]
    }
  },
  methods: {
    pay () {
      hallPayment({
        userId: '5a97fc099b725028c8e245cd',
        channel: 'wx_wap',
        platform: 'Android',
        clientIp: '127.0.0.1',
        count: 1,
        itemId: '1'
      }, 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTVkNmY0OTg0MDc0OTMzZTQ4YTk3OGEiLCJpYXQiOjE1MTYwNzI5NDR9.rSM9YuWNkzeMsOK7OEiPdBPNl76UarAelQjGRgnG7QI').catch(e => {
        console.log(e.response.data.status.message)
      })
    }
  },
  mounted () {
    var picbtn = document.getElementById('pic-btn')
    var pic = document.getElementById('pic')
    pic.style.display = 'none'
    var costom = document.getElementById('costom')
    var content = document.getElementById('content')
    picbtn.onclick = function () {
      if (pic.style.display === 'none') {
        pic.style.display = 'block'
        content.style.zIndex = 0
        costom.style.zIndex = 999
      } else {
        pic.style.display = 'none'
        content.style.zIndex = 999
        costom.style.zIndex = 0
      }
    }
  },
  created () {
    console.log(location.search)
  }
}
</script>

<style scoped>
  body,html{height:100%;}
  body,p,input{margin:0;padding:0;list-style: none;border:0;outline:none;-webkit-appearance: none;}
  body{background: #eee;}
  *{box-sizing: border-box;}

  .bg{height:16.6rem;width:100%;background: #4cacff;border-bottom: 1px dashed #eee;overflow: hidden;}
  .titles{width:19.6rem;height:4rem;background-image: url("../../assets/images/gzsq_icon_16.png");background-repeat:no-repeat;background-size: contain;margin:2.5rem auto;}
  .backdrop{width:19.6rem;height:18.75rem;background: #fff;margin:-8.5rem auto 0;position: relative;border:1px solid #000;}
  .title{width:11.6rem;height:1.76rem;background: url("./images/gzsq_icon_01.png") no-repeat;background-size: contain;
    position: absolute;top:-0.6rem;left:4.5rem;text-align: center;color:#FCC84A;font-weight: bold;line-height: 1.5rem;font-size: 1rem;}
  .charge{width:19.6rem;height:20%;border-bottom:1px solid #7F7F7F;margin:0 auto 0.8rem;}
  .same{margin-top:1.5rem;}
  .one{display:block;width:2.4rem;height:2.4rem;margin-top:0.2rem;background: url("./images/gongneng_icon_08.png") no-repeat;background-size: contain;
    float:left;margin-left:1.2rem;}
  .first{padding-top:0.6rem;}
  .third{padding-bottom: 0.4rem;}
  .charge>p{width:65%;margin-left:0.5rem;float: left;font-size: 0.6rem;}
  .check{display: block;width:1.5rem;height:1.5rem;float: left;background: url("./images/gongneng_button_gouxuan01.png") no-repeat;background-size: contain;
    margin-top: -0.8rem;}
  .two{display:block;width:2.4rem;height:2.4rem;margin-left:1.2rem;background: url("./images/gongneng_icon_12.png") no-repeat;background-size: contain;
    float:left;margin-top:0.2rem;}
  .three{display:block;width:3.18rem;height:1.93rem;margin-left:0.6rem;background: url("./images/gongneng_icon_13.png") no-repeat;background-size: contain;
    float:left;margin-top:0.5rem;}
  .check_one{display: block;width:1.5rem;height:1.5rem;float: left;background: url("./images/gongneng_button_gouxuan02.png") no-repeat;background-size: contain;
    margin-top: -0.8rem;}
  .four{display: block;width:2.95rem;height:1.45rem;float:left;margin-top:1rem;margin-left:0.6rem;background: url("./images/gongneng_icon_lianlian.png") no-repeat;
    background-size: contain;}
  .last{border:0;}
  form{text-align: center;}
  .chargebtn{width:19.6rem;height:3.2rem;background:#EE8F45;font-family: "SimHei";border-radius:5px;font-size: 1.2rem;text-align: center;color:#fff;line-height: 3.2rem;margin:1rem auto;}
  .content{position:relative;z-index: 101;}
  .costom{width:12.68rem;height:6.3rem;margin: -6rem auto 3rem;position: relative;z-index: 100;}
  .pic{width:12.68rem;height:6.3rem;background: url("./images/gzsq_icon_02.png") no-repeat;background-size: contain;}
  .tips{width:18.38rem;height:3.25rem;background: url("./images/gzsq_icon_zi05.png") no-repeat;background-size: contain;
    margin:-3rem auto 0.2rem;overflow: hidden;}
  .service{width:50%;float:left;font-family: "Microsoft YaHei Bold";font-size: 0.8rem;margin-top:0.5rem;color:#9F9F9F;
    text-align: center;padding-bottom:0.5rem;}
  .tips-btn{width:3.37rem;height:1rem;border:1px solid #B1B1A9;margin-left:3.1rem;color:#545454;border-radius: 0.5rem;line-height: 1rem;
    padding-left:0.2rem;position: relative;font-size: 0.6rem;}
  .crate{display:block;width:0;height:0;border-top:4px solid transparent;border-bottom: 4px solid transparent;border-left: 4px solid red;position: absolute;top:0.2rem;right:0.15rem;}
</style>
