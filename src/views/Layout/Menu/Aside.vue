<template>
  <div class="sidebar">
    <el-menu
      router
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="#333"
    >
      <el-menu-item
        @click="clickMenu(item)"
        v-for="item in noChildren"
        :key="item.path"
        :index="item.path"
      >
        <i :class="`el-icon-${item.Menu_Icon}`"></i>
        <span slot="title">{{ item.Menu_Name }}</span>
      </el-menu-item>

      <el-submenu
        v-for="item in hasChildren"
        :key="item.Menu_Name"
        :index="item.Menu_Name"
      >
        <template slot="title">
          <i :class="`el-icon-${item.Menu_Icon}`"></i>
          <span slot="title">{{ item.Menu_Name }}</span>
        </template>
        <el-menu-item-group
          v-for="subItem in item.child"
          :key="subItem.Menu_Url"
        >
          <el-menu-item @click="clickMenu(subItem)" :index="subItem.Menu_Url">{{
            subItem.Menu_Name
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { GetButtons, getChildMenu } from "@/api/index.js";

export default {
  data() {
    return {
      defaultActive: "",
      List: [],
      Menu_Name: "",
      Menu_Icon: "",
      child: [],
      Btn_Name: "",
      Btns: "",
    };
  },
  created() {
    this.GetButtons({
      MenuCode: "5ed20159-d1ad-4bbe-92f3-e574d9d6be88",
      HideList: "123",
    }); 


  //默认选中侧边栏列表第一个
    this.$bus.$on("selectMenuID", (SelectMenu)=>{
       this.getChildMenu({
        MenuID: SelectMenu,
      });
    })
  
  },
  mounted() {

    //点击顶部更新侧边栏
     this.$bus.$on("sendMenuID", (Menu_ID) => {
      this.MenuID = Menu_ID;
      this.getChildMenu({
        MenuID: this.MenuID,
      });
    });
    
  },
  methods: {


    //渲染侧边栏内容
    getChildMenu(data) {
      getChildMenu(data).then((res) => {
        if (res.status == "200") {
          if (res.data.Code == "00") {
            this.List = res.data.List;
          }
        }
      });
    },

    clickMenu(item) {
         if (this.$route.path !== item.Menu_Url && !(this.$route.path === '/home' && (item.Menu_Url === '/'))) {
        this.$router.push(item.Menu_Url)
      }
    },
    GetButtons(data) {
      GetButtons(data).then((res) => {
        console.log(res);
        // this.Buttons = JSON.parse(res.data.Buttons);
        // console.log(this.Buttons);
      });
    },
  },
  computed: {
    // 没有子菜单
    noChildren() {
      return this.List.filter((item) => !item.child);
    },
    // 有子菜单
    hasChildren() {
      return this.List.filter((item) => item.child);
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-menu-item.is-active {
  color: #333;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  border: none;
}
.el-menu-item:hover {
  background: #eff5ff !important;
}
</style>