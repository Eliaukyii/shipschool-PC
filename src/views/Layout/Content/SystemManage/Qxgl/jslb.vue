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
    </div>

    <addCharacter ref="child"></addCharacter>

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
import addCharacter from '@/views/Layout/Content/SystemManage/Qxgl/components/addCharacter.vue'
export default {
  data() {
    return {
      tableData: [
        {
          name: "系统管理",
          type: "系统角色",
          desc: "系统内部管理员，即系统开发商实施管理员",
        },
        {
          name: "工资管理",
          type: "业务角色",
          desc: "",
        },
        {
          name: "薪酬审批",
          type: "业务角色",
          desc: "",
        },
        {
          name: "薪酬申报",
          type: "业务角色",
          desc: "",
        },
        {
          name: "办公室",
          type: "业务角色",
          desc: "",
        },
        {
          name: "报销管理权限",
          type: "业务角色",
          desc: "主要赋予财务处人员",
        },
        {
          name: "经费查询",
          type: "业务角色",
          desc: "",
        },
        {
          name: "科研管理",
          type: "业务角色",
          desc: "",
        },
        {
          name: "工资查询",
          type: "业务角色",
          desc: "",
        },
        {
          name: "项目库管理用户",
          type: "业务角色",
          desc: "主要用于赋予项目库管理权限",
        },
        {
          name: "预算申报用户",
          type: "业务角色",
          desc: "主要用于赋予预算申报权限",
        },
        {
          name: "预算审批用户",
          type: "业务角色",
          desc: "主要用于赋予预算审批权限",
        },
        {
          name: "项目申报用户",
          type: "业务角色",
          desc: "主要用于赋予预算申报权限",
        },
        {
          name: "项目审批用户",
          type: "业务角色",
          desc: "主要用于赋予预算审批权限",
        },
        {
          name: "调整申报用户",
          type: "业务角色",
          desc: "主要用于赋予预算调整申报权限",
        },
        {
          name: "调整审批用户",
          type: "业务角色",
          desc: "主要用于赋予预算调整审批权限",
        },
        {
          name: "职业教育与发展规划研究院部门领导",
          type: "流程同步",
          desc: "单位领导",
        },
        {
          name: "党委宣传部部门领导",
          type: "流程同步",
          desc: "单位领导",
        },
        {
          name: "审计处部门领导",
          type: "流程同步",
          desc: "单位领导",
        },
        {
          name: "公共课部部门领导",
          type: "流程同步",
          desc: "单位领导",
        },
      ],
      tableHeader: [
        {
          label: "名称",
          value: "name",
        },
        {
          label: "类型",
          value: "type",
        },
        {
          label: "描述",
          value: "desc",
        },
      ],
    };
  },
  methods: {
    add(){
       this.$refs.child.add();
    }
  },
  components: {
    addCharacter
  },
};
</script>

<style scoped>
</style>
