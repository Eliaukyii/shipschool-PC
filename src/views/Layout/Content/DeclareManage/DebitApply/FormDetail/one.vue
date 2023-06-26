<template>
  <div>
    <p class="text">Dev借款单</p>
    <table style="margin: 0 auto; width: 65%">
      <tbody>
        <tr>
          <td style="border: 0">借支部门：院长办公室</td>
          <td style="border: 0"></td>
          <td style="border: 0">2023-04-11</td>
          <td style="border: 0"></td>
          <td style="border: 0">附件：0张</td>
        </tr>
        <tr>
          <td>借款单位或姓名</td>
          <td colspan="4">&nbsp;</td>
        </tr>
        <tr>
          <td>借支事由</td>
          <td colspan="4">&nbsp;</td>
        </tr>
        <tr>
          <td>经费支出渠道</td>
          <td colspan="4">&nbsp;</td>
        </tr>
        <tr>
          <td>总金额(大写)</td>
          <td colspan="3">币 零元 零角 零分</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td rowspan="4" style="vertical-align: middle">转账金额</td>
          <td rowspan="4" style="vertical-align: middle"></td>
          <td>户名</td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td>账(卡)号</td>
          <td colspan="2"></td>
        </tr>

        <tr>
          <td>开户行</td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td>行号</td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td>备注</td>
          <td colspan="4"></td>
        </tr>
        <tr>
          <td style="border: 0">分管院领导：</td>
          <td style="border: 0"></td>
          <td style="border: 0">单位（部门）领导：</td>
          <td style="border: 0"></td>
          <td style="border: 0">借款人：</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>


<style lang="less" scoped>
//设置进度条样式
/deep/ .el-step__title.is-wait {
  color: #333 !important;
}

/deep/ .el-step__line {
  background-color: #2d6dcc;
}
/deep/ .el-step__icon {
  background: #2d6dcc;
}
::v-deep .el-step__icon.is-text {
  border: 0;
}
::v-deep .el-step__icon-inner {
  color: #fff;
  font-size: 12px;
}
.formAccount {
  .el-steps {
    justify-content: center;
  }
  .text {
    font-size: 28px;
    color: #333333;
    text-align: center;
    line-height: 36px;
    font-weight: 400;
    margin-top: 40px;
    margin-bottom: 32px;
  }
  table {
    line-height: 42px;
    text-align: center;
    font-size: 14px;
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
        }
        input {
          outline: none;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border: 0;
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }
  .bottom {
    border-top: 1px solid #e9e9e9;
    padding-top: 8px;
    margin-top: 144px;
    display: flex;
    justify-content: center;
  }
}
</style>

