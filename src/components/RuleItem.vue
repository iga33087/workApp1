<template>
  <li class="ruleItem" :class="{'typeNone':typeNone}">
    <div class="ruleItemContent">{{data.content}}</div>
    <div class="ruleItemChilden" v-if="data.childen.length">
      <ul>
        <RuleItem v-for="(item,index) in data.childen" :data="item" :key="index" />
      </ul>
    </div>
  </li>
</template>

<script>
import RuleItem from '@/components/RuleItem.vue'
export default {
  name:"RuleItem",
  props: {
    data: {},
    typeNone: {
      default:false
    }
  },
  components: {RuleItem}
}
</script>

<style scoped>
  .typeNone {
    list-style-type:none;
  }
</style>