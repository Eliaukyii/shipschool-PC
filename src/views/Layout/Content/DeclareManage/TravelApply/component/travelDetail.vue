
<template>
  <div>
    <el-dialog title="出差人详细信息" :visible.sync="detailVisible">
      <div>
        <table style="border: 1px solid #ddd; margin: 20px" id="myTable">
          <thead>
            <tr style="text-align: left">
              <td colspan="2">
                <span style="margin-left: 5px">目的地：</span
                ><el-input
                  type="text"
                  placeholder="目的地（*必填）"
                  style="width: 66%"
                />
              </td>
              <td colspan="2">
                <span style="margin-left: 5px; margin-right: 5px"
                  >餐补类型</span
                >
                <select>
                  <option value="1">出差</option>
                  <option value="2">会议或短期培训</option>
                  <option value="3">特例</option>
                </select>
              </td>
              <td colspan="7">
                <span style="margin-left: 5px">出差日期：</span>
                <el-date-picker
                  v-model="timeSelect"
                  type="daterange"
                  :clearable="false"
                  range-separator="-"
                  start-placeholder="2021.01.01"
                  end-placeholder="2021.01.01"
                ></el-date-picker>
                <span>（ {{ day }} 天）</span>
              </td>
              <td style="text-align: center">
                <button class="btn" @click="addTr">+</button>
              </td>
            </tr>
            <tr
              style="
                font-size: 14px;
                color: #333333;
                font-weight: 600;
                background-color: #f5fafe;
              "
            >
              <td rowspan="2" style="width: 5%"></td>
              <td rowspan="2" style="width: 10%">工号</td>
              <td rowspan="2" style="width: 10%">姓名</td>
              <td rowspan="2" style="width: 5%">性别</td>
              <td rowspan="2" style="width: 10%">部门</td>
              <td rowspan="2" style="width: 5%">职称</td>
              <td rowspan="2" style="width: 5%">职务</td>
              <td
                colspan="2"
                style="width: 20%; text-align: left; padding-left: 8px"
              >
                伙食补助费<input
                  type="text"
                  style="
                    width: 110px;
                    margin-left: 8px;
                    margin-right: 8px;
                    text-align: right;
                    padding-right: 4px;
                    color: red;
                  "
                />元
              </td>
              <td
                colspan="2"
                style="width: 20%; text-align: left; padding-left: 8px"
              >
                交通补助费<input
                  type="text"
                  style="
                    width: 110px;
                    margin-left: 8px;
                    margin-right: 8px;
                    text-align: right;
                    padding-right: 4px;
                    color: red;
                  "
                />元
              </td>
              <td rowspan="2" style="width: 5%"></td>
            </tr>
            <tr
              style="
                font-size: 14px;
                color: #333333;
                font-weight: 600;
                background-color: #f5fafe;
              "
            >
              <td>补助天数</td>
              <td>金额</td>
              <td>补助天数</td>
              <td>金额</td>
            </tr>
          </thead>
          <tr id="Tr">
            <td>1</td>
            <td></td>
            <td>
              <input type="text" @click="handleClick" />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <input type="text" />
            </td>
            <td></td>
            <td>
              <input type="text" />
            </td>
            <td></td>
            <td>
              <el-button
                size="mini"
                class="el-icon-delete"
                style="background-color: #e6e6e6"
                @click="deleteRow()"
              ></el-button>
            </td>
          </tr>
          <tfoot>
            <tr>
              <td></td>
              <td>合计：</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>0.00</td>
              <td></td>
              <td>0.00</td>
              <td></td>
            </tr>
            <tr>
              <td colspan="13">
                <div style="padding: 4px">
                  <el-button type="primary" size="mini"
                    >保存出差人信息</el-button
                  >
                  <el-button type="danger" size="mini">关闭</el-button>
                </div>
              </td>
            </tr>
            <tr>
              <td
                colspan="13"
                style="
                  text-align: left;
                  padding: 8px;
                  color: red;
                  line-height: 20px;
                "
              >
                ①出差：伙食补助费按出差自然（日历）天数计算，按规定标准包干使用，出差人员的伙食补助费，每人每天根据目的地、天数、参照表1、区域住宿标准和伙食补助标准表计算。
                <br />
                ②会议或短期培训：到基层单位锻炼、支援工作或到外地参加各种学习班、研讨班、培训班学习时间超过10天以上、一年以内的伙食补助费每人每天分别为：3个月以内10元；3个月至6个月9元；6个月以上8元。
                <br />
                ③特例计算：出差人员应当自行用餐，如由接待单位统一安排伙食的，不再领取伙食补助费。
              </td>
            </tr>
          </tfoot>
        </table>
        <selectUser v-if="Visiable" ref="dialog"></selectUser>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { DeptList } from "@/api/systemManage.js";
import selectUser from "@/views/common/selectUser.vue";
export default {
  data() {
    return {
      detailVisible: false,
      timeSelect: [],
      Visiable: false,
      startDay: "",
      endDay: "",
      day: 0,
    };
  },
  watch: {
    timeSelect(val) {
      if (val) {
        if (val.length > 0) {
          let endDate = new Date(val[1]);
          let startDate = new Date(val[0]);
          //两个日期不允许跨年
          let sameYear =
            startDate.getFullYear() == endDate.getFullYear() ? true : false;
          if (sameYear) {
            this.startDay = val[0];
            this.endDay = val[1];

            //计算选择日期范围的天数
            let stopDays = parseInt(
              Math.abs(endDate - startDate) / (24 * 3600 * 1000)
            );
            this.day = stopDays + 1;
          } else {
            this.timeSelect = []; //清空日期
            this.$notify({
              title: "日期不允许跨年",
              type: "warning",
              duration: 2500,
            });
          }
        }
      } else {
        this.startDay = null;
        this.endDay = null;
      }
    },
  },
  created() {
    DeptList().then((res) => {
      this.list = res.data.list;
    });
  },
  methods: {
    detail() {
      this.detailVisible = true;
    },
    handleClick(data) {
      this.Visiable = true;
      this.$nextTick(() => {
        this.$refs.dialog.init(data);
      });
    },
    //点击增加行数
    addTr() {
      var table = document.getElementById("myTable");
      //获取要复制的行
      var rowToCopy = table.rows[3];
      //复制该行并将其添加到第四行后面
      var newRow = table.insertRow(4);
      for (var i = 0, cell; (cell = rowToCopy.cells[i]); i++) {
        var newCell = newRow.insertCell(i);
        newCell.innerHTML = cell.innerHTML;
        newCell.style["border"] = "1px solid #ccc";
        newCell.style["text-align"] = "center";
      }
    },

    //删除当前行
    deleteRow() {
      var table = document.getElementById("myTable");
      var rowToDelete = table.rows[3];
      rowToDelete.onclick=function(){
        console.log('1111');
      }
    },
  },
  components: {
    selectUser,
  },
};
</script>

<style lang="less" scoped>
//设置弹框样式
/deep/ .el-dialog {
  width: 1200px;
}
/deep/ .el-dialog__body {
  padding: 0;
}
/deep/ .el-dialog__header {
  background-color: #2d6dcc;
}
/deep/ .el-dialog__title {
  color: #fff;
}
/deep/ .el-dialog__headerbtn .el-dialog__close {
  color: #fff;
}

//修改时间选择器样式
// /deep/ .el-date-editor .el-range-input {
//   width: 22%;
//   margin-top: 10px;
// }
// /deep/ .el-range-editor.el-input__inner {
//   padding: 0;
// }
// /deep/ .el-date-editor .el-range-separator {
//   height: 40px;
//   line-height: 40px;
// }
/deep/ .el-icon-date:before {
  content: none;
}
table {
  line-height: 42px;
  tr {
    text-align: center;
    td {
      border: 1px solid #ccc;
      width: 150px;
      vertical-align: middle;
      .btn {
        background-color: #3bb4f2;
        border: none;
        color: #fff;
        width: 38px;
        height: 31px;
        border-radius: 5px;
        font-size: 20px;
      }
      input {
        border: none;
        outline: none;
        border: 1px solid #ddd;
        width: 84%;
        height: 28px;
      }
      select {
        border: 1px solid #ccc;
        outline: none;
        width: 70px;
        height: 30px;
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
</style>
