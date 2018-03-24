<template>
    <div id="carm">
        <img src="./images/bg.jpg" id="images">
        <!-- <img src="./images/input.png" id="inputs"> -->
        <!-- <input type="text" placeholder='请输入您的手机或微信号' class="input"> -->
        <img  src="./images/tijiao.png" class="tijiao">
        <div class="feet">
            <div class="feet-left">
                <p class="p1">馆长咨询</p>
                <p class="p2">(电话+微信)</p>
                <p class="p2">全国</p>
                <p class="p1">13269259137<span class="fuzhi">复制</span></p>
            </div>
            <div class="feet-right">
                <p>河南<span class="num">12354679846</span><span class="fuzhi">复制</span></p>
                <p>河南<span class="num">12354679846</span><span class="fuzhi">复制</span></p>
                <p>河南<span class="num">12354679846</span><span class="fuzhi">复制</span></p>
                <p>河南<span class="num">12354679846</span><span class="fuzhi">复制</span></p>
    <p>河南<span class="num">12354679846</span><span class="fuzhi">复制</span></p>
     <p>河南<span class="num">12354679846</span><span class="fuzhi">复制</span></p>
      <p>河南<span class="num">12354679846</span><span class="fuzhi">复制</span></p>
       <p>河南<span class="num">12354679846</span><span class="fuzhi">复制</span></p>
            </div>
        </div>
    </div>
</template>
<script>
import "@/libs/refreshRem"
export default {
  data () {
    return {}
  }
}
</script>
<style>
body,
html {
  width: 100%;
  height: 100%;
  overflow:hidden;
}
* {
  margin: 0;
  padding: 0;
}
#carm,
#images {
  width: 100%;
  height: 100%;
  /* height:16rem */
}
.input {
  position: absolute;
  top: 5rem;
  left: 5rem;
  height: 2rem;
  width: 10rem;
  background: url("./images/input.png");
}
.tijiao {
  width: 6rem;
  position: absolute;
  top: 8rem;
  left: 15rem;
}
.feet {
  position: absolute;
  bottom: 0;
  /* background: yellow; */
  width: 100%;
  height: 2.8rem;
}
.feet-left {
  /* padding-top: 2%; */
  position: absolute;
  width: 20%;
  height: 100%;
}
.feet-left p {
  height: 25%;
  font-size: 0.5rem;
  text-align: center;
}
.p1 {
  font-weight: bold;
}
.fuzhi {
  display: inline-block;
  border-radius: 0.2rem;
  color: white;
  background: red;
  padding: 0 0.2rem;
}
.feet-right{
    height: 100%;
    position: absolute;
    width: 80%;
    right: 0;
    top: 0
}
.feet-right p {
    float: left;
    padding: 0;
    margin: 0;
  height: 33%;
  width: 33%;
  font-size: 0.5rem;
  text-align: center;
}
.num{
    font-weight: bold
}
</style>
