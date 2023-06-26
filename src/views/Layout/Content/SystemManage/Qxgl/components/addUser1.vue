<template>
  <div>
    <el-dialog title="选择用户" :visible.sync="dialogFormVisible">
      <div style="margin-bottom: 20px">
        <el-button
          @click="toggleSelection([tableData[0], tableData[1]])"
          type="success"
          >显示所有</el-button
        >
        <el-button
          @click="toggleSelection([tableData[0], tableData[1]])"
          type="success"
          >全选</el-button
        >
        <el-button @click="toggleSelection()" type="danger">取消全选</el-button>
        <el-input placeholder="输入姓名"></el-input><el-button type="primary">搜索</el-button>
      </div>
      <el-checkbox-group v-model="checkList" style="margin-bottom: 20px">
        <el-checkbox label="在职"></el-checkbox>
        <el-checkbox label="退休"></el-checkbox>
      </el-checkbox-group>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        border
      >
        <el-table-column type="selection"> </el-table-column>
        <el-table-column prop="name" label="姓名" align="center">
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      tableData: [
        {
          id: "01",
          name: "蔡其松",
        },
        {
          id: "02",
          name: "邓老师",
        },
      ],
      multipleSelection: [],
      checkList: ["在职"],
    };
  },
  created() {},
  methods: {
    chooseOld() {
      this.dialogFormVisible = true;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
  watch: {},
  components: {},
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
  width: 60%;
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
/deep/ .el-input {
  width: 30%;
  margin-left: 20px;
}
</style>
