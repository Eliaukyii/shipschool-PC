<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column
      v-for="item in tableHeader"
      :key="item.label"
      :label="item.label"
      :prop="item.value"
      align="center"
    ></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          num: "00001",
          date: "20221001",
          class: "招生工作处",
          project: "null",
          desc: "测试借支招生费",
          natural: "借款",
          money: "1000.0000",
        },
        {
          id: "2",
          num: "00001",
          date: "20221001",
          class: "招生工作处",
          project: "null",
          desc: "测试冲借支招生费",
          natural: "还款",
          money: "900.0000",
        },
      ],
     tableHeader: [
        { label: "序号", value: "id" },
        { label: "业务单号", value: "num" },
        { label: "日期", value: "date" },
        { label: "部门", value: "class" },
        { label: "项目", value: "project" },
        { label: "摘要", value: "desc" },
        { label: "性质", value: "natural" },
        { label: "金额", value: "money" },
      ],
    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>

</style>