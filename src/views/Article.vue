<template>
  <div class="article">
    <h1 class="noneH1">九乐互娱热点内容</h1>
    <Header :icon="'homeLogo.png'"/>
    <div class="content">
      <HomeBoxTitle :text="'文章'" />
      <router-link v-for="item in list" :to="{name:'ArticleDetail',params: { id: item.id }}" class="introductionContent" :key="item.id">
        <div class="introductionContentMore">詳細</div>
        <div class="introductionContentImgBox">
          <img class="introductionContentImg" :src="item.img ? item.img : require('@/assets/img/logo/downloadLogo.png')">
        </div>
        <div class="introductionContentInfo">
          <h3 class="introductionContentInfoTitle">
            <div class="introductionContentInfoTitleBox">
              <div class="introductionContentInfoTitleBoxType">{{getProjectTitle(item.tagId)}}</div>
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
      list:[],
      tagList:[]
    }
  },
  async created() {
    this.$store.dispatch("loading",true)
    let obj= {projectId:this.$store.state.projectId}
    this.list=await this.$api.getArticle(obj)
    this.tagList=await this.$api.TagByProjectId()
    this.$store.dispatch("loading",false)
  },
  methods: {
    getProjectTitle(x) {
      let arr=this.tagList.filter(res=> res.id==x)
      let res=arr[0] ? arr[0].title : "分類不存在"
      return res
    },
  }
}
</script>