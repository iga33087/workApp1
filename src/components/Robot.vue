<template>
  <div class="robot" @click="open" v-if="show">
    <i class="el-icon-close robotX" @click.stop="show=!show"/>
    <img class="robotImg" src="@/assets/img/robot.png">
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:true
    }
  },
  methods: {
    open() {
      window.open("https://t.me/jlhuyu888");
    }
  }
}
</script>