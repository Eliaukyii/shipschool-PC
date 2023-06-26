<template>
  <div class="tab">
    <span class="tabbar">
      <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" :to="{ path: '/home' }">
                {{item.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </span>
  </div>
</template>

<script>
</script>
<script>
export default {
  data() {
    return {
     
    };
  },
  created() {
    
  },
  computed:{
    
  },
  methods: {
    
  },
  components: {},
};
</script>

<style lang="less" scoped>
/deep/ .el-breadcrumb__inner.is-link{
  color: #333;
  font-weight: 400;
  cursor: pointer;
}
/deep/.el-breadcrumb__item{
  line-height: 32px;
}
.tab {
  height: 32px;
  background-color: #fff;
  margin-left: -18px;
  margin-top: -20px;
  .tabbar {
    font-size: 12px;
    line-height: 32px;
    // .text {
    //   padding: 10px 8px 10px 8px;
    //   border: 1px solid #e6e6e6;
    //   cursor: pointer;
    //   color: #333 !important;
    // }
  }
}
</style>
