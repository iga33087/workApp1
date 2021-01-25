<template>
  <div class="articleDetail">
    <Header :icon="'homeLogo.png'" />
    <div class="content">
      <div class="introductionContent">
        <HomeBoxTitle :text="data.title" :showShadow="false" />
        <div class="introductionContentArticleDetailInfo">
          <div class="introductionContentArticleDetailInfoType">{{data.type}}</div>
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
      data: {
        img:"http://julegaming.com/img/IOS3.276d0670.png",
        title:"測試標題",
        type:"公告",
        content:"516516514564564165415615615516516514564564165415615615516516514564564165415615615516516514564564165415615615516516514564564165415615615516516514564564165415615615",
        time:"2021/01/25 10:00:00"
      }
    }
  }
}
</script>