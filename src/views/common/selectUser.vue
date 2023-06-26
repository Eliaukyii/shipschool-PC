<template>
  <div>
    <el-dialog title="选择用户" :visible.sync="detailVisible" append-to-body>
      <div>
        <div class="top-bar">
          <div class="left">
            <el-button type="success" size="small">显示所有</el-button>
            <el-button type="success" size="small" @click="handleSelectAll()"
              >全选</el-button
            >
            <el-button type="danger" size="small" @click="cancelSelect()">取消全选</el-button>
            <el-input
              v-model="keyword"
              placeholder="输入工号 / 姓名"
              clearable
              class="search"
              @keyup.enter.native="search"
            />
          </div>
          <div class="right">
            <span style="color: red; margin-right: 8px"
              >已选择 {{ count }} 人</span
            >
            <el-button type="primary" size="small" @click="save"
              >保存</el-button
            >
            <el-button type="warning" size="small">返回</el-button>
          </div>
        </div>
        <div class="content">
          <el-col :span="6" :xs="24" class="dialogDiv">
            <el-tree
              :data="treeData"
              :props="defaultProps"
              node-key="id"
              ref="tree"
              @node-click="handleNodeClick"
            >
            </el-tree>
          </el-col>
          <el-col :span="18" :xs="24" class="dialogDiv">
            <div class="headTitle">{{ SelectName }}</div>
            <el-table
              :data="
                tableData
                  ? tableData.slice(
                      (pageIndex - 1) * pageSize,
                      pageIndex * pageSize
                    )
                  : []
              "
              ref="multipleTable"
              style="width: 100%"
              border
              @selection-change="handleSelectionChange"
              :show-header="false"
              :reserve-selection="false"
              :header-cell-style="{
                'border-right': '0',
                backgroundColor: '#fff',
              }"
            >
              <el-table-column type="selection" width="80" align="center">
              </el-table-column>
              <el-table-column
                prop="EmployeeID"
                :label="SelectName"
                width="120"
                align="center"
              >
              </el-table-column>
              <el-table-column prop="EmployeeName" align="center">
              </el-table-column>
              <el-table-column prop="IDCard" align="center"></el-table-column>
              <el-table-column
                prop="EmployeeCode"
                align="center"
                width="120"
              ></el-table-column>
            </el-table>
            <el-pagination
              align="right"
              :total="total"
              :page.sync="pageIndex"
              :limit.sync="pageSize"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              layout="total, prev, pager, next"
            ></el-pagination>
          </el-col>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { DeptList, EmployeeList } from "@/api/systemManage.js";

export default {
  data() {
    return {
      total: 0,
      pageIndex: 1,
      pageSize: 10,
      detailVisible: false,
      tableData: [],
      treeData: [],
      defaultProps: {
        children: "children",
        label: "DeptName",
      },
      TreeParams: {
        pageIndex: 1,
        pageSize: 62,
      },
      TableParams: {
        pageIndex: 1,
        pageSize: 1818,
      },
      SelectName: "", //选中左侧对应右侧的部门名称
      multipleSelection: [],
      count: 0,
      keyword: "", //输入框的值
      selectData:''
    };
  },
  created() {
    this.getDeptList();
  },
  mounted() {},

  methods: {
    init() {
      this.detailVisible = true;
    },

    handleNodeClick(data) {
      this.SelectCode = data.DeptCode;
      this.tableData = this.getEmployeeList();
      this.SelectName = data.DeptName;
    },

    //渲染树列表
    getDeptList() {
      let TreeParams = {
        pageIndex: this.TreeParams.pageIndex,
        pageSize: this.TreeParams.pageSize,
      };
      DeptList(TreeParams).then((res) => {
        this.treeData = res.data.list;
        this.SelectCode = this.treeData[0].DeptCode;
        this.SelectName = this.treeData[0].DeptName;
        this.getEmployeeList(this.SelectCode);
      });
    },

    //渲染表格列表
    getEmployeeList() {
      let TableParams = {
        pageIndex: this.TableParams.pageIndex,
        pageSize: this.TableParams.pageSize,
      };
      EmployeeList(TableParams).then((res) => {
        this.tableData = res.data.list.filter(
          (item) => item.DeptCode === this.SelectCode
        );
        this.total = this.tableData.length;
      });
    },

    //表格分页器
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageIndex = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageIndex = val;
    },

    //单选
    // handleSelectionChange(val) {
    //   if (val.length > 1) {
    //     this.$refs.multipleTable.clearSelection();
    //     this.$refs.multipleTable.toggleRowSelection(val.pop());
    //   } else {
    //     this.multipleTable = val.pop();
    //   }
    // },
    // handleRowClick(row) {
    //   this.$refs.multipleTable.toggleRowSelection(row);
    //   this.selectEmployeeCode = row.EmployeeCode;
    //   console.log(this.selectEmployeeCode);
    // },

  //单选
    handleSelectionChange(selection,row){
      this.selectData = row
      // 清除 所有勾选项
      this.$refs.multipleTable.clearSelection()
      if(selection.length>1){
        let del_row = selection.shift()
         this.$refs.multipleTable.toggleRowSelection(del_row, false)
      }
    },

    //全选
    handleSelectAll(){
      this.$refs.multipleTable.clearSelection()
      this.$refs.multipleTable.toggleAllSelection()
    },
    //取消全选
    cancelSelect(){
      this.$refs.multipleTable.clearSelection()
    },

    //搜索
    search() {
      this.searchContent = this.keyword;
      console.log(this.searchContent);
      EmployeeList().then((res) => {
        // console.log(res);
        this.tableData = res.data.list.filter(
          (item) => item.EmployeeName === this.searchContent
        );
      });
    },

    //保存表单信息
    save() {
      console.log('111');
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
//设置弹框样式
/deep/ .el-dialog__body {
  padding: 0;
}
/deep/ .el-dialog__header {
  background-color: #2d6dcc;
}
/deep/ .el-dialog__title {
  color: #fff;
}
/deep/ .el-dialog__headerbtn .el-dialog__close {
  color: #fff;
}

/deep/ .el-input__inner {
  border: 1px solid #ccc;
  height: 35px;
}
.top-bar {
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  .search {
    margin-left: 8px;
    width: 43%;
  }
}
.content {
  padding-top: 20px;
  height: 500px;
  .dialogDiv {
    height: 500px;
    overflow: auto;
    .headTitle {
      height: 60px;
      line-height: 60px;
      border-top: 1px solid #ebeef5;
      border-left: 1px solid #ebeef5;
      padding-left: 8px;
      font-size: 18px;
    }
  }
}
</style>