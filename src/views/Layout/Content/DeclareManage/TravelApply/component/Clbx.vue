<template>
  <div>
    <el-card  v-if="homeShow">
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
            <span>申报部门</span>
            <el-select
              v-model="value"
              placeholder="请选择"
              style="width: 152px; margin-left: 8px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <span style="margin-left: 56px">申报项目</span>
            <el-select
              v-model="value"
              placeholder="请选择"
              style="width: 152px; margin-left: 8px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <span style="margin-left: 56px">搜索条件：</span>
            <el-select
              v-model="value"
              placeholder="请选择"
              style="width: 152px; margin-left: 8px"
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
            <button class="btn">搜索</button>
            <button class="btn">高级查询</button>
          </div>
        </div>
        <button class="btn" @click="btn">新增</button>

        <!-- 弹框内容  -->
        <Dialog :visible.sync="visible" ref="child"></Dialog>

        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          max-height="580"
          stripe
          @selection-change="handleSelectionChange"
        >
          <el-table-column align="center">
            <template slot-scope="scope">
              {{ scope.$index + 1 }}
            </template>
          </el-table-column>
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
                >查看</el-button
              >
              <el-button type="text" size="small" @click="handleEdit"
                >编辑</el-button
              >
              <el-button
                type="text"
                size="small"
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                >删除</el-button
              >
              <el-button type="text" size="small">流程图</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <StepPage v-if="childShow"></StepPage>
  </div>
</template>

<script>
import StepPage from '../StepPage.vue'
import Dialog from "@/components/Dialog.vue";
export default {
  data() {
    return {
      visible: true,
      isShow: true,
      homeShow: true,
      childShow: false,
      currentIndex: [],
      value: "",
      options: [
        {
          value: "选项",
          label: "暂无",
        },
      ],
      currentPage: 1,
      pageSize: 5,
      tableData: [
        {
          date: "2022/5/19",
          num: "202205190005",
          class: "'双高计划'办公室",
          money: "360.00",
          desc: "报销1",
          advancer: "测院领导",
          declarant: "蔡其松",
          operator: "蔡其松",
          status: "进行中",
          person: "李演示",
          document: "进行中",
          manage: "审批 转交 生成凭证",
        },
        {
          date: "2022/4/24",
          num: "202204240002",
          class: "财务处",
          money: "6140.00",
          desc: "出差",
          advancer: "曹演示",
          declarant: "蔡其松",
          operator: "蔡其松",
          status: "进行中",
          person: "陈演示",
          document: "进行中",
          now: "单位领导",
          manage: "审批 转交 生成凭证",
        },
      ],
      tableHeader: [
        { label: "日期", value: "date" },
        { label: "单号", value: "num" },
        { label: "部门", value: "class" },
        { label: "金额", value: "money" },
        { label: "摘要", value: "desc" },
        { label: "报销人", value: "advancer" },
        { label: "申报人", value: "declarant" },
        { label: "经办人", value: "operator" },
        { label: "审批状态", value: "status" },
        { label: "待批人", value: "person" },
        { label: "单据状态", value: "document" },
        { label: "凭证编号", value: "number" },
      ],
      status: [
        "全部",
        "未提交",
        "进行中",
        "退回",
        "已完成",
        "逾期",
        "绿色通道",
        "系统冻结",
        "临时冻结",
      ],
    };
  },
  methods: {
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
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    spread() {
      this.isShow = !this.isShow;
      this.$refs.myspan1.style.display = "none";
    },
    fold() {},
    btn() {
      this.homeShow = !this.homeShow;
      this.childShow = !this.childShow;
    },

    check(index) {
      //全选

       //多选
      if (this.currentIndex.indexOf(index) == -1) {
        this.currentIndex.push(index);
      } else {
        this.currentIndex.splice(this.currentIndex.indexOf(index), 1);
      }
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleEdit() {
      this.$refs.child.handleEdit(); //直接访问子组件方法,用ref拿子组件方法
    },
  },
  components: {
    Dialog,
    StepPage
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-input--suffix .el-input__inner {
  height: 28px;
  font-size: 12px;
}

/deep/ .el-input__icon {
  line-height: inherit;
}

//设置表头的背景色
/deep/.el-table th {
  background-color: #f7f7f7;
}
//设置标题行(th)的字体属性；
::v-deep .el-table th > .cell {
  color: #333333;
  font-size: 14px;
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
  .btn {
    margin-bottom: 8px;
    height: 28px;
    background: #2d6dcc;
    border: 1px solid #ddd;
    color: #fff;
    margin-right: 8px;
    font-size: 12px;
    margin-left: 8px;
    padding: 0 12px 0 12px;
    // border-radius: 5px;
  }
}
</style>
<style>
.el-popper[x-placement^="bottom"] {
  margin-top: 5px;
}
</style>