<template>
  <div>
    <el-card >
      <div v-if="isShow">
        <el-button type="primary" @click="add">新增</el-button>
        <el-button type="warning" @click="add">编辑</el-button>
        <el-button @click="search">搜索</el-button>
      </div>
     <div v-else>
        <el-button type="primary" @click="operate">操作</el-button>
        <el-button>导出</el-button>
        <el-input type="text" placeholder="输入关键字"></el-input
        ><el-button type="success">搜索</el-button>
      </div>

      <typeDialog ref="child"></typeDialog>

      <el-table :data="tableData" border style="width: 60%; margin-top: 20px">
        <el-table-column type="index" align="center"></el-table-column>
        <el-table-column
          v-for="item in tableHeader"
          :key="item.label"
          :label="item.label"
          :prop="item.value"
          align="center"
        ></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import typeDialog from "@/views/Layout/Content/SystemManage/Ryda/components/typeDialog.vue";
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          code: "01",
          name: "行政人员",
          money: "在职工资",
        },
        {
          id: "2",
          code: "02",
          name: "教学人员",
          money: "在职工资",
        },
         {
          id: "3",
          code: "03",
          name: "教辅人员",
          money: "在职工资",
        },
         {
          id: "4",
          code: "04",
          name: "后勤人员",
          money: "在职工资",
        },
         {
          id: "5",
          code: "05",
          name: "退休人员",
          money: "离退工资",
        },
         {
          id: "6",
          code: "06",
          name: "离休人员",
          money: "离退工资",
        }
      ],
      tableHeader: [
        { label: "人员类别代码", value: "code" },
        { label: "人员类别名称", value: "name" },
        { label: "薪酬类别代码", value: "money" },
      ],
      isShow:true
    };
  },
  methods: {
    add() {
      this.$refs.child.add();
    },
    search(){
      this.isShow=!this.isShow
    },
    operate(){
      this.isShow=!this.isShow
      
    }
  },
  components: {
    typeDialog,
  },
};
</script>

<style lang="less" scoped>
//设置表头的背景色
/deep/.el-table th {
  background-color: #f7f7f7;
}
//设置标题行(th)的字体属性；
::v-deep .el-table th > .cell {
  color: #333333;
  font-size: 14px;
}

.el-input {
  width: 20%;
}
</style>
