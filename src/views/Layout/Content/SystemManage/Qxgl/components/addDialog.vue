<template>
  <div>
    <el-dialog title="添加" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item
          label="栏目全称："
          :label-width="formLabelWidth"
          prop="name"
          :rules="rules.name"
        >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="栏目简称："
          :label-width="formLabelWidth"
          prop="simpleName"
          :rules="rules.simpleName"
        >
          <el-input v-model="form.simpleName"></el-input>
        </el-form-item>
        <el-form-item
          label="栏目类型："
          :label-width="formLabelWidth"
          prop="type"
          :rules="rules.type"
        >
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="上级部门"
          :label-width="formLabelWidth"
          prop="class"
          :rules="rules.class"
        >
          <el-button type="success" @click="choseProject">选择</el-button>
        </el-form-item>
        <el-form-item
          label="状态"
          :label-width="formLabelWidth"
          prop="state"
          :rules="rules.state"
        >
          <el-radio-group v-model="form.state">
            <el-radio :label="1">已启用</el-radio>
            <el-radio :label="2">已禁用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="负责人"
          :label-width="formLabelWidth"
          prop="person"
          :rules="rules.person"
        >
          <el-input v-model="form.person"></el-input>
        </el-form-item>
        <el-form-item
          label="排序"
          :label-width="formLabelWidth"
          prop="sort"
          :rules="rules.sort"
        >
          <el-input v-model="form.sort"></el-input>
        </el-form-item>
        <el-form-item
          label="备注"
          :label-width="formLabelWidth"
          prop="textarea"
          :rules="rules.textarea"
        >
          <el-input
            type="textarea"
            placeholder="请输入内容"
            maxlength="100"
            show-word-limit
            v-model="form.textarea"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false"
          >提交</el-button
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
        name: "",
        simpleName: "",
      },
      rules: {
        name: [{ required: true, message: "请输入栏目全称", trigger: "blur" }],
        simpleName: [
          { required: true, message: "请输入栏目简称", trigger: "blur" },
        ],
        type: [{ required: true, message: "请输入栏目类型", trigger: "blur" }],
        class: [{ required: true, message: "请选择上级部门", trigger: "blur" }],
        state: [{ required: true, message: "请选择状态", trigger: "blur" }],
      },
      formLabelWidth: "100px",
      options: [
        {
          value: "选项1",
          label: "行政管理",
        },
        {
          value: "选项2",
          label: "教学管理",
        },
        {
          value: "选项3",
          label: "教学单位",
        },
        {
          value: "选项4",
          label: "科研单位",
        },
        {
          value: "选项5",
          label: "独立核算",
        },
        {
          value: "选项6",
          label: "离退休部",
        },
        {
          value: "选项7",
          label: "其他单位",
        },
      ],
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
  width: 40%;
}
/deep/ .el-dialog__header {
  border-bottom: 1px solid #eee;
}
/deep/ .el-dialog__title {
  font-weight: bold;
  font-size: 14px;
}
</style>
