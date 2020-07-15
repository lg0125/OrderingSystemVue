<template>
  <div>
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="user_id">
        <el-input type="number" v-model="ruleForm.user_id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="user_password">
        <el-input type="password" v-model="ruleForm.user_password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reqPwdLogin } from "../../api/index";
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        user_id: null,
        user_password: null
      },
      isSuccess: false
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.ruleForm.user_id = parseInt(this.ruleForm.user_id);

          const user_id = this.ruleForm.user_id;
          const user_password = this.ruleForm.user_password;

          reqPwdLogin(user_id, user_password);
          this.$store.dispatch("getUserInfo", user_id);
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
</style>