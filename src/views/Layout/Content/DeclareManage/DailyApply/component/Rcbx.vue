<template>
  <div>
    <el-card v-if="homeShow">
      <div class="wrap">
        <div style="margin-left: 64px">
          <div class="nav">
            <div class="state">审批状态</div>
            <div class="tab">
              <div
                v-for="(item, index) in status"
                :key="index"
                class="list"
                @click="check(index)"
                :class="currentIndex.indexOf(index) !== -1 ? 'activeClass' : ''"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="choice" style="margin-top: 16px">
            <span>报销部门</span>
            <el-select
              v-model="selectDept"
              placeholder="请选择"
              style="width: 152px; margin-left: 8px"
            >
              <el-option
                v-for="(item, index) in list"
                :key="index"
                :label="item.DeptName"
                :value="item.DeptCode"
              ></el-option>
            </el-select>
            <span style="margin-left: 56px">报销项目</span>
            <el-select
              v-model="value"
              placeholder="请选择"
              style="width: 160px; margin-left: 8px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select
              v-model="value"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="请输入申请单号、申报人、报销人"
              style="width: 256px; margin-left: 8px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <button
              class="btn"
              style="margin-left: 8px; background: #2d6dcc; color: #fff"
            >
              查询
            </button>
            <button class="btn">重置</button>
            <span style="margin-left: 8px; color: #2d6dcc; cursor: pointer"
              >高级 <i class="el-icon-arrow-down"></i
            ></span>
          </div>
        </div>
        <button
          class="newBtn"
          @click="newBtn"
          style="background: #2d6dcc; color: #fff; cursor: pointer"
        >
          新建
        </button>
        <button class="btn" @click="deleteSelectRows">删除</button>
        <button class="btn">导出</button>
        <!-- 弹框内容  -->
        <Dialog :visible.sync="visible" ref="child"></Dialog>
        <el-table
          ref="multipleTable"
          :data="
            tableData.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
          tooltip-effect="dark"
          style="width: 100%"
          max-height="580"
          @selection-change="handleSelectionChange"
          stripe
          :header-cell-style="{ 'border-right': '1px solid #d9d9d9' }"
        >
          <el-table-column type="selection"></el-table-column>
          <el-table-column
            v-for="item in tableHeader"
            :key="item.label"
            :label="item.label"
            :prop="item.value"
            align="center"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="170"
            align="center"
          >
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="handleEdit"
                >编辑</el-button
              >
              <el-button
                type="text"
                size="small"
                @click="handleDelete(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页器 -->
      <el-pagination
        style="margin-top: 12px"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 5, 10, 20]"
        :page-size="pageSize"
        layout="->,total, prev, pager, next, sizes, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </el-card>
    <StepPage v-if="childShow"></StepPage>
  </div>
</template>

<script>
import StepPage from "../StepPage.vue";
import Dialog from "@/components/Dialog.vue";

import { DeptList } from "@/api/systemManage.js";

export default {
  data() {
    return {
      selectDept: "",
      list: [],
      visible: true,
      currentIndex: [],
      homeShow: true,
      childShow: false,
      isShow: false,
      value: "",
      options: [
        {
          value: "选项",
          label: "暂无",
        },
      ],
      currentPage: 1,
      pageSize: 10,
      tableData: [
        {
          id: 0,
          progress: "0%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "14480048",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
        {
          id: 1,
          progress: "70%",
          number: "14480049",
          date: "2022-09-27 21:11:09",
          num: "14480049",
          class: "财务处",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "单位领导",
          manage: "编辑 删除",
        },
        {
          id: 2,
          progress: "70%",
          number: "144800411",
          date: "2022-09-27 21:11:09",
          num: "14480048",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
        {
          id: 3,
          progress: "100%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "144800441",
          class: "财务处",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "已完成",
          person: "汤君",
          document: "进行中",
          now: "单位领导",
          manage: "编辑 删除",
        },
        {
          id: 4,
          progress: "100%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "14480043",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "已完成",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
        {
          id: 5,
          progress: "70%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "14480043",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
        {
          id: 6,
          progress: "70%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "14480043",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
        {
          id: 7,
          progress: "70%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "14480043",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
        {
          id: 8,
          progress: "70%",
          number: "",
          date: "2022-09-27 21:11:09",
          num: "14480043",
          class: "工会办公室",
          money: "20000.00",
          desc: "摘要摘要摘要摘要摘要",
          advancer: "胡湾",
          declarant: "陈晨",
          operator: "乔伊",
          status: "进行中",
          person: "汤君",
          document: "进行中",
          now: "财务稽查",
          manage: "编辑 删除",
        },
      ],
      tableHeader: [
        { label: "进度", value: "progress" },
        { label: "申请日期", value: "date" },
        { label: "单号", value: "num" },
        { label: "部门", value: "class" },
        { label: "金额", value: "money" },
        { label: "摘要", value: "desc" },
        { label: "报销人", value: "advancer" },
        { label: "申报人", value: "declarant" },
        { label: "经办人", value: "operator" },
        { label: "审批状态", value: "status" },
        { label: "待批人", value: "person" },
      ],
      status: [
        "全部",
        "已完成",
        "进行中",
        "未提交",
        "退回",
        "逾期",
        "绿色通道",
        "系统冻结",
        "临时冻结",
      ],
      selectedRows: [], // 选中的行
      filterText: "",
      form: {
        progress: "", //进度
        Date: "", //申请日期
        orderNum: "", //单号
        department: "", //部门
        amount: "", //金额
        desc: "", //摘要
        reimburser: "", //报销人
        applicant: "", //申报人
        agent: "", //经办人
        status: "", //审批状态
        waiter: "", //待批人
      },
    };
  },
  created() {
    DeptList().then((res) => {
      this.list = res.data.list;
    });
  },
  mounted() {},
  methods: {
    newBtn() {
      this.homeShow = !this.homeShow;
      this.childShow = !this.childShow;
    },
    handleDelete() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
         this.$message({
          type:'success',
          message:'删除成功！'
         })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleEdit() {
      this.$refs.child.handleEdit(); //直接访问子组件方法,用ref拿子组件方法
    },
    check(index) {
      if (this.currentIndex.indexOf(index) == -1) {
        this.currentIndex.push(index);
      } else {
        this.currentIndex.splice(this.currentIndex.indexOf(index), 1);
      }
    },
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    deleteSelectRows() {
      const selection = this.$refs.multipleTable.selection; // 获取选中的行
      const ids = selection.map((item) => item.id); // 获取选中行的id数组
      this.tableData = this.tableData.filter((item) => !ids.includes(item.id)); //过滤出未选中行的数据
    },
    handleSelectionChange(selection) {
      this.selectedRows = selection;
    },
  },
  components: {
    StepPage,
    Dialog,
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-input--suffix .el-input__inner {
  height: 28px;
  font-size: 12px;
}
/deep/ .el-input--prefix .el-input__inner {
  padding-left: 15px;
}
/deep/ .el-input__icon {
  line-height: inherit;
}
/deep/ .el-input__prefix,
.el-input__suffix {
  right: -180px;
}

// /deep/ .el-table td.el-table__cell {
//   border: 0;
// }
//设置表头的背景色
/deep/.el-table th {
  background-color: #f7f7f7;
}
//设置标题行(th)的字体属性；
::v-deep .el-table th > .cell {
  color: #333333;
  font-size: 14px;
}

//去除表格的最下面一行的边框
.tableStyle::before {
  width: 0;
}
//设置表的外边框
.el-table {
  border-left: 1px solid #EBEEF5;
  border-right: 1px solid #EBEEF5;
}
.wrap {
  font-size: 12px;
  .nav {
    display: flex;
    .state {
      line-height: 28px;
    }
    .tab {
      color: #4686f2;
      margin-left: 8px;
      .list {
        float: left;
        padding: 8px;
        border: 1px solid #4686f2;
        margin-right: 8px;
        cursor: pointer;
        position: relative;
      }
      .activeClass::before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        border: 8px solid #4686f2;
        border-top-color: transparent;
        border-left-color: transparent;
      }
      .activeClass::after {
        content: "";
        position: absolute;
        width: 3px;
        height: 6px;
        right: 1px;
        bottom: 0px;
        border: 2px solid #fff;
        border-top-color: transparent;
        border-left-color: transparent;
        transform: rotate(45deg);
      }
    }
  }
  .btn,
  .newBtn {
    margin-bottom: 8px;
    width: 52px;
    height: 28px;
    background: #fff;
    border: 1px solid #ddd;
    color: #333;
    margin-right: 8px;
  }
}
</style>
<style>
.el-popper[x-placement^="bottom"] {
  margin-top: 5px;
}
</style>