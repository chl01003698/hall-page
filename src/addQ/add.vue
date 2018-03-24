<template>
    <div id="carm">
       <div class="title">官方麻将试玩群</div>
       <div class="heng"><span></span>流行玩法</div>
       <ul class="u1">
         <li>小平胡试玩群</li>
          <li>小平胡试玩群</li>
           <li>小平胡试玩群</li>
            <li>小平胡试玩群</li>
             <li>小平胡试玩群</li>
       </ul>
       <div class="heng"><span></span>地方玩法</div>
       <ul class="u2">
         <li><p>北京市</p><div>北京试玩群</div></li>
         <li><p>北京市</p><div>北京试玩群</div></li>
         <li><p>北京市</p><div>北京试玩群</div></li>
         <li><p>北京市</p><div>北京试玩群</div></li>
         <li><p>北京市</p><div>北京试玩群</div></li>
         <li><p>北京市</p><div>北京试玩群</div></li>
       </ul>
    </div>
</template>
<script>
import "@/libs/refreshRem";
export default {
  data() {
    return {
      phone: [
        { region: "河南", phoneNum: "18612947993" },
        { region: "河南", phoneNum: "18612947993" },
        { region: "河南", phoneNum: "18612947993" },
        { region: "河南", phoneNum: "18612947993" },
        { region: "河南", phoneNum: "18612947993" },
        { region: "河南", phoneNum: "18612947993" },
        { region: "河南", phoneNum: "18612947993" },
        { region: "河南", phoneNum: "18612947993" }
      ]
    };
  }
}
</script>
<style>
body,
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
}
#carm{
  width: 100%;
  height: 100%;
  background: rgb(48,56,110)
}
.title{
  font-size: 1.8rem;
  text-align: center;
  height: 6rem;
  line-height: 6rem;
  color: darkorange;
  /* background: darkgrey; */
  font-weight: bold
}
.heng{
  height: 2rem;
  background: rgb(10,9,22);
  line-height: 2rem;
  color:white;
  border-top:0.3rem solid rgb(210,177,120)
}
ul{
  list-style:none
}
.u1{
  /* background: violet; */
  height: 6rem;
  width: 100%

}
.u1 li{
  float: left;
  height: 2rem;
  width: 20%;
  font-size: 0.5rem;
  text-align: center;
  line-height: 2rem;
  background: palevioletred;
  border-radius: 0.3rem;
  text-align: center;
  box-sizing: border-box;
  margin: 3% 2.5% 0 2.5%
}
.u2{
  width: 100%
}
.u2 li{
  width: 25%;
  height: 4rem;
  box-sizing: border-box;
  color: white;
  float: left;
  padding: 0.4rem 0.3rem;
  text-align: center;
  /* line-height: 4rem */
}
.u2 li p{
  font-size: 0.8rem;
  height: 40%;
  width: 100%
}
.u2 li div{
  height: 60%;
  width: 100%;
  border-radius: 0.3rem;
  text-align: center;
  line-height: 2rem;
  font-size: 0.6rem;
  background:rgb(69,77,179);
}
</style>
