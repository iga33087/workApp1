<template>
  <div class="introduction">
    <Header :icon="'homeLogo.png'" />
    <div class="content">
      <HomeBoxTitle text="游戏介绍" />
      <div class="gameList">
        <div class="gameListItem" v-for="(item,index) in 8" :key="index" @click="infoNum=index">
          <img :src="require('@/assets/img/logo/gameLogo'+(index+1)+'.png')">
        </div>
      </div>
      <div class="introductionContent">
        <HomeBoxTitle :text="gameInfo[infoNum].title" :showShadow="false" />
        {{gameInfo[infoNum].more}}
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
import gameInfo from '@/assets/data/gameInfo.json'

export default {
  data() {
    return {
      infoNum:0,
      gameInfo:gameInfo
    }
  },
  components: {
    Header,HomeBoxTitle,Footer
  },
  created() {
    document.body.style.backgroundImage="url('img/homeBg.png')"
  }
}
</script>