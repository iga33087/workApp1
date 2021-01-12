<template>
  <div class="home">
    <Header :icon="'/img/homeLogo.png'" />
    <el-carousel class="homeCarousel" trigger="click" height="566px">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="homeCarouselItem">{{item}}</div>
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <div class="homeBox">
        <div class="homeBoxTitle">公平绿色竞技 棋牌APP第一选择</div>
        <div class="homeBoxContent">
          <router-link :to="{path:'/Page1'}">
            <div class="homeBoxContentItemType1">
              <img class="homeBoxContentItemType1Img" src="img/gameLogo1.png">
              <div class="homeBoxContentItemType1Text">斗智斗牌<br>烧脑战争</div>
            </div>
          </router-link>
          <div class="homeBoxContentItemType1">
            <img class="homeBoxContentItemType1Img" src="img/gameLogo5.png">
            <div class="homeBoxContentItemType1Text">全民接战<br>极速刺激</div>
          </div>
          <div class="homeBoxContentItemType1">
            <img class="homeBoxContentItemType1Img" src="img/gameLogo4.png">
            <div class="homeBoxContentItemType1Text">运气拼点<br>由底翻身</div>
          </div>
          <div class="homeBoxContentItemType1">
            <img class="homeBoxContentItemType1Img" src="img/gameLogo3.png">
            <div class="homeBoxContentItemType1Text">公牌作主<br>人面赢家</div>
          </div>
          <div class="homeBoxContentItemType1">
            <img class="homeBoxContentItemType1Img" src="img/gameLogo2.png">
            <div class="homeBoxContentItemType1Text">中国德州<br>公平呐喊</div>
          </div>
        </div>
      </div>
      <div class="homeBox">
        <div class="homeBoxTitle">享受反客为主的乐趣</div>
        <div class="homeBoxContent"></div>
      </div>
      <div class="homeBox">
        <div class="homeBoxTitle">纯绿色娱乐</div>
        <div class="homeBoxContent"></div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,Footer
  },
  created() {
    document.body.style.backgroundImage="url('img/homeBg.png')"
  }
}
</script>
