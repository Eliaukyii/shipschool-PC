<template>
  <div class="wrap">
    <div class="content">
      <div class="box">
        <div
          class="tabList"
          v-for="(item, index) in imgLists"
          :key="index"
          :style="{ 'background-image': 'url(' + item.img + ')' }"
        >
          <p class="report">{{ item.text }}</p>
          <p class="num">{{ item.number }}</p>
          <p class="tab">
            <span class="back">退回 {{ item.back }}</span>
            <span class="pending">进行中 {{ item.pending }}</span>
            <span class="pass">审核通过 {{ item.pass }}</span>
          </p>
        </div>
      </div>
      <el-row>
        <el-col :span="16" style="padding-right: 16px">
          <!-- 常用菜单 -->
          <div class="text">
            <span class="left">常用菜单</span><span class="right">设置</span>
          </div>
          <el-card>
            <div class="navbar-list">
              <ul>
                <li v-for="(item, index) in menuLists" :key="index">
                  <img :src="item.image" alt="" />
                  <p>{{ item.name }}</p>
                </li>
              </ul>
            </div>
          </el-card>
          <!-- 我的待办 -->
          <div class="text">
            <span class="left">我的待办</span
            ><span class="right">查看全部</span>
          </div>
          <el-card>
            <el-table :data="list4" style="width: 100%">
              <el-table-column
                label="申报类型"
                prop="PFI_Type"
                align="center"
              ></el-table-column>
              <el-table-column
                label="申请日期"
                prop="CreateDateStr"
                align="center"
              ></el-table-column>
              <el-table-column
                label="申请人"
                prop="PFI_UserID"
                align="center"
              ></el-table-column>
              <el-table-column
                label="单号"
                prop="PFI_Name"
                align="center"
              ></el-table-column>
              <el-table-column
                label="申请金额"
                prop="AI_Status"
                align="center"
              ></el-table-column>
              <el-table-column label="摘要" prop="status" align="center">
                <template slot-scope="scope">
                  <div v-html="scope.row.status"></div>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                fixed="right"
                width="80"
                align="center"
              >
                <template>
                  <el-button type="text" size="small">审核</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="8">
          <!-- 政策信息 -->
          <div class="text">
            <span class="left">政策信息</span>
            <span class="right">查看全部</span>
          </div>
          <el-card style="margin-bottom: 52px">
            <el-table
              :data="list3"
              height="250"
              style="width: 100%"
              :show-header="false"
            >
              <el-table-column prop="Froms" width="120">
                <template slot-scope="scope">
                  <span
                    v-if="scope.row.Froms === '计划财务处'"
                    style="color: #2d6dcc; background: #eff5ff; padding: 8px"
                    >计划财务处</span
                  >
                  <span
                    v-if="scope.row.Froms === '学院文件'"
                    style="color: #2d6dcc; background: #eff5ff; padding: 8px"
                    >学院文件</span
                  >
                  <span
                    v-if="scope.row.Froms === '计财处'"
                    style="color: #2d6dcc; background: #eff5ff; padding: 8px"
                    >计财处</span
                  >
                  <span
                    v-if="scope.row.Froms === '党办'"
                    style="color: #2d6dcc; background: #eff5ff; padding: 8px"
                    >党办</span
                  >
                </template>
              </el-table-column>
              <el-table-column prop="Titles" :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column
                align="right">
              <template slot-scope="scope">
                <span>{{moment(scope.row.CreateDate).format('YYYY-MM-DD HH:mm:ss')}}</span>
              </template>
              </el-table-column>
            </el-table>
          </el-card>
          <!-- 消息通知 -->
          <div class="text" style="margin-top: -22px">
            <span class="left">消息通知</span>
            <span class="right">查看全部</span>
          </div>
          <el-card>
            <el-table
              :data="list2"
              style="width: 100%"
              :show-header="false"
              @row-click="rowClick"
            >
              <el-table-column prop="Titles"> </el-table-column>
              <el-table-column
                align="right"
              >
              <template slot-scope="scope">
                <span>{{moment(scope.row.CreateDate).format('YYYY-MM-DD HH:mm:ss')}}</span>
              </template>
              </el-table-column>
            </el-table>
            <notice ref="child"></notice>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { WelComeFunc } from "@/api/index.js";

import notice from "./common/notice.vue";
import moment from 'moment'
export default {
  data() {
    return {
      menuLists: [
        {
          name: "差旅报销",
          image: require("@/assets/images/main/menus/常用菜单图标1.png"),
        },
        {
          name: "报销申请",
          image: require("@/assets/images/main/menus/常用菜单图标2.png"),
        },
        {
          name: "借款申请",
          image: require("@/assets/images/main/menus/常用菜单图标3.png"),
        },
        {
          name: "付款申报",
          image: require("@/assets/images/main/menus/常用菜单图标4.png"),
        },
        {
          name: "查询",
          image: require("@/assets/images/main/menus/常用菜单图标5.png"),
        },
        {
          name: "其它",
          image: require("@/assets/images/main/menus/常用菜单图标6.png"),
        },
      ],
      tableDate: [],
      list2: [], //消息通知
      list3: [], //政策信息
      list4: [], //待办事项
      imgLists: [
        {
          text: "日常报销",
          number: "30",
          img: require("@/assets/images/main/蓝色.png"),
          back: "5",
          pending: "20",
          pass: "5",
        },
        {
          text: "差旅报销",
          number: "120",
          img: require("@/assets/images/main/红色.png"),
          back: "5",
          pending: "20",
          pass: "95",
        },
        {
          text: "借款申请",
          number: "120000",
          img: require("@/assets/images/main/紫色.png"),
          back: "5",
          pending: "20",
          pass: "95",
        },
        {
          text: "付款申报",
          number: "30",
          img: require("@/assets/images/main/蓝色.png"),
          back: "5",
          pending: "20",
          pass: "95",
        },
        {
          text: "报销申报",
          number: "30",
          img: require("@/assets/images/main/红色.png"),
          back: "5",
          pending: "20",
          pass: "5",
        },
      ],
      tableHeader: [
        {
          label: "申报类型",
          value: "type",
        },
        {
          label: "申请日期",
          value: "date",
        },
        {
          label: "申请人",
          value: "name",
        },
        {
          label: "单号",
          value: "number",
        },
        {
          label: "申请金额",
          value: "money",
        },
        {
          label: "摘要",
          value: "desc",
        },
      ],
      active: "",
      Titles: "",
      CreateDate: [],
      toDoData: {
        active: "List4",
      },
    };
  },
  components: {
    notice,
  },
  created() {
    
  },
  mounted() {
    this.getToDo();
    this.getInfo({
      active: "List2",
    });
    this.getPolicy({
      active: "List3",
    });
  },
  methods: {
    moment,
    rowClick(row) {
      // console.log(row.Contents);
      this.$refs.child.rowClick(row.Contents);
    },
    // 时间格式化
    // formatTime(row, column) {
    //   let data = row[column.property];
    //   let dtime = new Date(data);
    //   const year = dtime.getFullYear();
    //   let month = dtime.getMonth() + 1;
    //   if (month < 10) {
    //     month = "0" + month;
    //   }
    //   let day = dtime.getDate();
    //   if (day < 10) {
    //     day = "0" + day;
    //   }
    //   return year + "-" + month + "-" + day;
    // },

    // 政策信息
    getPolicy(data) {
      WelComeFunc(data).then((res) => {
        if (res.status == 200) {
          this.list3 = JSON.parse(res.data.list);
        }
      });
    },

    // 消息通知
    getInfo(data) {
      WelComeFunc(data).then((res) => {
        if (res.status == 200) {
          this.list2 = JSON.parse(res.data.list);
        }
      });
    },

    // 待办
    getToDo() {
      WelComeFunc({ ...this.toDoData }).then((res) => {
        if (res.status == 200) {
          let list = JSON.parse(res.data.list);
          this.list4 = JSON.parse(list.msg);
        }
      });
    },
  },
};
</script>

<style lang='less' scoped>
.wrap {
  margin-top: 5px;
  background-color: #fff;
  margin-left: -8px;
  .content {
    padding: 16px;
    .box {
      display: flex;
      justify-content: space-around;
      .tabList {
        width: 268px;
        height: 138px;
        color: #fff;
        text-align: center;
        float: left;
        margin-right: 16px;
        .report {
          font-size: 14px;
          padding-top: 24px;
        }
        .num {
          font-size: 32px;
          padding-top: 15px;
        }
        .tab {
          font-size: 12px;
          padding-top: 25px;
          .back {
            float: left;
            padding-left: 16px;
          }
          .pass {
            float: right;
            padding-right: 12px;
          }
        }
      }
    }

    .text {
      margin-bottom: 12px;
      margin-top: 22px;
      .left {
        font-size: 16px;
        font-weight: 600;
      }
      .right {
        float: right;
        color: #999;
        font-size: 12px;
      }
    }
    .navbar-list {
      ul {
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        li {
          float: left;
          img {
            margin: 0 auto;
            display: block;
          }
          p {
            text-align: center;
            margin-top: 16px;
          }
        }
      }
    }
  }
}
//设置标题行(th)的字体属性；
::v-deep .el-table th > .cell {
  color: #333333;
  font-size: 12px;
}
//去除表头的下标线；
/deep/.el-table th.is-leaf {
  border-bottom: none;
}
//去除表格的最下边框线；
.el-table::before {
  height: 0;
}

//去除表格每一行的下标线；
/deep/.el-table td {
  border-bottom: none;
}
//设置表格每一行悬停的背景色
/deep/.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #f3f9ff;
  color: #2d6dcc;
  cursor: pointer;
}

/deep/.el-table td.el-table__cell {
  border-bottom: 0;
}

/deep/.el-table th.el-table__cell.is-leaf {
  border-bottom: 0;
}
</style>
