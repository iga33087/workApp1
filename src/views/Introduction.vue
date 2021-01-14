<template>
  <div class="introduction">
    <Header :icon="'homeLogo.png'" />
    <div class="content">
      <HomeBoxTitle text="游戏介绍" />
      <div class="gameList">
        <div class="gameListItem" v-for="(item,index) in Object.keys(gameInfo)" :key="index" @click="infoNum=item">
          <img :src="require('@/assets/img/logo/'+gameInfo[item].logo+'.png')">
        </div>
      </div>
      <div class="introductionContent">
        <HomeBoxTitle :text="infoNum" :showShadow="false" />
        <div v-html="gameInfo[infoNum].content"></div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HomeBoxTitle from '@/components/HomeBoxTitle.vue'
import Footer from '@/components/Footer.vue'

export default {
  data() {
    return {
      infoNum:'十三张',
      gameInfo: {
        "十三张":{logo:"gameLogo1",content:"一、牌型规则<br>\
\
1.牌面数值：10、J、Q、K都为10，其它按牌面数字计算。<br>\
\
2.三公牌型大小顺序为：至尊>大三公>小三公>混三公>9点>8点 >7点>...1点>0点<br>\
至尊：别名豹九，三张3<br>\
大三公：三张K，三张Q，三张J<br>\
小三公：三张9……三张2，三张A<br>\
混三公：KQJ混搭<br>\
双公：其中仅有两张牌是KQJ<br>\
单公：其中仅有一张牌是KQJ<br>\
\
3.金花牌型：<br>\
金花牌型大小顺序为：豹子 > 顺金 > 金花 > 顺子 > 对子 > 单张<br>\
豹子（炸弹）：三张点相同的牌。例：AAA、222。<br>\
顺金（同花顺、色托）：花色相同的顺子。例：黑桃456、红桃789。最大的顺金为花色相同的QKA，最小的顺金为花色相同的123。<br>\
金花（色皮）：花色相同，非顺子。例：黑桃368，方块145。<br>\
顺子（拖拉机）：花色不同的顺子。例：黑桃5红桃6方块7。最大的顺子为花色不同的QKA，最小的顺子为花色不同的123。<br>\
对子：两张点数相同的牌。例：223，334。<br>\
单张：三张牌不组成任何类型的牌。<br>\
\
4.金花倍数：豹子6倍，同花顺5倍，金花4倍，顺子3倍，对子2倍，散牌1倍<br>\
\
5.如果牌型相同，则比较三张手牌中牌值最大的那张，如果最大牌一样则比较花色，<br>\
\
6.花色大小顺序：黑桃>红桃>梅花>方块<br>\
\
7.点数相同时，双公>单公。<br>\
\
1.庄闲：每局中会有一个庄家，剩余玩家为闲家。闲家在游戏中进行下注，庄家不需要下注。<br>\
\
2.亮牌：玩家将手上的牌公示给其他玩家。<br>\
\
3.比牌：庄家和闲家一一比较牌型大小，按照牌型大小顺序。<br>\
\
4.结算：庄家和闲家一一结算，根据闲家的下注数额及双方牌型计算输赢积分。<br>\
\
5.四张牌玩法：选择一张作为弃牌，其余三张组合牌型参与比牌。<br>\
\
6.限制降注：本局下注的最小分值要高于上一局下注分值的一半。<br>\
\
7.王癞玩法：扑克中将新增加大小王两张扑克，摸到大小王可以作为任意配牌和其他手牌进行组合，优先组合成最大牌型（注：大小王不参与比牌）。经典王癞：前两张手牌不会出现大小王。疯狂王癞：前两张手牌会出现大小王。<br>\
\
8.轮庄方式：<br>\
霸王庄：第一个坐下的玩家为庄家，如果离开，则第二个坐下的为庄家，直到游戏结束。不可负分时，玩家没分，游戏结束。<br>\
牌大坐庄：第一个坐下为庄家，第二局之后根据上一局牌型大的为庄家。"},
        "牛牛":{logo:"gameLogo5",content:"222"},
        "斗公牛":{logo:"gameLogo2",content:"333"},
        "三公":{logo:"gameLogo3",content:"444"},
        "三公比金花":{logo:"gameLogo6",content:"555"},
        "拼三张":{logo:"gameLogo4",content:"666"},
        "龙虎":{logo:"gameLogo7",content:"777"},
        "百人牛牛":{logo:"gameLogo8",content:"888"},
      }
    }
  },
  components: {
    Header,HomeBoxTitle,Footer
  },
  created() {
    document.body.style.backgroundImage="url('img/homeBg.png')"
  }
}
</script>