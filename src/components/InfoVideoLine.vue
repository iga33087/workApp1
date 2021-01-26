<template>
  <div class="infoVideoLine">
    <div class="infoVideoLine" :style="{'color':fontColor}">{{text}}</div>
    <div class="infoVideoShadow" :style="{'-webkit-text-stroke': '10px '+borderColor}">{{text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {},
    fontColor: {
      default:"#fff"
    },
    borderColor: {
      default:"#f00"
    }
  }
}
</script>