<template>
  <div class="home">
    <Header :icon="'/img/homeLogo.png'" />
    <el-carousel class="homeCarousel" trigger="click">
      <QRBox/>
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="homeCarouselItem"><img class="homeCarouselItemImg" src="@/assets/img/imgBox/imgBox1.png"></div>
        <div class="homeCarouselItem"><img class="homeCarouselItemImg" src="@/assets/img/imgBox/imgBox2.png"></div>
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <div class="homeBox">
        <div class="homeBoxTitle">公平绿色竞技 棋牌APP第一选择</div>
        <div class="homeBoxContent">
          <router-link class="homeBoxContentItemType1" :to="{path:'/Page1'}">
            <img class="homeBoxContentItemType1Img" src="img/gameLogo1.png">
            <div class="homeBoxContentItemType1Text">斗智斗牌<br>烧脑战争</div>
          </router-link>
          <router-link class="homeBoxContentItemType1" :to="{path:'/Page1'}">
            <img class="homeBoxContentItemType1Img" src="img/gameLogo5.png">
            <div class="homeBoxContentItemType1Text">全民接战<br>极速刺激</div>
          </router-link>
          <router-link class="homeBoxContentItemType1" :to="{path:'/Page1'}">
            <img class="homeBoxContentItemType1Img" src="img/gameLogo4.png">
            <div class="homeBoxContentItemType1Text">运气拼点<br>由底翻身</div>
          </router-link>
          <router-link class="homeBoxContentItemType1" :to="{path:'/Page1'}">
            <img class="homeBoxContentItemType1Img" src="img/gameLogo3.png">
            <div class="homeBoxContentItemType1Text">公牌作主<br>人面赢家</div>
          </router-link>
          <router-link class="homeBoxContentItemType1" :to="{path:'/Page1'}">
            <img class="homeBoxContentItemType1Img" src="img/gameLogo2.png">
            <div class="homeBoxContentItemType1Text">中国德州<br>公平呐喊</div>
          </router-link>
        </div>
      </div>
      <div class="homeBox">
        <div class="homeBoxTitle">纯绿色娱乐</div>
        <div class="homeBoxContent2">
          <div class="homeBoxContentItemType2">
            24小时技术客服支持<br>秒问秒回 火速处理
          </div>
          <div class="homeBoxContentItemType2">
            专业蓝光连线技术<br>5G流畅
          </div>
          <div class="homeBoxContentItemType2">
            BAT级服务器终端<br>客户连结
          </div>
          <div class="homeBoxContentItemType2">
            绿色公平竞技<br>健康扑克游戏
          </div>
        </div>
      </div>
      <div class="homeBox">
        <div class="homeBoxTitle">享受反客为主的乐趣</div>
        <div class="homeBoxContent homeBoxContent3">
          <div class="homeBoxContentVideo"></div>
          <img class="homeBoxContentQR" src="@/assets/img/QR.jpg">
          <div class="homeBoxContentInfo">
            <img class="homeBoxContentInfoImg" src="@/assets/img/download1.png">
            <img class="homeBoxContentInfoImg" src="@/assets/img/download2.png">
            <div class="homeBoxContentInfoText">立即下载<br>畅游扑克世界</div>
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
import Footer from '@/components/Footer.vue'
import QRBox from '@/components/QRBox.vue'

export default {
  components: {
    Header,Footer,QRBox
  },
  created() {
    document.body.style.backgroundImage="url('img/homeBg.png')"
  }
}
</script>
