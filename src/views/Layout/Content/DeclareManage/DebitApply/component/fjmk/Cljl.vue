<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      max-height="580"
      stripe
      :header-cell-style="{ 'border-right': '1px solid #d9d9d9' }"
    >
      <el-table-column
        v-for="item in tableHeader"
        :key="item.label"
        :label="item.label"
        :prop="item.value"
        align="center"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "记账会计",
          person: "胡湾",
          state: "进行中",
          time: "2022-09-27 21:11:09",
          sign: "汤君",
          note: "备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息",
        },
        {
          name: "财务稽查",
          person: "胡湾",
          state: "进行中",
          time: "2022-09-27 21:11:09",
          sign: "汤君",
          note: "备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息",
        },
        {
          name: "记账会计",
          person: "胡湾",
          state: "进行中",
          time: "2022-09-27 21:11:09",
          sign: "汤君",
          note: "备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息",
        },
        {
          name: "财务稽查",
          person: "胡湾",
          state: "进行中",
          time: "2022-09-27 21:11:09",
          sign: "汤君",
          note: "备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息",
        },
        {
          name: "记账会计",
          person: "胡湾",
          state: "进行中",
          time: "2022-09-27 21:11:09",
          sign: "汤君",
          note: "备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息",
        },
        {
          name: "财务稽查",
          person: "胡湾",
          state: "进行中",
          time: "2022-09-27 21:11:09",
          sign: "汤君",
          note: "备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息",
        },
      ],
      tableHeader: [
        { label: "名称", value: "name" },
        { label: "操作人", value: "person" },
        { label: "状态", value: "state" },
        { label: "时间", value: "time" },
        { label: "签名", value: "sign" },
        { label: "备注", value: "note" },
      ],
    };
  },
  methods: {},
  components: {},
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
.el-table {
  border: 1px solid rgb(234, 232, 232);
}
</style>
