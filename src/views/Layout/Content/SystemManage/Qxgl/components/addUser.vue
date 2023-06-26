<template>
  <div>
    <el-dialog title="添加" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item
          label="部门："
          :label-width="formLabelWidth"
          prop="class"
          :rules="rules.class"
        >
          <el-button type="success" @click="choseProject">选择</el-button>
        </el-form-item>
        <el-form-item
          label="账号："
          :label-width="formLabelWidth"
          prop="account"
          :rules="rules.account"
        >
          <el-input v-model="form.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="名称："
          :label-width="formLabelWidth"
          prop="name"
          :rules="rules.name"
        >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item
          label="电话："
          :label-width="formLabelWidth"
          prop="phone"
          :rules="rules.phone"
        >
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item
          label="邮箱："
          :label-width="formLabelWidth"
          prop="email"
          :rules="rules.email"
        >
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item
          label="排序："
          :label-width="formLabelWidth"
          prop="sort"
          :rules="rules.sort"
        >
          <el-input v-model="form.sort"></el-input>
        </el-form-item>
        <el-form-item label="备注：" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            placeholder="说点什么...100个字符以内"
            v-model="form.textarea"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="签名图："
          :label-width="formLabelWidth"
          prop="sign"
          :rules="rules.sign"
        >
          <el-button type="warning">点击更换签名</el-button>
        </el-form-item>
        <el-form-item
          label="角色："
          :label-width="formLabelWidth"
          prop="character"
          :rules="rules.character"
        >
          <el-button type="success" @click="choseProject">选择</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false"
          >提交</el-button
        >
        <el-button type="success" @click="dialogFormVisible = false"
          >打印</el-button
        >
      </div>
    </el-dialog>
    <addClassDialog ref="child"></addClassDialog>
  </div>
</template>

<script>
import addClassDialog from "@/views/Layout/Content/SystemManage/Qxgl/components/addClassDialog.vue";
export default {
  data() {
    return {
      radio: 2,
      dialogFormVisible: false,
      form: {
        class: "",
        account: "",
        name: "",
        sort: "",
        sign: "",
        character: "",
      },
      rules: {
        class: [{ required: true, message: "请输入部门", trigger: "blur" }],
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        sort: [{ required: true, message: "请输入序号", trigger: "blur" }],
        character: [{ required: true, message: "请选择状态", trigger: "blur" }],
      },
      formLabelWidth: "100px",
      value: "",
    };
  },
  methods: {
    // 在父组件调用打开
    add() {
      this.dialogFormVisible = true;
    },
    choseProject() {
      this.$refs.child.choseProject();
    },
  },
  components: {
    addClassDialog,
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
  width: 35%;
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
