<template>
  <div class="slide">
    <span class="no-data">暂无数据</span>
    <slot v-show="!noData"></slot>
    <Button class="back" @click="back">返回页面</Button>
  </div>
</template>

<script>
export default {
  name: "NoData",
  props: {
    noData: {
      type: Boolean,
      default: false,
    },
  },
  methods:{
      back(){
          this.$router.back()
      }
  }
};
</script>

<style lang="less" scoped>
.slide {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f8f5ec;
  .no-data {
    width: 100%;
    display: inline-block;
    color: #999999;
    font-size: 26px;
    margin: 100px 0;
    text-align: center;
  }
  .back {
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translateX(-50%);
}
}
</style>
