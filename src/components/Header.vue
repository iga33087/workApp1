<template>
  <div class="header">
    <div class="headerBlack" v-if="isOpen" @click="isOpen=!isOpen"></div>
    <div class="headerBox">
      <div class="headerBoxLogo">
        <img class="headerBoxLogoImg" :src="require('@/assets/img/logo/'+icon)">
        <div class="headerBoxLogoText">久乐娱乐</div>
      </div>
      <div class="headerBoxTitle" v-if="title">绿色全民娱乐 公平竞技棋牌APP</div>
      <div class="headerBoxMenu" :class="{'headerBoxMenuOpen':isOpen}">
        <router-link :to="{'path':'/'}" class="headerBoxMenuItem">HOME</router-link>
        <router-link :to="{'path':'/'}" class="headerBoxMenuItem">游戏特色</router-link>
        <router-link :to="{'path':'/Introduction'}" class="headerBoxMenuItem">游戏介绍</router-link>
        <router-link :to="{'path':'/'}" class="headerBoxMenuItem">下载游戏</router-link>
        <router-link :to="{'path':'/QA'}" class="headerBoxMenuItem">游戏QA</router-link>
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
  }
}
</script>