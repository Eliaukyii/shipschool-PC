<template>
  <div>
    <table style="margin: 0 auto;width:65%;">
      <tr>
        <td colspan="3" style="text-align: center; border: 0">
          <img
            src="@/assets/images/fjmk/拒绝.png"
            alt=""
            style="transform: translate(10px, 15px)"
          /><span class="headTitle">武汉船舶职业技术学院经费报销单</span>
          <vue-barcode
            :value="barcodeValue"
            height="52"
            width="1"
            style="float: right"
          />
        </td>
      </tr>
      <tr>
        <td colspan="3" style="border: 0">
          <i
            class="el-icon-search"
            style="font-size: 16px; color: #2d6dcc"
            @click="addTr"
            >项目余额</i
          >
          <i
            class="el-icon-printer"
            style="font-size: 24px; color: #2d6dcc; float: right"
          ></i>
        </td>
      </tr>
      <tr>
        <td>
          <span class="title">经费部门：</span><span class="write">机械工程学院</span>
        </td>
        <td>
          <span class="title">报销时间：</span
          ><span class="write">2022-10-03</span>
        </td>
        <td>
          <span class="title">附件(张)：</span><span class="write">3</span>
        </td>
      </tr>
      <tr style="text-align: center">
        <td><span class="title">摘要</span></td>
        <td><span class="title">经费用途(项目归属)</span></td>
        <td style="padding-right: 12px">
          <span class="title">报销金额</span>
        </td>
      </tr>
      <tr>
        <td><span class="write">支出报销</span></td>
        <td><span class="write">耗材费</span></td>
        <td style="text-align:right;">
          <span class="write">500.00</span>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <span class="title"
            >总金额（大写）：<span class="write"
              >币&nbsp;伍佰&nbsp;零拾&nbsp;零元&nbsp;零角&nbsp;零分&nbsp;</span
            ></span
          >
        </td>
        <td style="text-align:right;">
          <span class="write">500.00</span>
        </td>
      </tr>
      <tr>
        <td colspan="3"><span class="title">其它记载：</span></td>
      </tr>
      <tr>
        <td>
          <span class="title">申报人：</span><span class="write">蔡其松</span>
        </td>
        <td>
          <span class="title">经办人：</span><span class="text">请输入</span>
        </td>
        <td>
          <span class="title">报销人：</span><span class="text">请输入</span>
        </td>
      </tr>
      <tr>
        <td style="border: 0"><span class="text">会计：</span></td>
        <td style="border: 0"><span class="text">出纳：</span></td>
        <td style="border: 0"><span class="text">报账初审：</span></td>
      </tr>
    </table>
    <div class="wrap">
      <div class="line"></div>
      <div class="message">附件信息</div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{ 'border-right': '1px solid #d9d9d9' }"
    >
      <el-table-column prop="name" label="文件名称"> </el-table-column>
      <el-table-column prop="time" label="上传时间" width="180">
      </el-table-column>
      <el-table-column prop="size" label="文件大小" width="180">
      </el-table-column>
      <el-table-column prop="count" label="下载次数" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180" align="center">
        <template>
          <el-button type="text" size="small">存入网盘</el-button>
          <el-button type="text" size="small">下载</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import VueBarcode from "vue-barcode";
export default {
  name: "Bxdxq",
  data() {
    return {
      barcodeValue: "2023031000002",
      tableData: [
        {
          name: "111",
          time: "2022-09-27 21:11:09",
          size: "4kb",
          count: "0",
        },
        {
          name: "111",
          time: "2022-09-27 21:11:09",
          size: "4kb",
          count: "0",
        },
      ],
    };
  },
  created() {},
  methods: {
    addTr() {
      console.log("111");
    },
  },
  components: {
    VueBarcode,
  },
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

.headTitle {
  font-size: 28px;
  color: #333333;
  text-align: center;
  line-height: 36px;
  font-weight: 400;
  margin-top: 40px;
  margin-bottom: 32px;
}
// h3 {
//   font-family: PingFangSC-Semibold;
//   font-size: 14px;
//   color: #333333;
//   line-height: 14px;
//   font-weight: 600;
// }
.wrap {
  margin-bottom: 8px;
  width: 400px;
  height: 28px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  .line {
    background: #4686f2;
    width: 4px;
    height: 14px;
    display: block;
  }
  .message {
    font-family: PingFangSC-Semibold;
    color: #333333;
    font-weight: 600;
    margin-left: 8px;
  }
}
table {
  line-height: 42px;
  tr {
    td {
      border: 1px solid #ccc;
      height: 42px;
      width: 400px;
      .title {
        font-size: 13px;
        color: #333333;
        font-weight: 600;
        margin-left: 12px;
      }
      .text {
        color: #999999;
        font-size: 12px;
        margin-left: 12px;
      }
      .write {
        font-size: 12px;
        padding: 8px;
      }
    }
  }
}
</style>
