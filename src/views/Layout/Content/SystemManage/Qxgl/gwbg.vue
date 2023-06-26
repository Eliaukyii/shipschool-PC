<template>
  <div class="formAccount">
    <el-card >
      <el-steps
        :active="active"
        :space="200"
        align-center
        finish-status="success"
      >
        <el-step
          :title="item"
          v-for="(item, index) of stepTitle"
          :key="index"
        ></el-step>
      </el-steps>

      <div style="margin-top: 40px;">
        <el-form :model="form">
          <el-form-item label="原岗位人员：" class="oldProject">
            <el-input
              autocomplete="off"
              v-model="form.chooseOld"
              placeholder="请选择人员"
            ></el-input>
            <el-button
              type="warning"
              style="margin-left: 8px"
              @click="chooseOld"
              >选择</el-button
            >
          </el-form-item>
          <el-form-item label="新岗位人员：" class="newProject">
            <el-input
              autocomplete="off"
              v-model="form.chooseNew"
              placeholder="请选择人员"
            ></el-input>
            <el-button
              type="success"
              style="margin-left: 8px"
              @click="chooseNew"
              >选择</el-button
            >
          </el-form-item>

          <el-form-item label="" class="project">
            <el-button type="primary" @click="sub">下一步</el-button>
          </el-form-item>
        </el-form>

        <addUser1 ref="child"></addUser1>
      </div>
    </el-card>
  </div>
</template>


<script>
import addUser1 from '@/views/Layout/Content/SystemManage/Qxgl/components/addUser1.vue'
export default {
  data() {
    return {
      active: 1,
      stepTitle: ["选择人员", "选择角色", "选择工作组", "变更确认"],

      //添加项目传入数据选项
      form: {
        chooseOld: "",
        chooseNew: "",
      },
    };
  },
  methods: {
    chooseOld() {
      this.$refs.child.chooseOld()
    },
    chooseNew() {
      this.$refs.child.chooseOld()
    },
    sub() {
      this.active++;
    },
  },
  components: {
    addUser1
  },
};
</script>

<style lang="less" scoped>
.el-input {
  width: 20%;
}
/deep/ .el-transfer-panel {
  width: 400px;
}
.formAccount {
  .el-steps {
    justify-content: center;
    // margin-right: 85px;
  }
}
</style>
