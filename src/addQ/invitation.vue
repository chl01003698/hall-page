<template>
    <div id="carm">
        <div class="content">
            <img src="./images/ss.png" alt="" class="bg">
            <div>
                <div class="firstline">
                    <span>被邀好友</span>
                    <span>注册日期</span>
                    <span>奖励内容</span>
                    <span>状态</span>
                    <div class="heng1"></div>
                </div>
                <div class="list">
                    <ul>
                        <li>
                               <div class="name1">玩家1昵称</div>
                               <div class="time1">20171-04-21</div>
                               <div class="jiang1">
                                   <p class="p1">房1卡*2</p>
                                   <p class="p1">房1卡*1</p>
                               </div>
                                <div class="liqu"><div>领1取</div></div>
                        </li>
                         <li>
                               <div class="name1">玩家1昵称</div>
                               <div class="time1">20171-04-21</div>
                               <div class="jiang1">
                                   <p class="p1">房1卡*2</p>
                                   <p class="p1">房1卡*1</p>
                               </div>
                                <div class="liqu"><div>领1取</div></div>
                        </li>
                         <li>
                               <div class="name1">玩家1昵称</div>
                               <div class="time1">20171-04-21</div>
                               <div class="jiang1">
                                   <p class="p1">房1卡*2</p>
                                   <p class="p1">房1卡*1</p>
                               </div>
                                <div class="liqu"><div>领1取</div></div>
                        </li>
                         <li>
                               <div class="name1">玩家1昵称</div>
                               <div class="time1">20171-04-21</div>
                               <div class="jiang1">
                                   <p class="p1">房1卡*2</p>
                                   <p class="p1">房1卡*1</p>
                               </div>
                                <div class="liqu"><div>领1取</div></div>
                        </li>
                         <li>
                               <div class="name1">玩家1昵称</div>
                               <div class="time1">20171-04-21</div>
                               <div class="jiang1">
                                   <p class="p1">房1卡*2</p>
                                   <p class="p1">房1卡*1</p>
                               </div>
                                <div class="liqu"><div>领1取</div></div>
                        </li>
                         <li>
                               <div class="name1">玩家1昵称</div>
                               <div class="time1">20171-04-21</div>
                               <div class="jiang1">
                                   <p class="p1">房1卡*2</p>
                                   <p class="p1">房1卡*1</p>
                               </div>
                                <div class="liqu"><div>领1取</div></div>
                        </li>
                         <li>
                               <div class="name1">玩家1昵称</div>
                               <div class="time1">20171-04-21</div>
                               <div class="jiang1">
                                   <p class="p1">房1卡*2</p>
                                   <p class="p1">房1卡*1</p>
                               </div>
                                <div class="liqu"><div>领1取</div></div>
                        </li>
                         <li>
                               <div class="name1">玩家1昵称</div>
                               <div class="time1">20171-04-21</div>
                               <div class="jiang1">
                                   <p class="p1">房1卡*2</p>
                                   <p class="p1">房1卡*1</p>
                               </div>
                                <div class="liqu"><div>领1取</div></div>
                        </li>
                         <li>
                               <div class="name1">玩家1昵称</div>
                               <div class="time1">20171-04-21</div>
                               <div class="jiang1">
                                   <p class="p1">房1卡*2</p>
                                   <p class="p1">房1卡*1</p>
                               </div>
                                <div class="liqu"><div>领1取</div></div>
                        </li>
                         <li>
                               <div class="name1">玩家1昵称</div>
                               <div class="time1">20171-04-21</div>
                               <div class="jiang1">
                                   <p class="p1">房1卡*2</p>
                                   <p class="p1">房1卡*1</p>
                               </div>
                                <div class="liqu"><div>领1取</div></div>
                        </li>
                    </ul>
                </div>
                <div class="foot">
                    <div class="one">累计邀请好友：<span>30</span></div>
                    <div class="tww">
                         <div class="two">继续邀请</div>
                    </div>
                   
                    <div class="three">
                        <p>累计领取房卡：<span>300</span></p>
                        <p>累计领取京东卡：<span>10</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "@/libs/refreshRem";
export default {
  data() {
    return {
     
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
  background: url('./images/bgs.png')
}
.content{
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate3d(-50%,-50%,0);
 width: 70%;
 height: 70%;
 /* background: yellow */
}
.bg{
    position: absolute;
    width:100% 
}
.firstline{
    position: absolute;
    color:rgb(255,247,153);
    font-size: 0.5rem;
    width: 100%;
    top:12%
}
.firstline span{
    display: inline-block;
    width: 24%;
    box-sizing: border-box;
    padding-left: 1rem
}
.heng1{
    background: rgb(215,215,215);
    height: 1px;
    width: 94%;
    margin: 0 3%
}
.list{
    position: absolute;
    top: 20%;
    font-size: 0.5rem;
    /* padding-left:1rem; */
    color: white;
    height: 62%;
    width: 100%;
    /* background: yellow; */
    overflow: auto
}
ul{
    list-style: none;
}
.list li{
    height: 1.3rem;
    margin-top:0.2rem;
    background: rgb(67,67, 132);
    box-sizing: border-box;
    width: 94%;
    margin-left:3%;
    border-radius: 0.2rem;
}
li>div{
    display: inline-block;
    height: 1.3rem;
    line-height: 1.3rem;
    width: 24%;
    padding-left:0.3rem;
    box-sizing: border-box;
    float: left;
}
.p1{
    /* margin-left:2rem;  */
    height: 50%;
    line-height: 0.65rem
}
.p2{
    height: 100%;
    line-height: 1.3rem 
}
.jiang1{
    padding-left: 1.4rem
}
.liqu{
    /* box-sizing: border-box; */
    padding-left:1rem
}
.liqu div{
      background:  rgb(36,152,64);
    width: 2rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    border-radius: 0.4rem;
    border: 1px solid rgb(216,172,125);
    margin-top:0.2rem 
    /* height: 0.8rem; */
}
.foot{
    /* background: yellow; */
    position: absolute;
    bottom: 0;
    height: 1.5rem;
    width: 100%;
    font-size: 0.3rem;
    color: rgb(13,157,225)
}
.foot>div{
    float: left;
    line-height: 1.5rem;
    /* text-align: center; */
    height: 100%;
    width: 33.3%;
    box-sizing: border-box
}
.one{
    padding-left:0.5rem 
}
.foot span{
    color:white
}
.three{
    text-align: left;
    padding-left:1rem 
}
.three p{
    height: 40%;
    line-height: 0.75rem
}
.two{
    line-height: 1.3rem;
    color: white;
    font-size: 0.6rem;
    background: rgb(55,96,188);
    text-align: center;
    border-radius: 0.4rem;
    border: 2px solid rgb(216,172,125);
    height: 88%;
}
.tww{
    box-sizing: border-box;
    height: 100%;
    padding: 0.1rem 0 0 0
}
</style>
