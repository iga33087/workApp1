<template>
  <div class="err404">
    <Header :icon="'homeLogo.png'" />
    <div class="content">
      <div class="homeBox">
        <HomeBoxTitle text="404 页面不存在" />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HomeBoxTitle from '@/components/HomeBoxTitle.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,HomeBoxTitle,Footer
  },
  created() {
    document.body.style.backgroundImage="url('img/homeBg.png')"
  }
}
</script>