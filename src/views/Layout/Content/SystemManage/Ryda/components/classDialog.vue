<template>
  <div>
    <el-dialog title="添加" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="部门代码：">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="部门性质代码：">
          <el-input v-model="form.departmentCode"></el-input>
        </el-form-item>
        <el-form-item label="部门名称：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="部门简称：">
          <el-input v-model="form.abbreviation"></el-input>
        </el-form-item>
        <el-form-item label="部门主管：">
          <el-input v-model="form.supervisor"></el-input>
        </el-form-item>
        <el-form-item label="部门副管：">
          <el-input v-model="form.leader"></el-input>
        </el-form-item>
        <el-form-item label="单位分管：">
          <el-input v-model="form.division "></el-input>
        </el-form-item>
        <el-form-item label="上级代码：">
          <el-input v-model="form.superiorCode"></el-input>
        </el-form-item>
        <el-form-item label="级次">
          <el-input v-model="form.order"></el-input>
        </el-form-item>
        <el-form-item label="是否明细">
         <el-checkbox v-model="form.details"></el-checkbox>
        </el-form-item>
        <el-form-item label="经费类型">
          <el-input v-model="form.type"></el-input>
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
