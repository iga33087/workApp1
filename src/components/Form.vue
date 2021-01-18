<template>
  <div class="form">
    <div class="formLeft">
      <div class="formLeftRow">
        <el-input placeholder="姓名" class="margin"></el-input>
        <el-input placeholder="手机号"></el-input>
      </div>
      <div class="formLeftRow">
        <el-input placeholder="邮箱"></el-input>
      </div>
      <div class="formLeftRow">
        <el-input placeholder="公司名"></el-input>
      </div>
      <div class="formLeftRow">
        <el-input placeholder="您的任何问题" type="textarea" :rows="4"></el-input>
      </div>
      <div class="formLeftRow">
        <el-button icon="el-icon-position" class="formRightSub">送出</el-button>
      </div>
    </div>
    <div class="formRight">
      <div class="formRightText">找不到问题吗？<br>想提出意见给我们吗？<br>想要找我们合作吗？<br>欢迎提出您的想法!</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>