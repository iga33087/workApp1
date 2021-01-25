<template>
  <div class="articleDetail">
    <Header :icon="'homeLogo.png'" />
    <div class="content">
      <HomeBoxTitle :text="'文章'" />
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
}
</script>