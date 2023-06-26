<template>
  <div>
    <el-dialog title="添加" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="账户：">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="户名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="证号：">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="类别：">
          <el-input v-model="form.category"></el-input>
        </el-form-item>
        <el-form-item label="类型：">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
        <el-form-item label="行号：">
          <el-input v-model="form.row"></el-input>
        </el-form-item>
        <el-form-item label="银行：">
          <el-input v-model="form.bank "></el-input>
        </el-form-item>
        <el-form-item label="负责人：">
          <el-input v-model="form.person"></el-input>
        </el-form-item>
        <el-form-item label="电话：">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="是否明细：">
         <el-checkbox v-model="form.details"></el-checkbox>
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
       details: false
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
  width: 50%;
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
