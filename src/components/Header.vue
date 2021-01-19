<template>
  <div class="header">
    <div class="headerBlack" v-if="isOpen" @click="isOpen=!isOpen"></div>
    <div class="headerBox">
      <router-link class="headerBoxLogo" :to="{'path':'/'}">
        <img class="headerBoxLogoImg" :src="require('@/assets/img/logo/'+icon)">
        <div class="headerBoxLogoText">久乐互娱</div>
      </router-link>
      <div class="headerBoxTitle" v-if="title">绿色全民娱乐 公平竞技棋牌APP</div>
      <div class="headerBoxMenu" :class="{'headerBoxMenuOpen':isOpen}">
        <router-link :to="{'path':'/'}" class="headerBoxMenuItem">HOME</router-link>
        <router-link :to="{'path':'/'}" class="headerBoxMenuItem">文章</router-link>
        <div class="headerBoxMenuItem" @click="toLink">游戏特色</div>
        <router-link :to="{'path':'/Introduction'}" class="headerBoxMenuItem">游戏介绍</router-link>
        <router-link :to="{'path':'/Download'}" class="headerBoxMenuItem">下载游戏</router-link>
        <router-link :to="{'path':'/QA'}" class="headerBoxMenuItem">游戏QA</router-link>
        <a href="https://t.me/jlhuyu888" class="headerBoxMenuItem">线上客服</a>
      </div>
      <i class="el-icon-s-fold headerBoxMenuOpenIcon" @click="isOpen=!isOpen" />
    </div>
  </div>
</template>

<script>
export default {
  props:["title","icon"],
  data() {
    return {
      isOpen:false
    }
  },
  methods: {
    toLink() {
      this.$router.push({'path':'/','hash':'homeBox2','query':{'time':new Date().getTime()}})
    }
  }
}
</script>