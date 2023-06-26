<template>
  <div>
    <p class="text">武汉船舶职业技术学院差旅费报销单</p>
    <table style="margin: 0 auto; width: 80%">
      <tbody>
        <tr>
          <td colspan="6" style="border: 0"><span>&nbsp;</span></td>
          <td colspan="5" style="border: 0">
            <span>报销日期：2022-11-14</span>
          </td>
          <td colspan="1" style="border: 0"><span>附件数：0张</span></td>
        </tr>
        <tr>
          <td colspan="2">
            <span class="title">部门：</span>
            <el-select
              v-model="selectDept"
              placeholder="选择部门"
              style="width: 77%"
            >
              <el-option
                v-for="(item, index) in list"
                :key="index"
                :label="item.DeptName"
                :value="item.DeptCode"
              ></el-option>
            </el-select>
          </td>
          <td colspan="5">
            <span class="title">出差人（职务及职称）：</span>
            <span class="text" @click="selectTraveler">选择出差人</span>
          </td>
          <td colspan="5">
            <span class="title">经费来源：</span>
            <span class="text">经费来源</span>
            <span>&nbsp;</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <span class="title">目的地：</span><span class="text">目的地</span>
          </td>
          <td colspan="5">
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
      </tbody>
    </table>
    <travelDetail v-if="Visiable" ref="dialog"></travelDetail>
  </div>
</template>

<script>
import { DeptList } from "@/api/systemManage.js";
import travelDetail from "../component/travelDetail.vue";

export default {
  data() {
    return {
      selectDept: "",
      list: [],
      Visiable: false,
    };
  },
  created() {
    DeptList().then((res) => {
      this.list = res.data.list;
    });
  },
  methods: {
    next() {
      this.active++;
    },
    selectTraveler() {
      this.Visiable=true;
      this.$nextTick(()=>{
        this.$refs.dialog.detail()
      })

    },
  },
  components: {
    travelDetail,
  },
};
</script>

<style lang="less" scoped>

/deep/ .el-input__inner {
  border: 0;
}
/deep/ .el-select .el-input .el-select__caret {
  color: #fff;
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
    tr {
      td {
        border: 1px solid #ccc;
        height: 42px;
        width: 400px;
        select {
          border: 1px solid #ccc;
          width: 90%;
          height: 90%;
        }
        option {
          text-align: center;
        }
        .title {
          font-size: 14px;
          color: #333333;
          font-weight: 600;
          padding-left: 5px;
        }
        .text {
          color: #999999;
          font-size: 14px;
        }
        .write {
          font-size: 14px;
        }
        .hight {
          color: #0000ff;
          font-size: 14px;
        }
      }
    }
  }
  .bottom {
    padding-top: 10px;
    display: flex;
    justify-content: center;
  }

</style>
