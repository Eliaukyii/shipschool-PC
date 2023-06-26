<template>
  <div>
    <el-dialog title="添加" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="人员代码：">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="账户：">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="户名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="银行卡类型：">
          <el-select v-model="type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="行号：">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="银行：">
          <el-input v-model="form.bank"></el-input>
        </el-form-item>
        <el-form-item label="是否启用：">
          <el-checkbox v-model="form.open"></el-checkbox>
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
        account: "",
        name: "",
        type:"",
        number:"",
        bank:"",
        open:""
      },
      details: false,
      options: [
        {
          value: "选项1",
          label: "通用",
        },
        {
          value: "选项2",
          label: "批次一",
        },
        {
          value: "选项3",
          label: "批次二",
        },
        {
          value: "选项4",
          label: "批次三",
        },
      ],
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
