<template>
  <div class="homeBoxTitle">
    <div class="homeBoxTitleShadow" v-if="showShadow">{{text}}</div>
    <div class="homeBoxTitleText" v-html="text"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {},
    showShadow: {
      default:true
    }
  }
}
</script>