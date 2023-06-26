<template>
  <div>
    <el-card >
      <div>
        <el-button>打印设计</el-button>
        <el-button type="primary" @click="add">新增</el-button>
        <el-button type="success">查看</el-button>
        <el-button type="warning">编辑</el-button>
        <el-button type="danger">删除</el-button>
        <el-button type="primary">导入</el-button>
        <el-button type="primary">导出</el-button>
        <span style="margin-left: 20px">代码/名称：</span>
        <el-input type="text" placeholder="输入关键字"></el-input
        ><el-button type="success">搜索</el-button>
      </div>

     <classDialog ref="child"></classDialog>
      <!-- <div style="margin-top: 50px">
        <el-button @click="zz">行政</el-button>
        <el-button>离退</el-button>
        <el-button>教学</el-button>
        <el-button>后勤</el-button>
      </div> -->
      <div style="display:flex;margin-top:40px;">
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>

      <el-table
        :data="tableData"
        style="width: 80%;"
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
      </div>
    </el-card>
  </div>
</template>

<script>
import classDialog from '@/views/Layout/Content/SystemManage/Ryda/components/classDialog.vue'
export default {
  data() {
    return {
      showA: true,
      tableData: [
        {
          code: "001",
          departmentCode: "行政",
          name: "在职",
          supervisor: "",
          leader: "",
          division: "",
          superiorCode: "",
          order: "1",
          details:"是",
          enable:"是",
          type:""
        },
         {
          code: "002",
          departmentCode: "行政",
          name: "退休",
          supervisor: "",
          leader: "",
          division: "",
          superiorCode: "",
          order: "1",
          details:"是",
          enable:"是",
          type:""
        },
      ],
      tableHeader: [
        {
          label: "部门代码",
          value: "code",
        },
        {
          label: "部门性质代码",
          value: "departmentCode",
        },
        {
          label: "部门名称",
          value: "name",
        },
        {
          label: "部门主管",
          value: "supervisor",
        },
        {
          label: "部门副管",
          value: "leader",
        },
        {
          label: "单位分管",
          value: "division",
        },
        {
          label: "上级代码",
          value: "superiorCode",
        },
        {
          label: "级次",
          value: "order",
        },
         {
          label: "是否明细",
          value: "details",
        },
         {
          label: "是否启用",
          value: "enable",
        },
         {
          label: "经费类型",
          value: "type",
        },
      ],
      data: [
        {
          label: "行政",
          children: [
            {
              label: "0001 在职",
            },
             {
              label: "0002 退休",
            },
          ],
        },
        {
          label: "离退"
        },
         {
          label: "教学"
        },
         {
          label: "后勤"
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    zz() {
      this.showA = !this.showA;
    },
    add() {
      this.$refs.child.add();
    },
    handleNodeClick(data) {
      console.log(data);
    },
  },
  components: {
  classDialog
  },
};
</script>
<style lang="less" scoped>
.el-input {
  width: 20%;
}
.el-tree{
  width:10%;
}
/deep/.el-table th {
  background-color: #f7f7f7;
}
</style>