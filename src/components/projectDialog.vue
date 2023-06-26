<template>
  <div>
    <el-dialog title="项目余额" :visible.sync="dialogFormVisible">
      <div class="desc">
        <div class="descItem">
          <span class="descLeft">其他经费=(负)-2605.43</span
          ><span class="descRight">没有分配预算</span>
        </div>
        <div class="descItem">
          <span class="descLeft">其他经费=(负)-2605.43</span
          ><span class="descRight">没有分配预算</span>
        </div>
        <div class="descItem">
          <span class="descLeft">其他经费=(负)-2605.43</span
          ><span class="descRight">没有分配预算</span>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button>关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  methods: {
    // 在父组件调用打开
    open() {
      this.dialogFormVisible = true;
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
  width: 25%;
}
/deep/ .el-dialog__header {
  border-bottom: 1px solid #eee;
}
/deep/ .el-dialog__title {
  font-weight: bold;
  font-size: 14px;
}

.desc {
  font-size: 14px;
  .descItem {
    padding: 12px;
    .descRight {
      margin-left: 8px;
      color: #f14c5d;
    }
  }
}
</style>
