<template>
  <div class="BusinessList">
    <span @click="toDeails">商机列表</span>
  </div>
</template>

<script>
export default {
  name: "BusinessList",
  components: {},
  data() {
    return {};
  },
  methods: {
    toDeails() {
      this.$router.push({
        name: "BusinessDetails",
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
