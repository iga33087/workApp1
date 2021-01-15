<template>
  <div class="top" @click="goToTop" v-show="show">
    <i class="el-icon-top topIcon"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:false
    }
  },
  created() {
    document.addEventListener("scroll",()=> {
      let top=window.scrollY
      if(top>=100) this.show=true
      else this.show=false
    })
  },
  methods: {
    goToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>