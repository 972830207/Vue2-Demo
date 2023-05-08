<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="left">
          <img src="../assets/image/yidong.png" class="top-image" />
          <div class="vertical-line"></div>
          <el-breadcrumb separator="/" class="top-breadcrumb">
            <el-breadcrumb-item> 网格长工作台 </el-breadcrumb-item>
            <el-breadcrumb-item
              v-for="(item, index) in routerList"
              :key="index"
              :to="{ path: item.path }"
            >
              {{ item.meta.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="right">
          <div class="message">
            <i class="el-icon-chat-dot-square"></i>
            <el-popover placement="bottom" width="100" trigger="click">
              <div>
                <i class="el-icon-edit"></i>
                <span class="manage">审批管理</span>
              </div>
              <span slot="reference">消息</span>
            </el-popover>
          </div>
          <div class="vertical-line"></div>
          <div class="user">
            <img src="../assets/image/avator.png" />
            <el-popover
              placement="bottom"
              width="80"
              trigger="click"
              offset="10"
            >
              <div class="user-message">
                <i class="el-icon-s-custom"></i>
                <span>用户信息</span>
              </div>
              <div class="user-horizontal-line"></div>
              <div class="user-message" @click="logOut">
                <i class="el-icon-switch-button"></i>
                <span>退出登录</span>
              </div>
              <span slot="reference">{{ userName }}</span>
            </el-popover>
          </div>
        </div>
      </el-header>
      <el-main>
        <BusinessList v-if="this.routerList.length == 1" />
        <router-view v-else />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { resetTokenAndClearUser } from "@/utils/publicUtils";
import BusinessList from "@/views/Business/BusinessList";
export default {
  name: "Home",
  components: { BusinessList },
  data() {
    return {
      routerList: [], //路由集合
      userName: "李潇潇",
    };
  },
  provide() {
    return {
      newName: () => this.userName,
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },

  methods: {
    isHome(route) {
      return route.name == "Business";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      //如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/", meta: { title: "商机池" } }].concat(matched);
      }
      this.routerList = matched;
      console.log("🚀 ~ this.breadList", this.routerList);
    },
    //退出登录
    logOut() {
      this.$router.push("/Login");
      resetTokenAndClearUser();
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  .el-header {
    background-color: rgba(13, 107, 255, 1);
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    .left {
      height: 100%;
      display: flex;
      align-items: center;
      .top-image {
        height: 100%;
      }
      .top-breadcrumb {
        display: inline-block;
        font-size: 16px;
      }
    }
    .right {
      height: 100%;
      display: flex;
      align-items: center;
      .message {
        color: #fff;
        i {
          margin-right: 5px;
        }
      }
      .user {
        display: flex;
        align-items: center;
        color: #fff;
        img {
          width: 30%;
          height: 50%;
          margin-right: 10px;
        }
      }
    }
  }
  .el-main {
    background-color: #e9eef3;
    color: #333;
    height: calc(100vh - 60px);
    padding: 0;
  }
}
</style>
