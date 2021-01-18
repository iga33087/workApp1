<template>
  <div class="QA">
    <Header :icon="'homeLogo.png'"/>
    <div class="content">
      <div class="QABox">
        <div class="QABoxTitle">游戏相关问题</div>
        <div class="QABoxMenu">
          <div class="QABoxMenuItem">其他问题</div>
        </div>
        <div class="QAList">
          <div class="QAListItem" v-for="(item,index) in QAList" :key="index">
            <div class="QAListItemTitle">
              <div class="QAListItemTitleText">{{item.title}}</div>
              <div class="QAListItemTitleOpen" @click="item.isOpen=!item.isOpen"><i class="el-icon-caret-bottom QAListItemTitleOpenIcon" :class="{'QAListItemTitleOpenRev':!item.isOpen}"/></div>
            </div>
            <div class="QAListItemMore" :class="{'QAListItemMoreShow':item.isOpen}">{{item.more}}</div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,Footer
  },
  data() {
    return {
      QAList: [
        {title:"常見問題",type:[
          {title:"類型一"},
        ]}
      ]
    }
  },
  created() {
    document.body.style.backgroundImage="url('img/homeBg.png')"
  }
}
</script>