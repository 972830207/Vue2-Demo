<template>
  <div class="two-two">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "twoTwo",
  components: {},
  data() {
    return {
      form: {
        name: "",
        pass: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    sayHello() {
      console.log(this.form);
    },
  },
};
</script>

<style lang="less" scoped>
.two-two {
  width: 400px;
  margin: 100px auto;
}
</style>
