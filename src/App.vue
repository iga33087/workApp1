<template>
  <div id="app">
    <Loading v-if="$store.state.loading" />
    <Robot ref="Robot" />
    <Top/>
    <router-view/>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import Robot from '@/components/Robot.vue'
import Top from '@/components/Top.vue'

export default {
  components:{Loading,Robot,Top},
  created() {
    this.$root.$on("openQR",()=> {
      this.$refs.Robot.open()
    })
  }
}
</script>