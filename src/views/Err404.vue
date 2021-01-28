<template>
  <div class="err404">
    <Header :icon="'homeLogo.png'" />
    <div class="content">
      <div class="homeBox">
        <HomeBoxTitle text="404 页面不存在" />
        <div class="err404Content">
          <div class="err404ContentText">你可能想找以下頁面</div>
          <div class="err404ContentList">
            <router-link :to="{'path':'/'}" class="err404ContentListItem">1.回到官網主畫面</router-link>
            <router-link :to="{'path':'/Download'}" class="err404ContentListItem">2.遊戲下載</router-link>
            <router-link :to="{'path':'/QA'}" class="err404ContentListItem">3.看看遊戲的Q&A</router-link>
            <div class="err404ContentListItem" @click="openQR">4.聯繫線上客服</div>
          </div>
        </div>
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
  },
  methods: {
    openQR() {
      this.$root.$emit("openQR")
    }
  }
}
</script>