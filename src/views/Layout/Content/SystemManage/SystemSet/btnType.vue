<template>
  <div>
    <el-card>
        <el-button-group style="float: left">
          <el-button type="success" size="small">添加</el-button>
          <el-button type="warning" size="small">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </el-button-group>
        <div style="width: 80%; float: left; margin-left: 8px;margin-bottom:10px">
          <el-input type="text" placeholder="输入关键字"></el-input
          ><el-button type="success">搜索</el-button>
        </div>
      <el-table :data="tableData" style="width: 80%" border height="740">
        <el-table-column
          label="名称"
          prop="Btn_Name"
          align="center"
        ></el-table-column>
        <el-table-column
          label="代码"
          prop="Btn_Code"
          align="center"
        ></el-table-column>
        <el-table-column
          label="样式"
          prop="Btn_Class"
          align="center"
        ></el-table-column>
        <el-table-column
          label="类型"
          prop="Btn_Type"
          align="center"
        ></el-table-column>
        <el-table-column
          label="状态"
          prop="Btn_Status"
          align="center"
        ></el-table-column>
        <el-table-column
          label="备注"
          prop="Note"
          align="center"
        ></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { ButtonSelect } from "@/api/info.js";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.ButtonSelect();
  },
  mounted() {},
  methods: {
    ButtonSelect(data) {
      ButtonSelect(data).then((res) => {
        this.tableData = res.data;
      });
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.el-input {
  width: 25%;
}

//设置表头的背景色
/deep/.el-table th {
  background-color: #f7f7f7;
}
//设置标题行(th)的字体属性；
::v-deep .el-table th > .cell {
  color: #333333;
  font-size: 14px;
}
</style>
