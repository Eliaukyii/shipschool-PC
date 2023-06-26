<template>
  <div>
    <el-card  v-if="homeShow">
      <el-page-header
        @back="goBack"
        content="摘要管理"
        style="margin-bottom: 16px"
      >
      </el-page-header>
      <div class="wrap">
        <button class="btn" style="background: #2d6dcc; color: #fff">
          新建
        </button>
        <button class="btn">删除</button>
        <button class="btn">导入</button>
        <button class="btn">导出</button>

        <!-- 弹框内容  -->
        <Dialog :visible.sync="visible" ref="child"></Dialog>

        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          stripe
          max-height="481"
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
          <!-- <Dialog></Dialog> -->
          <el-table-column
            fixed="right"
            label="操作"
            width="180"
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
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination
        style="margin-top: 12px"
        :current-page="currentPage"
        :page-sizes="[20, 40, 60]"
        :page-size="pageSize"
        layout="->,total, prev, pager, next, sizes, jumper"
        :total="133"
      >
      </el-pagination>
      <div class="bottom">
        <el-button @click="close">关闭</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog.vue";
export default {
  data() {
    return {
      visible: true,
      homeShow: true,
      childShow: false,
      isShow: false,
      currentPage: 1,
      pageSize: 5,
      tableData: [
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
        {
          id: "陈晨",
          desc: "摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要",
          time: "2022-09-27 21:11:09",
          open: "启用",
        },
      ],
      tableHeader: [
        { label: "用户ID", value: "id" },
        { label: "摘要内容", value: "desc" },
        { label: "创建日期", value: "time" },
        { label: "是否启用", value: "open" },
      ],
    };
  },
  methods: {
    goBack() {
     this.$router.go(-1)
    },
    close() {
      console.log("关闭");
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
/deep/ .el-page-header__content {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #333333;
  font-weight: 600;
}
.wrap {
  font-size: 12px;
  .tab {
    display: inline-block;
    color: #4686f2;
    margin-left: 8px;
    .list {
      padding: 8px;
      border: 1px solid #4686f2;
      margin-right: 8px;
      position: relative;
    }
    .list::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      border: 8px solid #4686f2;
      border-top-color: transparent;
      border-left-color: transparent;
    }
    .list::after {
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
  .btn {
    margin-bottom: 8px;
    width: 52px;
    height: 28px;
    background: #fff;
    border: 1px solid #ddd;
    color: #333;
    margin-right: 8px;
  }
}
.bottom {
  border-top: 1px solid #e9e9e9;
  padding-top: 8px;
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
</style>
<style>
.el-popper[x-placement^="bottom"] {
  margin-top: 5px;
}
</style>