<template>
  <div>
    <el-dialog title="添加" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="代码：">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="显示：">
          <el-input v-model="form.display"></el-input>
        </el-form-item>
        <el-form-item label="薪酬类别：">
          <el-input v-model="form.money"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false"
          >提交</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        code: "",
        display: "",
        money: "",
      },
    };
  },
  methods: {
    add() {
      this.dialogFormVisible = true;
    },
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
  background-color: #2d6dcc;
}
/deep/ .el-dialog__title {
  font-weight: bold;
  font-size: 14px;
  color: #fff;
}
/deep/ .el-dialog__headerbtn .el-dialog__close {
  color: #fff;
}
</style>
