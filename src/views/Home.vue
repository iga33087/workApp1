<template>
  <div class="home">
    <Header :icon="'homeLogo.png'" />
    <el-carousel class="homeCarousel" trigger="click">
      <QRBox/>
      <el-carousel-item v-for="(item,index) in imgBoxList" :key="index">
        <div class="homeCarouselItem">
          <img class="homeCarouselItemImg" :src="require('@/assets/img/imgBox/'+item.src)">
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <div class="homeBox">
        <HomeBoxTitle text="公平绿色竞技 棋牌APP第一选择"/>
        <div class="homeBoxContent">
          <router-link class="homeBoxContentItemType1" :to="{path:'/'}">
            <img class="homeBoxContentItemType1Img" src="@/assets/img/logo/gameLogo1.png">
            <div class="homeBoxContentItemType1Text">斗智斗牌<br>烧脑战争</div>
          </router-link>
          <router-link class="homeBoxContentItemType1" :to="{path:'/'}">
            <img class="homeBoxContentItemType1Img" src="@/assets/img/logo/gameLogo5.png">
            <div class="homeBoxContentItemType1Text">全民接战<br>极速刺激</div>
          </router-link>
          <router-link class="homeBoxContentItemType1" :to="{path:'/'}">
            <img class="homeBoxContentItemType1Img" src="@/assets/img/logo/gameLogo3.png">
            <div class="homeBoxContentItemType1Text">运气拼点<br>由底翻身</div>
          </router-link>
          <router-link class="homeBoxContentItemType1" :to="{path:'/'}">
            <img class="homeBoxContentItemType1Img" src="@/assets/img/logo/gameLogo4.png">
            <div class="homeBoxContentItemType1Text">公牌作主<br>人面赢家</div>
          </router-link>
          <router-link class="homeBoxContentItemType1" :to="{path:'/'}">
            <img class="homeBoxContentItemType1Img" src="@/assets/img/logo/gameLogo2.png">
            <div class="homeBoxContentItemType1Text">中国德州<br>公平呐喊</div>
          </router-link>
        </div>
      </div>
      <div id="homeBox2" class="homeBox">
        <HomeBoxTitle text="纯绿色娱乐"/>
        <div class="homeBoxContent2">
          <div class="homeBoxContentItemType2">
            24HR线上客服<br>火速处理问题
          </div>
          <div class="homeBoxContentItemType2">
            5G蓝光连线<br>API切换迅速
          </div>
          <div class="homeBoxContentItemType2">
            6EB存储终端<br>高容顺畅连结
          </div>
          <div class="homeBoxContentItemType2">
            真人用户竞技<br>健康扑克游戏
          </div>
        </div>
      </div>
      <div class="homeBox">
        <HomeBoxTitle text="享受反客为主的乐趣"/>
        <div class="homeBoxContent homeBoxContent3">
          <video class="homeBoxContentVideo" controls autoplay muted="muted">
            <source src="@/assets/video/Home_movie.mp4" type="video/mp4">
          </video>
          <a class="homeBoxContentQR" href="https://838461.889646544754624.site:9020/ntx/index.html?type=2&houseId=666&userId=2697782&PID=ntx">
            <img class="homeBoxContentQRImg" src="@/assets/img/QR.jpg">
          </a>
          <div class="homeBoxContentInfo">
            <a class="homeBoxContentQR" href="https://838461.889646544754624.site:9020/ntx/index.html?type=2&houseId=666&userId=2697782&PID=ntx">
              <img class="homeBoxContentInfoImg" src="@/assets/img/download1.png">
            </a>
            <a class="homeBoxContentQR" href="https://838461.889646544754624.site:9020/ntx/index.html?type=2&houseId=666&userId=2697782&PID=ntx">
              <img class="homeBoxContentInfoImg" src="@/assets/img/download2.png">
            </a>
            <a class="homeBoxContentQR" href="https://838461.889646544754624.site:9020/ntx/index.html?type=2&houseId=666&userId=2697782&PID=ntx">
              <div class="homeBoxContentInfoText">立即下载<br>畅游扑克世界</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HomeBoxTitle from '@/components/HomeBoxTitle.vue'
import Footer from '@/components/Footer.vue'
import QRBox from '@/components/QRBox.vue'

export default {
  data() {
    return {
      imgBoxList: [
        {src:"imgBox1.jpg",link:""},
        {src:"imgBox2.jpg",link:""},
        {src:"imgBox3.jpg",link:""},
        {src:"imgBox4.jpg",link:""},
        {src:"imgBox5.jpg",link:""},
      ]
    }
  },
  components: {
    Header,HomeBoxTitle,Footer,QRBox
  },
  created() {
    document.body.style.backgroundImage="url('img/homeBg.png')"
  }
}
</script>
