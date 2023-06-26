<template>
  <div>
    <el-card >
      <div>
        <el-button>打印设计</el-button>
        <el-button type="primary" @click="add">新增</el-button>
        <el-button type="warning">编辑</el-button>
        <el-button type="danger">删除</el-button>
        <el-button type="success">CA信息</el-button>
        <el-button type="danger">重置拼音</el-button>
        <el-button type="primary">导入</el-button>
        <el-button type="primary">导出</el-button>
        <span style="margin-left: 20px">人员类别：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input type="text" placeholder="输入关键字"></el-input
        ><el-button type="success">搜索</el-button>
        <el-button type="warning">查询变更记录</el-button>
      </div>

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
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },

        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },

        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
        {
          code: "20041938",
          classCode: "在职",
          CategoryCode: "在职人员",
          name: "许心辉",
          firstName: "XXH",
          number: "20041938",
          SuperiorCode: "420104197408141642",
          card: "",
        },
      ],
      tableHeader: [
        {
          label: "人员代码",
          value: "code",
        },
        {
          label: "部门代码",
          value: "classCode",
        },
        {
          label: "人员类别代码",
          value: "CategoryCode",
        },
        {
          label: "人员姓名",
          value: "name",
        },
        {
          label: "姓名首拼",
          value: "firstName",
        },
        {
          label: "人员编号",
          value: "number",
        },
        {
          label: "身份证号",
          value: "SuperiorCode",
        },
        {
          label: "校园卡号",
          value: "card",
        },
        {
          label: "性别",
          value: "card",
        },
        {
          label: "出生日期",
          value: "card",
        },
        {
          label: "国籍",
          value: "card",
        },
        {
          label: "民族",
          value: "card",
        },
        {
          label: "籍贯",
          value: "card",
        },
        {
          label: "学历",
          value: "card",
        },
        {
          label: "职称",
          value: "card",
        },
        {
          label: "职务",
          value: "card",
        },
        {
          label: "发薪/停薪",
          value: "card",
        },
        {
          label: "公务卡号",
          value: "card",
        },
        {
          label: "公积金账号",
          value: "card",
        },
        {
          label: "工作日期",
          value: "card",
        },
        {
          label: "离退日期",
          value: "card",
        },
        {
          label: "离职日期",
          value: "card",
        },
        {
          label: "地址",
          value: "card",
        },
        {
          label: "电话",
          value: "card",
        },
        {
          label: "电子邮件",
          value: "card",
        },
        {
          label: "备注",
          value: "card",
        },
        {
          label: "经费类型",
          value: "card",
        },
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
  methods: {},
  components: {},
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
