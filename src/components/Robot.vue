<template>
  <div class="robot" @click="open">
    <img class="robotImg" src="img/robot.png">
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      window.open("https://t.me/telegram");
    }
  }
}
</script>