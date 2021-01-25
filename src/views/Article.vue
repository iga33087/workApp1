<template>
  <div class="article">
    <Header :icon="'homeLogo.png'"/>
    <div class="content">
      <HomeBoxTitle :text="'文章'" />
      <router-link v-for="item in 10" :to="{name:'ArticleDetail',params: { id: 1 }}" class="introductionContent" :key="item">
        <div class="introductionContentMore">詳細</div>
        <div class="introductionContentImgBox">
          <img class="introductionContentImg" src="@/assets/img/install/IOS3.png">
        </div>
        <div class="introductionContentInfo">
          <h3 class="introductionContentInfoTitle">
            <div class="introductionContentInfoTitleBox">
              <div class="introductionContentInfoTitleBoxType">公告</div>
              <div class="introductionContentInfoTitleBoxText">測試文章測試文章測試文章</div>
            </div>
            <span class="introductionContentInfoTitleTime">2021/01/25 10:00:00</span>
          </h3>
          <div class="introductionContentInfoContent">測試文章測試文章測試文章測試文章測試文章測試文章測試文章測試文章測試文章測試文章測試文章測試文章測試文章測試文章測試文章測試文章測試文章測試文章</div>
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
}
</script>