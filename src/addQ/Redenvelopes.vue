<template>
    <div id="carm">
        <img class="imageOne" src="./images/rede.png" alt="" v-if="first">
        <div class="content" v-if="first">
            <div class="titls">雪飞的红包</div>
            <img src="../recruit/images/bg.jpg" alt="">
            <p>雪飞</p>
            <p class="p1">各位快来领红包啊，馆长送福利</p>
            <div class="chai" @click="chai">拆红包</div>
        </div>
        <!-- 拆红包之后 -->
        <img class="imageOne" src="./images/chai.png" alt="" v-if="!first">
        <div v-if="!first" class="contentChai">
            <div class="titls1">XXX的红包</div>
            <p class="cont">各位快来领红包啊，馆长发福利啦</p>
            <div class="list">
                <div>
                    <span class="lingqu1">领取人</span>
                    <span style="font-size:1rem" class="lingqu">红包0/10</span>
                </div>
                <div class="list1">
                    <ul>
                    <li><div class="pxs"></div><div class="con"><span class="name">玩家名字</span><span class="jiang">房卡*5</span></div></li>
                    <li><div class="pxs"></div><div class="con"><span class="name">玩家名字</span><span class="jiang">房卡*5</span></div></li>
                    <li><div class="pxs"></div><div class="con"><span class="name">玩家名字</span><span class="jiang">房卡*5</span></div></li>
                    <li><div class="pxs"></div><div class="con"><span class="name">玩家名字</span><span class="jiang">房卡*5</span></div></li>
                    <li><div class="pxs"></div><div class="con"><span class="name">玩家名字</span><span class="jiang">房卡*5</span></div></li>
                    <li><div class="pxs"></div><div class="con"><span class="name">玩家名字</span><span class="jiang">房卡*5</span></div></li>
                    <li><div class="pxs"></div><div class="con"><span class="name">玩家名字</span><span class="jiang">房卡*5</span></div></li>
                    </ul>
                </div>
                
            </div>
            <div class="gogame">前往游戏</div>
        </div>
    </div>
</template>
<script>
import "@/libs/refreshRem";
export default {
  data() {
    return {
      first: true
    };
  },
  methods: {
    chai() {
      this.first = false;
    }
  }
};
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
#carm {
  width: 100%;
  height: 100%;
  /* background: rgb(48, 56, 110); */
}
.imageOne {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10% 20%;
  /* background: yellow; */
  position: absolute;
  top: 0;
  color: white;
}
.contentChai {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 5%;
  position: absolute;
  top: 0;
  font-size: 1.5rem;
  color: white;
  /* text-align: center */
}
.titls1 {
  /* font-size: 1.5rem;
    font-weight: bold; */
  text-align: center;
}
.titls {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
.content img {
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  margin-left: 50%;
  transform: translateX(-2rem);
  margin-top: 4rem;
}
.content p {
  text-align: center;
}
.p1 {
  margin-top: 2rem;
}
.chai {
  position: absolute;
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
  left: 50%;
  transform: translateX(-3rem);
  background: rgb(255, 170, 59);
  top: 23rem;
  text-align: center;
  line-height: 6rem;
  font-size: 1.3rem;
}
.cont {
  font-size: 1rem;
  margin-top: 0.5rem;
  text-align: center;
}
.list {
  color: black;
  position: absolute;
  top: 10rem;
  width: 100%;
  height: 65%;
}
ul {
  list-style: none;
}
.lingqu {
  color: rgb(133, 133, 133);
  margin-left: 5rem;
}
.lingqu1 {
  margin-left: 2rem;
  font-size: 1.3rem;
}
.list1{
    width: 100%;
    height: 93%;
    /* background: yellow; */
    overflow: auto;
    font-size: 1.1rem;
}
li{
    height: 4rem
}
.pxs{
    height: 2px;
    background: rgb(189,189,189)
}
.con{
    box-sizing: border-box;
    padding: 1.2rem 0 0 2rem
}
.jiang{
    margin-left:11rem 
}
.gogame{
    position: absolute;
    width: 10rem;
    height: 3.3rem;
    background: rgb(255,201,37);
    border-radius: 1rem;
    bottom: 0.7rem;
    left:50%;
    transform: translateX(-5rem);
    text-align: center;
    line-height: 3.3rem;
    color:rgb(149,95,9);
    font-size: 1.2rem
}
</style>
