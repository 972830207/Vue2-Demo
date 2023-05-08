<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item prop="name" size="small">
        <el-input
          prefix-icon="el-icon-user"
          v-model="ruleForm.name"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass" size="small">
        <el-input
          type="password"
          prefix-icon="el-icon-s-cooperation"
          v-model="ruleForm.pass"
          show-password
          clearable
        ></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm" size="small">
        提交</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { resetTokenAndClearUser } from "@/utils/publicUtils";
import debounce from "@/utils/debounce";
export default {
  name: "Login",
  components: {},
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      debounce(() => {
        if (this.ruleForm.name == "admin" && this.ruleForm.pass == "123456") {
          localStorage.setItem("token", "1234567");
          // 登陆成功 假设这里是后台返回的 token和用户信息
          localStorage.setItem("userName", "小明");
          this.$message.success("登录成功!");
          this.$router.push("/");
        } else {
          this.$message.error("登录失败!");
          resetTokenAndClearUser();
        }
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/image/bgimg.jpg") no-repeat;
  background-size: 100% 100%;
  position: fixed;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
