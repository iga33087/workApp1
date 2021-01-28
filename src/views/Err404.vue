<template>
  <div class="err404">
    <Header :icon="'homeLogo.png'" />
    <div class="content">
      <div class="homeBox">
        <HomeBoxTitle text="404 页面不存在" />
        <div class="err404Content">
          <div class="err404ContentText">您可以尝试点击下方有兴趣的页面继续浏览</div>
          <div class="err404ContentList">
            <router-link :to="{'path':'/'}" class="err404ContentListItem"><i class="el-icon-thumb err404ContentListItemIcon"/>回到官网主画面</router-link>
            <router-link :to="{'path':'/Download'}" class="err404ContentListItem"><i class="el-icon-thumb err404ContentListItemIcon"/>游戏下载</router-link>
            <router-link :to="{'path':'/QA'}" class="err404ContentListItem"><i class="el-icon-thumb err404ContentListItemIcon"/>看看游戏的Q&A</router-link>
            <div class="err404ContentListItem" @click="openQR"><i class="el-icon-thumb err404ContentListItemIcon"/>联繫线上客服</div>
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