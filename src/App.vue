<template>
  <div id="app">
    <Robot ref="Robot" />
    <Top/>
    <router-view/>
  </div>
</template>

<script>
import Robot from '@/components/Robot.vue'
import Top from '@/components/Top.vue'

export default {
  components:{Robot,Top},
  created() {
    this.$root.$on("openQR",()=> {
      this.$refs.Robot.open()
    })
  }
}
</script>