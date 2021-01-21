<template>
  <div class="robot" @click="open" v-if="show">
    <div class="robotBlack" @click.stop="open" v-if="showBox">
      <div class="robotBlackBox">
        <div class="robotBlackBoxTitle">
          <img class="robotBlackBoxTitleImg" src="@/assets/img/logo/homeLogo.png">
          <div>請掃QR Code</div>
        </div>
        <div class="robotBlackBoxContent">
          <img class="robotBlackBoxContentImg" src="@/assets/img/客服wechat.jpg">
          <div class="robotBlackBoxContentText">微信号:jlhuyu8888</div>
        </div>
      </div>
    </div>
    <i class="el-icon-close robotX" @click.stop="show=!show"/>
      <img class="robotImg" src="@/assets/img/robot.png">
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:true,
      showBox:false
    }
  },
  methods: {
    open() {
      this.showBox=!this.showBox
      //window.open("https://u.wechat.com/IGrEG2cOi2L3Rh1f0IhIeIY");
    }
  }
}
</script>