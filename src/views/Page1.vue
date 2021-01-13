<template>
  <div class="page1">
    <Header :icon="'gameLogo1.png'" />
    <div class="content">
        <img class="title" src="@/assets/img/title.png">
        <img class="detail" src="@/assets/img/detail.png">
        <Info/>
        <div class="line1">喜欢游戏速度极快</div>
        <Screen/>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Info from '@/components/Info.vue'
import Screen from '@/components/Screen.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,Info,Screen,Footer
  },
  created() {
    document.body.style.backgroundImage="url('img/bg.png')"
  }
}
</script>
