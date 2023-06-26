<template>
  <div>
    <el-card >
      <div>
        <el-button type="primary" @click="add">新增</el-button>
        <el-button type="success">查看</el-button>
        <el-button type="warning">编辑</el-button>
        <el-button type="primary">导入</el-button>
        <el-button type="primary">导出</el-button>
        <el-input type="text" placeholder="输入关键字" style="margin-left:20px;"></el-input
        ><el-button type="success">搜索</el-button>
        <el-button type="warning">查询变更记录</el-button>
      </div>

      <applyDialog ref="child"></applyDialog>
      <div style="display: flex; margin-top: 40px">
        <el-tree
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
        ></el-tree>
        <el-table
          :data="tableData"
          style="width: 80%"
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
import applyDialog from '@/views/Layout/Content/SystemManage/Ryda/components/applyDialog.vue'
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "在职人员",
        },
        {
          value: "选项3",
          label: "退休人员",
        },
      ],
      value: "",
      tableData: [
        {
          id: "",
          account: "",
          name: "",
          number: "",
          category: "",
          type: "",
          row: "",
          bank: "",
          person: "",
          phone: "",
          open: "",
        }
      ],
      tableHeader: [
        {
          label: "账户ID",
          value: "id",
        },
        {
          label: "账户",
          value: "account",
        },
        {
          label: "户名",
          value: "name",
        },
        {
          label: "证号",
          value: "number",
        },
        {
          label: "类别",
          value: "category",
        },
        {
          label: "类型",
          value: "type",
        },
        {
          label: "行号",
          value: "row",
        },
        {
          label: "银行",
          value: "bank",
        },
        {
          label: "负责人",
          value: "person",
        },
        {
          label: "电话",
          value: "phone",
        },
        {
          label: "是否启用",
          value: "open",
        }
      ],
      data: [
        {
          label: "显示全部",
          children: [
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
              label: "离退",
            },
            {
              label: "教学",
            },
            {
              label: "后勤",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
     add() {
      this.$refs.child.add();
    },
  },
  components: {
    applyDialog
  },
};
</script>

<style lang="less" scoped>
.el-input {
  width: 20%;
}
.el-tree {
  width: 10%;
}
/deep/.el-table th {
  background-color: #f7f7f7;
}
</style>