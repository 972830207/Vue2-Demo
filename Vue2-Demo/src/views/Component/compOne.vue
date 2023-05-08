<template>
  <div class="comp-one">
    <compOneChild v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import compOneChild from "./compOneChild.vue";
export default {
  name: "compOne",
  components: { compOneChild },
  data() {
    return {};
  },
  inheritAttrs: false,
  created() {
    // console.log("我是子组件", this.$attrs);
    console.log("我是子组件", this.$listeners);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.comp-one {
}
</style>
