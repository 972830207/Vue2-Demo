<template>
  <div class="business-details">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">
          <template slot="title" popper-class="选项1">选项1</template>
        </el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
    <compOne
      v-if="activeName == '4'"
      v-on="$listeners"
      :message="message"
      @compOneChild="compOneChild"
    />
    <twoOne v-if="activeName == '2-1'" />
    <twoTwo v-if="activeName == '2-2'" ref="twoTwoRef" />
    <button @click="sayHello" v-if="activeName == '2-2'">sayHello</button>
  </div>
</template>

<script>
import compOne from "@/views/Component/compOne";
import twoOne from "@/views/Two/twoOne";
import twoTwo from "@/views/Two/twoTwo";
export default {
  name: "BusinessDetails",
  components: {
    compOne,
    twoOne,
    twoTwo,
  },
  data() {
    return {
      activeIndex: "1",
      activeName: "",
      message: "父组件传的值",
      twoTwoRef: null,
    };
  },
  inheritAttrs: false,
  mounted() {},
  methods: {
    sayHello() {
      this.twoTwoRef = this.$refs.twoTwoRef;
      console.log(this.$refs.twoTwoRef);
      this.twoTwoRef.sayHello();
    },

    handleSelect(key) {
      this.activeName = key;
    },
    compOneChild(val) {
      console.log("我是父组件", val);
    },
  },
};
</script>

<style lang="less" scoped>
.business-details {
  .bottom-btn {
    position: fixed;
    bottom: 0;
  }
}
</style>
