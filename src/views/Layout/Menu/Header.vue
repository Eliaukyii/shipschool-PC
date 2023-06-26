<template>
  <div class="header_container">
    <div class="left">
      <img src="@/assets/images/main/logo.png" alt="" />
      <span class="text">{{ BackGroundTitle }}</span>
    </div>
    <div class="right">
      <img src="@/assets/images/main/移动端.png" style="margin-right: 24px" />
      <el-badge :value="5" class="item">
        <img src="@/assets/images/main/消息-反白.png" />
      </el-badge>
      <el-dropdown trigger="click" :hide-on-click="false">
        <span class="el-dropdown-link" style="margin-right: 17px">
          <img :src="Healmg" style="margin-right: 8px; margin-top: 8px" />
          {{ UserName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="newDrop">
          <el-dropdown-item>
            <!-- 下拉框内容 -->
            <div class="box-card">
              <div
                class="top"
                style="
                  font-size: 12px;
                  color: #999;
                  border-bottom: 1px solid #ededed;
                "
              >
                <div class="user" style="display: flex; align-items: center">
                  <div
                    style="
                      width: 48px;
                      height: 48px;
                      background: #f1f2f3;
                      border-radius: 50%;
                      margin-right: 11px;
                    "
                  >
                    <!-- <i
                      class="iconfont icon-yonghu_2x"
                      style="font-size: 48px"
                    ></i> -->
                    <img :src="Healmg" alt="" />
                  </div>
                  <div class="user-info">
                    <p
                      class="name"
                      style="font-size: 15px; color: #333; font-weight: 500"
                    >
                      {{ UserName }}
                    </p>
                    <p class="access">系统管理员｜{{ Org }}</p>
                  </div>
                </div>
                <div class="login-info" style="">
                  <p>当前登陆地区：<span>湖北省武汉市</span></p>
                  <p>上次登录时间：<span>2022.09.26 21:23:32</span></p>
                  <!-- <p>上次登录时间：<span>{{date}}</span></p> -->
                </div>
              </div>
              <div class="bottom">
                <ul>
                  <li><i class="iconfont icon-a-pifu1x"></i>换肤</li>
                  <li><i class="iconfont icon-a-rizhi1x"></i>日志</li>
                  <li><i class="iconfont icon-a-bangzhu1x"></i>帮助文档</li>
                  <li><i class="iconfont icon-a-xiugai1x"></i>我的权限</li>
                  <li>
                    <i class="iconfont icon-a-wodequanxian1x"></i>修改密码
                  </li>
                  <li @click="exit">
                    <i class="iconfont icon-a-tuichu1x"></i>退出登录
                  </li>
                </ul>
              </div>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- <div class="main">
      <ul class="nav">
         <li
          :class="isCheck == index ? 'active' : ''"
          @click="handleSelect(item, index)"
          v-for="(item, index) in MenuList"
          :key="item.index"
        >
          {{ item.Menu_Name }}
        </li>
      </ul>
    </div> -->

    <!-- 水平一级菜单 -->
    <!-- <div
      class="main"
      style="margin-left: 200px; margin-right: 200px; display: flex;"
    >
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#2d6dcc"
        text-color="#fff"
        active-text-color="#fff"
        :default-active="activeIndex" 
        @click="handleSelect(item, index)"
      >
        <el-menu-item
          v-for="(item, index) in MenuList"
          :key="index"
          :index="item.Menu_ID"
        >
          <span slot="title">{{ item.Menu_Name }}</span>
        </el-menu-item>
      </el-menu>
    </div> -->

    <div class="main">
      <ul class="nav">
        <li
          :class="isCheck == index ? 'active' : ''"
          @click="handleSelect(item, index)"
          v-for="(item, index) in MenuList"
          :key="item.index"
        >
          {{ item.Menu_Name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getMenuList, info } from "@/api/index.js";
import { loginOut } from "@/api/login.js";

export default {
  data() {
    return {
      date: new Date(),
      isCheck: 0,
      MenuList: [],
      Healmg: "",
      UserName: "",
      BackGroundTitle: "",
      Menu_ID: "",
      Org: "",
      activeIndex: "1",
      selectMenu:'',
    };
  },
  created() {
    //顶部导航栏
    getMenuList().then((res) => {
      if (res.status != 200) return;
      this.MenuList = res.data.MenuList;
      this.BackGroundTitle = res.data.BackGroundTitle;
      this.SelectMenu = this.MenuList[0].Menu_ID

      this.$bus.$emit("selectMenuID", this.SelectMenu);

    });
    //右上角个人信息
    info().then((res) => {
      this.Org = res.data.Org;
      this.UserName = res.data.UserName;
      // this.Healmg = "data:image/png;base64" + res.data.Healmg;
      this.Healmg = res.data.Healmg;
    });

  },
  mounted() {},
  methods: {
    //退出登录
    exit() {
      loginOut().then((res) => {
        if (res.data.Code == "00") {
          this.$router.push("/login");
        }
      });
    },
    // 传递Menu_ID给侧边栏
    handleSelect(item, index) {
      this.isCheck = index;
      this.$bus.$emit("sendMenuID", item.Menu_ID);
    },

    registerBeforeunload(){
      //监听浏览器关闭事件
      window.addEventListener('beforeunload',()=>{
        if(!this.isLogout){
          this.exit()   // 如果用户没有注销登录，自动注销
        }
      })
    }
  },

  components: {},
};
</script>

<style lang="less" scoped>
/deep/ .el-menu--horizontal > .el-menu-item {
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  border-bottom: 0;
}

//修改el-badge的位置
/deep/ .el-badge__content.is-fixed {
  right: 0;
  transform: translateY(0%) translateX(73%);
}
//去掉el-badge的边框
/deep/ .el-badge__content {
  border: none;
}
// 修改dropdown下拉菜单默认背景颜色和文字颜色
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #fff;
  color: #333;
}

//修改iconfont图标边距
.el-dropdown-menu__item i {
  margin-right: 8px;
}

// 修改dropdown下拉菜单小三角
.el-popper /deep/ .popper__arrow {
  border-bottom-color: #1ebef4 !important;
  left: 50% !important;
  visibility: hidden;
}
//去掉点击时导航栏下划线
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 0;
}
.active {
  background-color: #2356a2;
}
.header_container {
  color: #fff;
  /*左右进行绝对定位*/
  .left,
  .right {
    position: absolute;
    top: 0;
  }
  .left {
    width: 198px;
    height: 48px;
    line-height: 48px;
    img {
      width: 28px;
      height: 28px;
      margin-left: 8px;
      margin-right: 4px;
      transform: translateY(10px);
      background: #fff;
      border-radius: 50%;
    }
    .text {
      margin-left: 4px;
    }
  }
  .right {
    right: 0;
    width: 220px;
    line-height: 48px;
    .el-dropdown {
      float: right;
      line-height: 48px;
      .el-dropdown-link {
        cursor: pointer;
        color: #fff;
      }
    }
  }
  /*中间用margin空出左右元素所占的空间*/
  .main {
    background: #2d6dcc;
    color: #fff;
    .nav {
      display: block;
      margin-left: 202px;
      line-height: 48px;
      li {
        display: inline;
        padding: 17px 24px 17px 24px;
        cursor: pointer;
        .active {
          font-size: 15px;
          font-weight: bolder;
        }
      }
    }
  }
}
</style>