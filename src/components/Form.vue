<template>
  <div class="form">
    <div class="formLeft">
      <div class="formLeftRow">
        <el-input placeholder="姓名" class="margin" v-model="form.name"></el-input>
        <el-input placeholder="手机号" v-model="form.phone"></el-input>
      </div>
      <div class="formLeftRow">
        <el-input placeholder="邮箱" v-model="form.email"></el-input>
      </div>
      <div class="formLeftRow">
        <el-input placeholder="公司名" v-model="form.company"></el-input>
      </div>
      <div class="formLeftRow">
        <el-input placeholder="您的任何问题" type="textarea" :rows="4" v-model="form.content"></el-input>
      </div>
      <div class="formLeftRow">
        <el-button icon="el-icon-position" class="formRightSub" @click="sub">送出</el-button>
      </div>
    </div>
    <div class="formRight">
      <div class="formRightText">找不到问题吗？<br>想提出意见给我们吗？<br>想要找我们合作吗？<br>欢迎提出您的想法!</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name:"",
        phone:"",
        email:"",
        company:"",
        content:"",
        projectId:""
      }
    }
  },
  methods: {
    async sub() {
      this.form.projectId=this.$store.state.projectId
      await this.$api.postMail(this.form)
      alert("表單送出成功")
    }
  }
}
</script>