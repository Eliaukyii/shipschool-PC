<template>
  <div>
    <el-card>
      <el-button-group>
        <el-button type="success" size="small">添加</el-button>
        <el-button type="danger" size="small">删除</el-button>
        <el-button type="warning" size="small">复制</el-button>
        <el-button type="success" size="small">粘贴</el-button>
      </el-button-group>
      <el-tree
        :data="treeList"
        node-key="id"
        default-expand-all
        highlight-current
        ref="Tree"
        :props="defaultProps"
        show-checkbox
      >
      </el-tree>
    </el-card>
  </div>
</template>

<script>
import { GetMenuJson } from "@/api/systemManage.js";

export default {
  data() {
    return {
      treeList:[],
      defaultProps:{
        children:'children',
        label:'name',
        id:'id',
        disable:'open'
      }
    };
  },
  created() {
    this.GetMenuJson();
  },
  mounted() {},
  methods: {
    GetMenuJson(data) {
      GetMenuJson(data).then((res) => {
      console.log(res.data);
    })
    }
  },
  components: {},
};
</script>

<style scoped>
</style>
