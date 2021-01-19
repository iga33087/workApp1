<template>
  <div class="footer">
    <div class="footerBox">
      <div class="footerList">
        <router-link :to="{'path':'/QA','hash':'QAForm'}" class="footerListItem">联络我们</router-link>
        <router-link :to="{'path':'/Privacy'}" class="footerListItem">隐私政策</router-link>
        <router-link :to="{'path':'/Download'}" class="footerListItem">游戏下载</router-link>
      </div>
      <div class="footerBoxTitle">©2021 by 久乐互娱製作 www.jioulehuyu.com</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>