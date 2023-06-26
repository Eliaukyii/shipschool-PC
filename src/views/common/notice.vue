<template>
  <div>
    <!-- 消息通知栏内容弹框 -->
   <el-dialog :visible.sync="dialogFormVisible" :rowaa=row>
     <p v-html="row"></p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
        dialogFormVisible: false,
        row:'',
    }
  },
  methods: {
    rowClick(row) {
      this.dialogFormVisible = true;
      this.row=row
    },
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
/deep/ .el-dialog__header{

  padding: 0;
}

/deep/ .el-dialog__body{
  line-height: 20px;
}
</style>
