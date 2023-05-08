<template>
  <div class="comp-one-child">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
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
  name: "compOneChild",
  components: {},
  data() {
    return {
      form: {
        name: "",
        pass: "",
      },
    };
  },
  created() {
    // console.log("我是孙组件", this.$attrs);
  },
  inheritAttrs: false,
  methods: {
    onSubmit() {
      this.$listeners.compOneChild(this.form);
      //this.$emit("compOneChild", this.form);
      console.log(this.$parent);
    },
  },
};
</script>

<style lang="less" scoped>
.comp-one-child {
  width: 400px;
  margin: 100px auto;
}
</style>
