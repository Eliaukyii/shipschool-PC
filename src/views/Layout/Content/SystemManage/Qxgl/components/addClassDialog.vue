<template>
  <div id="change">
    <el-dialog title="选择部门" :visible.sync="dialogFormVisible">
      <el-button type="success">选择</el-button>
      <el-button type="warning">取消</el-button>
      <div style="margin-top: 20px">
        <el-tree
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
        ></el-tree>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 2,
      dialogFormVisible: false,
      form: {
        name: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户ID", trigger: "blur" }],
        desc: [{ required: true, message: "请输入摘要内容", trigger: "blur" }],
        start: [{ required: true, message: "请选择是否启用", trigger: "blur" }],
      },
      formLabelWidth: "120px",
      data: [
            {
              label: "行政",
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
    // 在父组件调用打开
    choseProject() {
      this.dialogFormVisible = true;
    },
    handleNodeClick(data){
       console.log(data);
    }
  },
  components: {},
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
  width: 30%;
}
/deep/ .el-dialog__header {
  border-bottom: 1px solid #eee;
}
/deep/ .el-dialog__title {
  font-weight: bold;
  font-size: 14px;
}
</style>
