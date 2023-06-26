<template>
  <div>
    <el-dialog title="添加" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form">
        <el-form-item
          label="角色名称："
          :label-width="formLabelWidth"
          prop="name"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
            placeholder="角色名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="排序：" :label-width="formLabelWidth" prop="order">
          <el-input v-model="form.order" placeholder="排序"></el-input>
        </el-form-item>
        <el-form-item label="备注：" :label-width="formLabelWidth" prop="note">
          <el-input v-model="form.note" placeholder="备注"></el-input>
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
        name: "",
        order: "",
        note: "",
      },
      formLabelWidth: "120px",
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
/deep/ .el-dialog__headerbtn .el-dialog__close{
    color:#fff
}
</style>
