<template>
  <div id="change">
    <el-dialog title="标题" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item
          label="用户ID"
          :label-width="formLabelWidth"
          prop="name"
          :rules="rules.name"
        >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="摘要内容"
          :label-width="formLabelWidth"
          prop="desc"
          :rules="rules.desc"
        >
          <el-input v-model="form.desc" placeholder="请输入..."></el-input>
        </el-form-item>
        <el-form-item
          label="是否启用"
          :label-width="formLabelWidth"
          prop="start"
          :rules="rules.start"
        >
          <el-radio-group v-model="form.start">
            <el-radio :label="1">启用</el-radio>
            <el-radio :label="2">不启用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
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
        start: [{ required: true, message: "请选择是否启用",trigger: "blur" }],
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    // 在父组件调用打开
    handleEdit() {
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
}
/deep/ .el-dialog__title {
  font-weight: bold;
  font-size: 14px;
}
</style>
