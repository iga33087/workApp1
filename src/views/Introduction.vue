<template>
  <div class="introduction">
    <Header :icon="'homeLogo.png'" />
    <div class="content">
      <div class="introductionAnchor">
        <div class="introductionAnchorItem" v-for="(item,index) in gameInfo[infoNum].rule" :key="index" @click="toLink('rule'+index)">{{item.content}}</div>
      </div>
      <HomeBoxTitle text="游戏介绍" />
      <div class="gameList">
        <div class="gameListItem" v-for="(item,index) in Object.keys(gameInfo)" :key="index" @click="infoNum=item;toContent();$forceUpdate()">
          <img :src="require('@/assets/img/logo/'+gameInfo[item].logo+'.png')">
        </div>
      </div>
      <div class="introductionContent">
        <HomeBoxTitle :text="infoNum" :showShadow="false" />
        <video class="introductionContentVideo" controls autoplay muted="muted" :src="require('@/assets/video/game/'+gameInfo[infoNum].video)"></video>
        <InfoVideoLine v-for="(item,index) in gameInfo[infoNum].title" :key="index" :text="item.text" :fontColor="item.fontColor" :borderColor="item.borderColor" />
        <RuleItem :typeNone="true" v-for="(item,index) in gameInfo[infoNum].rule" :id="'rule'+index" :data="item" :key="infoNum+index" />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HomeBoxTitle from '@/components/HomeBoxTitle.vue'
import Footer from '@/components/Footer.vue'
import InfoVideoLine from '@/components/InfoVideoLine.vue'
import RuleItem from '@/components/RuleItem.vue'
import gameRule from '@/assets/data/gameRule.json'

export default {
  data() {
    return {
      infoNum:'十三张',
      gameInfo: gameRule
    }
  },
  components: {
    Header,HomeBoxTitle,Footer,InfoVideoLine,RuleItem
  },
  created() {
    document.body.style.backgroundImage="url('img/homeBg.png')"
  },
  methods: {
    toContent() {
      let top=document.querySelectorAll(".introductionContent")[0].offsetTop-10
      window.scrollTo(0, top);
    },
    toLink(x) {
      this.$router.push({'path':'/Introduction','hash':x,'query':{'time':new Date().getTime()}})
    },
  }
}
</script>