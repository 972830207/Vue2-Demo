<template>
  <div class="two-one">
    <ul>
      <li v-for="(item, index) in itemList" :key="index" ref="arr">
        {{ item }}
      </li>
      <el-button type="primary" class="btn" round @click="beginAgain(istrue)">{{
        istrue == true ? "开始" : "暂停"
      }}</el-button>
    </ul>
  </div>
</template>

<script>
export default {
  name: "twoOne",
  components: {},
  data() {
    return {
      itemList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      istrue: true,
      time: null, //定时器
      newNum: null, //暂停时的数字
      speed: 500, //速度
    };
  },
  inject: ["newName"],
  mounted() {
    console.log(this.newName());
    console.log(this.userName());
  },
  methods: {
    userName() {
      return this.newName();
    },
    beginAgain(bool) {
      let newArr = this.$refs.arr; //实列数组
      let num = 0; //时间初次赋值
      if (this.newNum) {
        //暂定后再次赋值
        num = this.newNum - 1;
      }
      let that = this;

      //循环选择数字
      let rotate = function () {
        num = ++num;
        if (num > newArr.length - 1) {
          num = 0;
        }

        //循环并加快速度，最小设置的50
        let newSpeed = 20;
        newSpeed = newSpeed + 10;
        that.speed = that.speed - newSpeed;
        if (that.speed < 50) {
          that.speed = 50;
        }
        clearInterval(that.time); //清除定时器
        that.time = setInterval(rotate, that.speed); //循环定时器

        that.itemList.forEach((e) => {
          if (e - 1 != num) {
            newArr[e - 1].style.backgroundColor = "white";
          } else {
            newArr[e - 1].style.backgroundColor = "red";
          }
        });
      };
      //按下了开始
      if (bool) {
        this.istrue = false;
        rotate();
      } else {
        this.istrue = true;
        clearInterval(this.time); //清除定时器
        this.time = null;

        newArr.map((res) => {
          if (res.style.backgroundColor == "red") {
            this.newNum = Number(res.innerText);
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.two-one {
  display: grid;
  align-items: center;
  justify-content: center;
  ul {
    margin-top: 100px;
    width: 50px;
    position: relative;
    .btn {
      position: absolute;
      top: 150px;
      left: -10px;
    }
    li {
      padding: 10px 20px;
      background: white;
      cursor: pointer;
      position: absolute;
    }
    li:first-child {
      top: 0;
      left: 0;
      background: red;
    }
    li:nth-child(2) {
      top: 50px;
      left: 80px;
    }
    li:nth-child(3) {
      top: 100px;
      left: 160px;
    }
    li:nth-child(4) {
      top: 150px;
      left: 240px;
    }
    li:nth-child(5) {
      top: 200px;
      left: 160px;
    }
    li:nth-child(6) {
      top: 250px;
      left: 80px;
    }
    li:nth-child(7) {
      top: 300px;
      left: 0;
    }
    li:nth-child(8) {
      top: 250px;
      left: -80px;
    }
    li:nth-child(9) {
      top: 200px;
      left: -160px;
    }
    li:nth-child(10) {
      top: 150px;
      left: -240px;
    }
    li:nth-child(11) {
      top: 100px;
      left: -160px;
    }
    li:nth-child(12) {
      top: 50px;
      left: -80px;
    }
  }
}
</style>
