<template>
  <div class="header">
    <div class="headerBox">
      <div class="headerBoxLogo">
        <img class="headerBoxLogoImg" :src="icon">
        <div class="headerBoxLogoText">久乐娱乐</div>
      </div>
      <div class="headerBoxTitle" v-if="title">绿色全民娱乐 公平竞技棋牌APP</div>
      <div class="headerBoxMenu">
        <div class="headerBoxMenuItem">HOME</div>
        <div class="headerBoxMenuItem">游戏特色</div>
        <div class="headerBoxMenuItem">游戏介绍</div>
        <div class="headerBoxMenuItem">下载游戏</div>
        <div class="headerBoxMenuItem">游戏QA</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["title","icon"]
}
</script>