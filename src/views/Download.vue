<template>
  <div class="download">
    <h1 class="noneH1">九乐互娱 下载游戏</h1>
    <Header :icon="'homeLogo.png'" />
    <div class="content">
      <div class="homeBox">
        <HomeBoxTitle text="游戏下载" />
        <div class="homeBoxContent">
          <div class="downloadLink">
            <!--<div class="downloadLinkItem">
              <img class="downloadLinkItemImg" src="@/assets/img/logo/downloadLogo.png">
              <div class="downloadLinkItemText">久乐互娱专属修复工具</div>
            </div>-->
              <div class="downloadLinkItemBox">
                <a href="https://838461.889646544754624.site:9020/ntx/index.html?type=2&houseId=666&userId=2697782&PID=ntx" class="downloadLinkItem">
                  <img class="downloadLinkItemImg" src="@/assets/img/logo/downloadLogo.png" alt="九乐互娱app客户端棋牌手游链结点我我下载">
                  <div class="downloadLinkItemText">久乐互娱客户端<br>[点我下载]</div>
                </a>
              </div>
              <div class="downloadLinkItemBox">
                <a href="https://838461.889646544754624.site:9020/ntx/index.html?type=2&houseId=666&userId=2697782&PID=ntx" class="downloadLinkItem">
                  <img class="downloadLinkItemImg" src="@/assets/img/QR.jpg" alt="九乐互娱app客户端棋牌手游qr code扫我下载">
                  <div class="downloadLinkItemText">或扫QR Code</div>
                </a>
              </div>
          </div>
        </div>
      </div>
      <div class="downloadInfo">
        <HomeBoxTitle text="安装说明" />
        <div class="downloadInfoMenu">
          <div class="downloadInfoMenuItem" :class="{'downloadInfoMenuItemOnChange':showNum==1}" @click="showNum=1">IOS</div>
          <div class="downloadInfoMenuItem" :class="{'downloadInfoMenuItemOnChange':showNum==2}" @click="showNum=2">安卓</div>
        </div>
        <div class="introductionContent">
          <div class="introductionContentText" v-if="showNum==1">
            <div>1.安装：扫描完二维码后，点击下载安装按钮</div>
            <div class="introductionContentTextImgBox">
              <img class="introductionContentTextImg" src="@/assets/img/install/IOS1.png" alt="九乐互娱app客户端棋牌手游苹果ios安装说明步骤1">
            </div>
            <div>2.信任游戏<br>IOS系统：点击「设定」>「一般」>「描述档与装置管理」>「点击信任」</div>
            <div class="introductionContentTextImgBox">
              <img class="introductionContentTextImg" src="@/assets/img/install/IOS2.png" alt="九乐互娱app客户端棋牌手游苹果ios安装说明步骤2">
            </div>
            <div>3.帐号注册：进入游戏大厅点击「帐号注册」输入资料后即可开始游戏</div>
            <div class="introductionContentTextImgBox">
              <img class="introductionContentTextImg introductionContentTextImg4" src="@/assets/img/install/IOS3.png" alt="九乐互娱app客户端棋牌手游苹果ios註冊帳號步骤1">
              <img class="introductionContentTextImg introductionContentTextImg4" src="@/assets/img/install/IOS4.png" alt="九乐互娱app客户端棋牌手游苹果ios註冊帳號步骤2">
            </div>
            <div>4.其他：其他任何问题点击网站或APP内的24HR客服处理</div>
          </div>
          <div class="introductionContentText" v-if="showNum==2">
            <div>1.安装：扫描完二维码后，进入页面下载安装客户端Apk。</div>
            <div class="introductionContentTextImgBox">
              <img class="introductionContentTextImg introductionContentTextImg2" src="@/assets/img/install/And1.png" alt="九乐互娱app客户端棋牌手游安卓andriod下載apk步骤1">
              <img class="introductionContentTextImg introductionContentTextImg2" src="@/assets/img/install/And2.png" alt="九乐互娱app客户端棋牌手游安卓andriod下載apk步骤2">
            </div>
            <div>2.信任：安装完游戏后，第一次进入游戏时请选择允许相关功能， 即可进入游戏。</div>
            <div class="introductionContentTextImgBox">
              <img class="introductionContentTextImg introductionContentTextImg3" src="@/assets/img/install/And3.png" alt="九乐互娱app客户端棋牌手游安卓andriod安装说明步骤1">
              <img class="introductionContentTextImg introductionContentTextImg3" src="@/assets/img/install/And4.png" alt="九乐互娱app客户端棋牌手游安卓andriod安装说明步骤2">
              <img class="introductionContentTextImg introductionContentTextImg3" src="@/assets/img/install/And5.png" alt="九乐互娱app客户端棋牌手游安卓andriod安装说明步骤3">
              <img class="introductionContentTextImg introductionContentTextImg3" src="@/assets/img/install/And6.png" alt="九乐互娱app客户端棋牌手游安卓andriod安装说明步骤4">
              <img class="introductionContentTextImg introductionContentTextImg3" src="@/assets/img/install/And7.png" alt="九乐互娱app客户端棋牌手游安卓andriod安装说明步骤5">
              <img class="introductionContentTextImg introductionContentTextImg3" src="@/assets/img/install/And8.png" alt="九乐互娱app客户端棋牌手游安卓andriod安装说明步骤6">
              <img class="introductionContentTextImg introductionContentTextImg3" src="@/assets/img/install/And9.png" alt="九乐互娱app客户端棋牌手游安卓andriod安装说明步骤7">
              <img class="introductionContentTextImg introductionContentTextImg3" src="@/assets/img/install/And10.png" alt="九乐互娱app客户端棋牌手游安卓andriod安装说明步骤8">
            </div>
            <div>3.其他：其他任何问题点击网站或APP内的24HR客服处理</div>
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
import HomeBoxTitle from '@/components/HomeBoxTitle.vue'
import Footer from '@/components/Footer.vue'

export default {
  data() {
    return {
      showNum:1
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
