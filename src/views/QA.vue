<template>
  <div class="QA">
    <Header :icon="'homeLogo.png'"/>
    <div class="content">
      <div class="QABox">
        <div class="QABoxItem" v-for="(item,index) in QAList" :key="index">
          <div class="QABoxTitle">{{item.title}}</div>
          <div class="QABoxMenu">
            <div class="QABoxMenuItem" v-for="(item2,index2) in item.type" :key="index2" :class="{'onCheck':item2.id==item.nowCheck}" @click="item.nowCheck=item2.id">{{item2.title}}</div>
          </div>
          <div class="QAList">
            <div class="QAListItem" v-for="(item3,index3) in QATypeList" :key="index3" v-show="item3.parentId==item.nowCheck">
              <div class="QAListItemTitle" @click="item3.isOpen=!item3.isOpen">
                <div class="QAListItemTitleText">Q{{item3.title}}</div>
                <div class="QAListItemTitleOpen"><i class="el-icon-caret-bottom QAListItemTitleOpenIcon" :class="{'QAListItemTitleOpenRev':!item3.isOpen}"/></div>
              </div>
              <div class="QAListItemMore" :class="{'QAListItemMoreShow':item3.isOpen}" v-html="item3.more"></div>
            </div>
          </div>
        </div>
        <div id="QAForm" class="QABoxItem">
          <div class="QABoxTitle">其他合作问题</div>
          <Form/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Form from '@/components/Form.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,Form,Footer
  },
  data() {
    return {
      QAList: [
        {title:"帐号相关",nowCheck:"",type:[
          {id:1,title:"一般问题"},
          {id:2,title:"修改问题"},
          {id:3,title:"分数相关"},
          {id:4,title:"其他问题"},
        ]},
        {title:"安装及游戏内容",nowCheck:"",type:[
          {id:5,title:"游戏问题"},
          {id:6,title:"游戏规则"},
          {id:7,title:"活动优惠"},
          {id:8,title:"用户推荐"},
          {id:9,title:"安装问题"},
          {id:10,title:"联盟问题"},
        ]}
      ],
      QATypeList: [
        {parentId:1,title:"1、如何注册帐号",more:"您可以于手机客户端APP中首页点击帐号注册，输入地区及手机号后，通过验证即可注册。",isOpen:false},
        {parentId:1,title:"2、无法收到验证码",more:"1)先确认地区及手机号是否输入正确。<br>2)如输入皆为正确，有可能是系统验证暂时出现连线问题，可以稍后进行尝试。<br>3)如果仍无法解决，请于官网 https://www.jioulehuyu.com/ 24HR线上客服进行求助。",isOpen:false},
        {parentId:1,title:"3、手机无法登陆",more:"我们提供「密码登陆」及「验证码登陆」两种方式。登陆前请先确认游戏是否维修或更新中，如非维修期间无法登陆可以尝试看另一种登陆方式。如皆无法登陆，请于官网 https://www.jioulehuyu.com/ 24HR线上客服进行求助。",isOpen:false},
        {parentId:1,title:"4、游戏会闪退如何处理",more:"我们有提供专属游戏App的修复工具，请于游戏下载页面找寻修复工具进行下载，或由App中大厅点击预防闪退进行下载。",isOpen:false},
        {parentId:1,title:"5、如何修改我的帐号密码",more:"我们的游戏皆是以手机号作为游戏帐号，皆属实名制。如您要变更您的密码，可以于游戏主介面左上角点击自身头像，选择「重制密码」后，进行密码的变更。",isOpen:false},
        {parentId:1,title:"6、如何更改我的游戏匿称",more:"您可以于游戏主介面左上角点击自身头像，选择「编辑信息」后，进行匿称的变更，但变更需要扣除10的积分。（建议在帐号创立时，谨慎思考自己的昵称）",isOpen:false},
        {parentId:2,title:"1、如何修改我的帐号密码",more:"我们的游戏皆是以手机号作为游戏帐号，皆属实名制。如您要变更您的密码，可以于游戏主介面左上角点击自身头像，选择「重制密码」后，进行密码的变更。",isOpen:false},
        {parentId:2,title:"2、如何修改我的手机号",more:"目前我们尚未提供手机号的变更，您只能重新进行帐号注册。",isOpen:false},
        {parentId:2,title:"3、如何修改我的游戏匿称",more:"您可以于游戏主介面左上角点击自身头像，选择「编辑信息」后，进行匿称的变更，但变更需要扣除10的积分。（建议在帐号创立时，谨慎思考自己的昵称）",isOpen:false},
        {parentId:3,title:"1、如何上分",more:"您可以于手机客户端APP中首页点击帐号注册，输入地区及手机号后，通过验证即可注册。",isOpen:false},
        {parentId:3,title:"2、无法收到验证码",more:"1)先确认地区及手机号是否输入正确。<br>2)如输入皆为正确，有可能是系统验证暂时出现连线问题，可以稍后进行尝试。<br>3)如果仍无法解决，请于官网 https://www.jioulehuyu.com/ 24HR线上客服进行求助。",isOpen:false},
        {parentId:3,title:"3、手机无法登陆",more:"我们提供「密码登陆」及「验证码登陆」两种方式。登陆前请先确认游戏是否维修或更新中，如非维修期间无法登陆可以尝试看另一种登陆方式。如皆无法登陆，请于官网 https://www.jioulehuyu.com/ 24HR线上客服进行求助。",isOpen:false},
        {parentId:3,title:"4、游戏会闪退如何处理",more:"我们有提供专属游戏App的修复工具，请于游戏下载页面找寻修复工具进行下载，或由App中大厅点击预防闪退进行下载。",isOpen:false},
        {parentId:4,title:"1、客服维修该怎么办",more:"我们提供了多样化的客服方式，如真的因为满线或是所有联系方式都在维修，您可以前往官网寻找网站客服或是耐心稍后修复。",isOpen:false},
        {parentId:5,title:"1、如何开始游戏",more:"目前久乐互娱游戏App内采用联盟制，需要先加入联盟后才能开始体验各种游戏，您可以向邀请您加入的人索要联盟，或是于24HR线上客服进行求助。",isOpen:false},
        {parentId:5,title:"2、有问题我要如何找客服",more:"1)您可以游戏主介面下方点击反馈后，选择微信、QQ、在线客服或留言进行联系。<br>2)请于官网 https://www.jioulehuyu.com/ 24HR线上客服进行求助。",isOpen:false},
        {parentId:5,title:"3、我如何看我过往的游戏记录",more:"1)游戏主介面下方点击「战绩」，可以点击您想看的游戏类型进行所有记录查看。<br>2)如果您是在联盟内点击「联盟战绩」，只可以看当前所在的联盟游戏进行记录。",isOpen:false},
        {parentId:5,title:"4、我不会玩「牛牛」，有游戏规则的说明吗",more:"1)您可以在游戏主介面下方点击规则选择「牛牛」游戏，即可以观看相关的规则说明。<br>2)如游戏房间有特定的玩法或是规则，您可以在游戏房间内点击左方的「惊叹号」进行说明查看。",isOpen:false},
        {parentId:5,title:"5、有优惠活动可以参加吗",more:"所有的优惠活动皆可以在官网，或是于游戏主介面点击右上方的「活动」进行查看。如有您能参加的优惠，也要请您随时注意，才不会失去您的权利喔！",isOpen:false},
        {parentId:6,title:"1、请问游戏规则是什么",more:"请前往网站的「游戏介绍」页面查看游戏规则，或是于APP中点击规则进行查看。",isOpen:false},
        {parentId:7,title:"1、我该在哪里看游戏活动呢",more:"您可以进入游戏后于游戏主大厅右上角点击「活动」选项后查看现在游戏提供的相关活动。",isOpen:false},
        {parentId:7,title:"2、联盟会有活动吗",more:"如各联盟有活动举行，建议您询问各联盟相关的人员。",isOpen:false},
        {parentId:8,title:"1、这游戏真不错，我如何推荐朋友一起玩",more:"非常感谢您喜欢我们久乐互娱的游戏，您可以提供我们的官方网址https://www.jioulehuyu.com/ 请朋友前往下载游戏APP客户端呢！",isOpen:false},
        {parentId:8,title:"2、这游戏没有任何推荐奖金吗？",more:"目前我们并没有提供任何个人推荐相关的分数优惠或返利，但我们会不断的提供多种优惠活动，请随时关注！",isOpen:false},
        {parentId:9,title:"1、游戏客户端安装不了",more:"请先确认您的手机容量或是手机的软件是否更新到适合的版本。如果皆为正常但游戏却无法下载，请您向客服进行反应，我们会协助您处理下载。",isOpen:false},
        {parentId:9,title:"2、修复工具有什么用",more:"修复工具是我们提供给玩家即时解决游戏中可能产生的BUG，如果在网站维修或是其他特殊状况下，都可以即时使用处理。",isOpen:false},
        {parentId:10,title:"1、请问我如何加入联盟",more:"您可以进入游戏后于游戏主大厅点击「大联盟」选项后输入联盟号码后进入联盟。",isOpen:false},
        {parentId:10,title:"2、不知道联盟号码怎么办",more:"当您下载游戏后，可以询问您的朋友联盟号码或是进线客服寻求协助。",isOpen:false},
        {parentId:10,title:"3、请问我能够自行开立联盟吗",more:"如您想自行开立联盟，您可以进线客服寻求协助。",isOpen:false},
        {parentId:10,title:"4、我和我朋友可以自己组成一个私人联盟吗",more:"因为游戏目前为官方直营，不开放私人房卡或是小型联盟供您选择。但如您有任何疑问或想自行开立联盟，您可以进线客服寻求协助。",isOpen:false},
      ]
    }
  },
  created() {
    document.body.style.backgroundImage="url('img/homeBg.png')"
  },
  methods: {
    check(type,item2) {
      for(let item of type) {
        item.onCheck=false
      }
      this.nowCheck=item2
      item2.onCheck=true
    }
  }
}
</script>