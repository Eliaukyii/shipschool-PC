<template>
  <div>
    <div class="btns">
      <button class="btn1" @click="uploadFile">上传附件</button>
      <button class="btn2">网盘文件</button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{ 'border-right': '1px solid #d9d9d9' }"
    >
      <el-table-column label="文件名称">
        <template>
          <el-upload
            class="upload-demo"
            ref="upload"
            :file-list="fileList"
            :auto-upload="false"
            action="https://jsonplaceholder.typicode.com/posts/"
          >
          </el-upload>
        </template>
      </el-table-column>
      <el-table-column prop="time" label="上传时间" width="350">
      </el-table-column>
      <el-table-column prop="size" label="文件大小" width="200">
      </el-table-column>
      <el-table-column prop="count" label="下载次数" width="200">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="250" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small">存入网盘</el-button>
          <el-button type="text" size="small">下载</el-button>
          <el-button
            type="text"
            size="small"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        }
      ],
      tableData: [
        {
          time: "2022-09-27 21:11:09",
          size: "4kb",
          count: "0",
        },
        {
          time: "2022-09-27 21:11:09",
          size: "4kb",
          count: "0",
        },
      ],
    };
  },
  methods: {
    uploadFile() {
      this.$refs.upload.uploadFile()
    },
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.el-table {
  border: 1px solid rgb(234, 232, 232);
}
.btns {
  margin-bottom: 9px;
  .btn1 {
    margin-left: 8px;
    background: #2d6dcc;
    color: #fff;
    border: none;
    padding: 8px;
  }
  .btn2 {
    margin-left: 8px;
    color: #333;
    border: 1px solid #d9d9d9;
    padding: 8px;
    background-color: #fff;
  }
}
</style>
