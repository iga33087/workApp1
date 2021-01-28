<template>
  <div class="articleDetail">
    <Header :icon="'homeLogo.png'" />
    <div class="content">
      <div class="introductionContent">
        <HomeBoxTitle :text="data.title" :showShadow="false" />
        <div class="introductionContentArticleDetailInfo">
          <div class="introductionContentArticleDetailInfoType" v-if="data.type">{{data.type}}</div>
          <div class="introductionContentArticleDetailInfoTime">{{data.time}}</div>
        </div>
        <div class="introductionContentText" v-html="data.content"></div>
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
  data() {
    return {
      data: {}
    }
  },
  async created() {
    this.$store.dispatch("loading",true)
    this.data=await this.$api.getArticleById(this.$route.params.id)
    this.$store.dispatch("loading",false)
    if(!this.data) {
      alert("查无此文!")
      this.$router.go(-1)
    }
  }
}
</script>