<template>
  <div>
    <table style="margin: 0 auto;width:80%">
      <tr>
        <td colspan="12" style="text-align: center;border:0">
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
        <td colspan="6" style="border: 0"><span>&nbsp;</span></td>
        <td colspan="5" style="border: 0"><span>报销日期：2022-11-14</span></td>
        <td colspan="1" style="border: 0"><span>附件数：0张</span></td>
      </tr>
      <tr>
        <td>
          <span class="title">部门：</span><span class="text">财务处</span>
        </td>
        <td colspan="6">
          <span class="title">出差人（职务及职称）：</span>
          <span class="text">选择出差人</span>
        </td>
        <td colspan="5">
          <span class="title">经费来源：</span>
          <span class="text">经费来源</span>
          <span>&nbsp;</span>
        </td>
      </tr>
      <tr>
        <td>
          <span class="title">目的地：</span><span class="text">目的地</span>
        </td>
        <td colspan="6">
          <span class="title">出差事由：</span
          ><span class="text"
            >某到某地做什么事（如：参加会议/培训/比赛/调研/其他）</span
          >
        </td>
        <td colspan="5">
          <span class="title">出差日期：</span
          ><span class="text">2021.01.01-2021.01.01</span
          ><span class="write">（0天）</span>
        </td>
      </tr>
      <tr style="text-align: center">
        <td colspan="6"><span class="title">交通费</span></td>
        <td colspan="2"><span class="title">伙食补助费</span></td>
        <td colspan="2"><span class="title">其他费用</span></td>
        <td colspan="2"><span class="title">审批</span></td>
      </tr>
      <tr style="text-align: center">
        <td><span class="title">出发时间</span></td>
        <td><span class="title">起点</span></td>
        <td><span class="title">到达时间</span></td>
        <td><span class="title">终点</span></td>
        <td><span class="title">交通工具</span></td>
        <td><span class="title">金额</span></td>
        <td><span class="title">人数</span></td>
        <td><span class="title">金额</span></td>
        <td><span class="title">项目</span></td>
        <td><span class="title">金额</span></td>
        <td colspan="2" rowspan="2" style="text-align: left">
          <span class="write">单位领导：</span>
        </td>
        <td colspan="2" rowspan="2" style="text-align: left"></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <select>
            <option>火车</option>
            <option>飞机</option>
            <option>汽车</option>
            <option>轮船</option>
            <option>其他</option>
          </select>
        </td>
        <td>0</td>
        <td style="text-align: center">
          <span class="hight">明细中填写</span>
        </td>
        <td><span class="hight">0</span></td>
        <td style="text-align: center">
          <span class="hight">交通补助费</span>
        </td>
        <td><span class="hight">0.00</span></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <select>
            <option>火车</option>
            <option>飞机</option>
            <option>汽车</option>
            <option>轮船</option>
            <option>其他</option>
          </select>
        </td>
        <td>0</td>
        <td></td>
        <td>0</td>
        <td style="text-align: center"><span class="hight">住宿费</span></td>
        <td><span class="hight">0.00</span></td>
        <td colspan="2" rowspan="2" style="text-align: left">
          <span class="write">财务稽查：</span>
        </td>
        <td colspan="2" rowspan="2" style="text-align: left"></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <select>
            <option>火车</option>
            <option>飞机</option>
            <option>汽车</option>
            <option>轮船</option>
            <option>其他</option>
          </select>
        </td>
        <td>0</td>
        <td></td>
        <td>0</td>
        <td></td>
        <td>0</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <select>
            <option>火车</option>
            <option>飞机</option>
            <option>汽车</option>
            <option>轮船</option>
            <option>其他</option>
          </select>
        </td>
        <td>0</td>
        <td></td>
        <td>0</td>
        <td></td>
        <td>0</td>
        <td colspan="2" rowspan="2" style="text-align: left">
          <span class="write">分管院领导：</span>
        </td>
        <td colspan="2" rowspan="2" style="text-align: left"></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <select>
            <option>火车</option>
            <option>飞机</option>
            <option>汽车</option>
            <option>轮船</option>
            <option>其他</option>
          </select>
        </td>
        <td>0</td>
        <td></td>
        <td>0</td>
        <td></td>
        <td>0</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <select>
            <option>火车</option>
            <option>飞机</option>
            <option>汽车</option>
            <option>轮船</option>
            <option>其他</option>
          </select>
        </td>
        <td>0</td>
        <td></td>
        <td>0</td>
        <td></td>
        <td>0</td>
        <td colspan="2" rowspan="2" style="text-align: left">
          <span class="write">财务院领导：</span>
        </td>
        <td colspan="2" rowspan="2" style="text-align: left"></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <select>
            <option>火车</option>
            <option>飞机</option>
            <option>汽车</option>
            <option>轮船</option>
            <option>其他</option>
          </select>
        </td>
        <td>0</td>
        <td></td>
        <td>0</td>
        <td></td>
        <td>0</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <select>
            <option>火车</option>
            <option>飞机</option>
            <option>汽车</option>
            <option>轮船</option>
            <option>其他</option>
          </select>
        </td>
        <td>0</td>
        <td></td>
        <td>0</td>
        <td></td>
        <td>0</td>
        <td colspan="2" rowspan="2" style="text-align: left">
          <span class="write">院长：</span>
        </td>
        <td colspan="2" rowspan="2" style="text-align: left"></td>
      </tr>
      <tr>
        <td style="text-align: center"><span class="title">小计</span></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align: right"><span class="title">0.00</span></td>
        <td></td>
        <td style="text-align: right"><span class="title">0.00</span></td>
        <td></td>
        <td style="text-align: right"><span class="title">0.00</span></td>
      </tr>
      <tr>
        <td style="text-align: center">
          <span class="title">校内支付信息</span>
        </td>
        <td colspan="4">
          <span class="title">教工姓名：</span
          ><span class="text">个人名称</span>
        </td>
        <td colspan="5">
          <span class="title">教工工资编号：</span
          ><span class="text">个人编号</span>
        </td>
        <td colspan="2" rowspan="2" style="text-align: left">
          <span class="write">记账会计：</span>
        </td>
        <td colspan="2" rowspan="2" style="text-align: left"></td>
      </tr>
      <tr>
        <td rowspan="2" style="text-align: center">
          <span class="title"
            >校外支付信息<br />
            <input type="radio" value="单位" />单位
            <input type="radio" value="个人" />个人
          </span>
        </td>
        <td colspan="4">
          <span class="title">收款户名：</span
          ><span class="text">收款户名</span>
        </td>
        <td colspan="5">
          <span class="title">收款账号：</span
          ><span class="text">收款账号</span>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <span class="title">开户银行：</span
          ><span class="text">开户银行</span>
        </td>
        <td colspan="7">
          <span class="title">银行行号：</span
          ><span class="text">银行行号</span>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <span class="title"
            >合计金额（大写）：币&nbsp;零元&nbsp;零角&nbsp;零分&nbsp;</span
          >
        </td>
        <td colspan="5">
          <span class="title">合计金额（小写 ）：￥0.00</span>
        </td>
        <td colspan="2">
          <span class="write"
            >是否冲借款： <input type="radio" value="是" />是
            <input type="radio" value="否" checked="checked" />否</span
          >
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <span class="title"
            >合计金额（大写）：币&nbsp;零元&nbsp;零角&nbsp;零分&nbsp;</span
          >
        </td>
        <td colspan="5">
          <span class="title">合计金额（小写 ）：￥0.00</span>
        </td>
        <td colspan="2">
          <span class="write"
            >是否冲借款： <input type="radio" value="是" />是
            <input type="radio" value="否" checked="checked" />否</span
          >
        </td>
      </tr>
      <tr>
        <td colspan="5" style="border: 0">
          <span class="write">填单人：</span><span class="text">填单人</span>
        </td>
        <td colspan="5" style="border: 0">
          <span class="write">证明人：</span
          ><span class="write">蔡其松（000）</span>
        </td>
        <td style="border: 0">
          <span class="write">填单人电话：</span><span class="text">123</span>
        </td>
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
