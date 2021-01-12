<template>
  <div id="app">
    <Robot/>
    <router-view/>
  </div>
</template>

<script>
import Robot from '@/components/Robot.vue'
export default {
  components:{Robot}
}
</script>