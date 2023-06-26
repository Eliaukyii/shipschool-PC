<template>
  <div>
    <el-card >
      <div>
        <el-button>打印设计</el-button>
        <el-button type="primary" @click="add">新增</el-button>
        <el-button type="primary">打印</el-button>
        <el-button type="success">查看</el-button>
        <el-button type="success">打印表单</el-button>
        <el-button type="warning">编辑</el-button>
        <el-button type="warning">启用/禁用</el-button>
        <el-button type="warning">设置权限</el-button>
        <el-button type="warning">设置角色</el-button>
        <el-button type="danger">删除</el-button>
        <el-button style="margin-right: 8px; margin-left: 40px">搜索</el-button>
        <el-input type="text" placeholder="输入关键字"></el-input
        ><el-button type="success">搜索</el-button>
      </div>

      <addUser ref="child"></addUser>

      <div style="margin-top: 50px">
        <el-button @click="zz">在职</el-button>
        <el-button>退休</el-button>
        <el-button>显示全部</el-button>
      </div>

      <el-table
        :data="tableData"
        style="width: 100%; margin-top: 20px"
        border
        ref="multipleTable"
      >
        <el-table-column type="index" width="50" align="center">
        </el-table-column>
        <el-table-column
          :label="item.label"
          v-for="(item, index) in tableHeader"
          :key="index"
          :prop="item.value"
          :show-overflow-tooltip="true"
          align="center"
        >
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import addUser from "@/views/Layout/Content/SystemManage/Qxgl/components/addUser.vue";
export default {
  data() {
    return {
      showA: true,
      tableData: [
        {
          class: "在职",
          account: "000",
          name: "蔡其松",
          pinyin: "CQS",
          phone: "",
          email: "",
          state: "正常",
          character: "系统管理",
        },
        {
          class: "在职",
          account: "001",
          name: "邓老师",
          pinyin: "DLS",
          phone: "",
          email: "",
          state: "正常",
          character: "工资管理",
        },
      ],
      tableHeader: [
        {
          label: "部门",
          value: "class",
        },
        {
          label: "账号",
          value: "account",
        },
        {
          label: "姓名",
          value: "name",
        },
        {
          label: "拼音",
          value: "pinyin",
        },
        {
          label: "手机",
          value: "phone",
        },
        {
          label: "邮箱",
          value: "email",
        },
        {
          label: "状态",
          value: "state",
        },
        {
          label: "拥有角色",
          value: "character",
        },
      ],
    };
  },
  methods: {
    zz() {
      this.showA = !this.showA;
    },
    add() {
      this.$refs.child.add();
    },
  },
  components: {
    addUser,
  },
};
</script>
<style lang="less" scoped>
.el-input {
  width: 20%;
}
/deep/.el-table th {
  background-color: #f7f7f7;
}
</style>