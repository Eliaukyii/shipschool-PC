<template>
  <div>
    <el-card >
      <div>
        <el-button type="primary" @click="add">新增</el-button>
        <el-button type="primary">打印</el-button>
        <el-button type="primary">全选</el-button>
        <el-button type="warning">反选</el-button>
        <el-button type="danger">删除</el-button>
        <el-button>搜索</el-button>
      </div>
      <div style="margin-top: 20px">
        <el-tree
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
        ></el-tree>
      </div>
      <addDialog ref="child"></addDialog>
    </el-card>
  </div>
</template>

<script>
import addDialog from "@/views/Layout/Content/SystemManage/Qxgl/components/addDialog.vue";
export default {
  data() {
    return {
      data: [
        {
          label: "在职",
        },
        {
          label: "退休",
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    add() {
      this.$refs.child.add();
    },
  },
  components: {
    addDialog,
  },
};
</script>

<style scoped>
</style>
