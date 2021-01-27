<template>
  <div class="article">
    <Header :icon="'homeLogo.png'"/>
    <div class="content">
      <HomeBoxTitle :text="'文章'" />
      <router-link v-for="item in list" :to="{name:'ArticleDetail',params: { id: item.id }}" class="introductionContent" :key="item.id">
        <div class="introductionContentMore">詳細</div>
        <div class="introductionContentImgBox">
          <img class="introductionContentImg" src="@/assets/img/install/IOS3.png">
        </div>
        <div class="introductionContentInfo">
          <h3 class="introductionContentInfoTitle">
            <div class="introductionContentInfoTitleBox">
              <div class="introductionContentInfoTitleBoxType">{{item.type}}</div>
              <div class="introductionContentInfoTitleBoxText">{{item.title}}</div>
            </div>
            <span class="introductionContentInfoTitleTime">{{item.time}}</span>
          </h3>
          <div class="introductionContentInfoContent" v-html="item.content"></div>
        </div>
      </router-link>
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
      list:[]
    }
  },
  async created() {
    let obj= {projectId:this.$store.state.projectId}
    this.list=await this.$api.getArticle(obj)
  }
}
</script>