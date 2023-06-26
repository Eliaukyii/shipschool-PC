import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

//菜单路由
export const menuList = [{
        path: '/declare',
        name: 'Declare',
        title: '申报管理',
        children: [{
                path: '/declare/daily',
                name: 'DailyApply',
                title: '日常报销申请'
            },
            {
                path: '/declare/travel',
                name: 'TravelApply',
                title: '差旅报销申请'
            },
            {
                path: '/declare/borrow',
                name: 'BorrowApply',
                title: '个人借支申请'
            },
            {
                path: '/declare/payment',
                name: 'PaymentApply',
                title: '往来付款申请'
            }
        ]
    },
    {
        path: '/approval',
        name: 'Approval',
        title: '审批管理',
        children: [{
                path: '/approval/daily',
                name: 'DailyApproval',
                title: '日常报销审批'
            },
            {
                path: '/approval/travel',
                name: 'TravelApproval',
                title: '差旅报销审批'
            },
            {
                path: '/approval/borrow',
                name: 'BorrowApproval',
                title: '个人借支审批'
            },
            {
                path: '/approval/payment',
                name: 'PaymentApproval',
                title: '往来付款审批'
            }
        ]
    },
    {
        path: '/query',
        name: 'Query',
        title: '综合查询',
        children: [{
            path: '/query/allot',
            name: 'AllotQuery',
            title: '预算分配查询'
        },
        {
            path: '/query/delegate',
            name: 'DelegateQuery',
            title: '预算下发查询'
        },
        {
            path: '/query/sumList',
            name: 'SumListQuery',
            title: '部门余额列表'
        },
        {
            path: '/query/expense',
            name: 'ExpenseQuery',
            title: '个人经费查询'
        },
        {
            path: '/query/detail',
            name: 'DetailQuery',
            title: '项目明细列表'
        }
    ]
    },
    {
        path: '/analysis',
        name: 'Analysis',
        title: '统计分析',
        children: [{
            path: '/analysis/calculate',
            name: 'CalculateAnalysis',
            title: '预算分配统计表'
        },
        {
            path: '/analysis/execute',
            name: 'ExecuteAnalysis',
            title: '预算分配执行表'
        },
        {
            path: '/analysis/compare',
            name: 'CompareAnalysis',
            title: '财务项目对比表'
        },
        {
            path: '/analysis/pay',
            name: 'PayAnalysis',
            title: '支付信息统计'
        }
    ]
    },
    {
        path: '/budget',
        name: 'Budget',
        title: '预算管理',
        children: [{
            path: '/budget/year',
            name: 'YearBudget',
            title: '项目年度预算'
        },
        {
            path: '/budget/allot',
            name: 'AllotBudget',
            title: '预算分配管理'
        },
        {
            path: '/budget/apply',
            name: 'ApplyBudget',
            title: '预算下发申请'
        },
        {
            path: '/budget/approval',
            name: 'ApprovalBudget',
            title: '预算下发审批'
        }
    ]
    },
    {
        path: '/system',
        name: 'System',
        title: '系统管理',
        children: [{
                path: '/system/function',
                name: 'SystemFunction',
                title: '管理功能'
            },
            {
                path: '/system/set',
                name: 'SystemSet',
                title: '系统设置'
            },
            {
                path: '/system/manage',
                name: 'SystemManage',
                title: '系统管理'
            },
            {
                path: '/system/process',
                name: 'SystemProcess',
                title: '流程管理'
            },
            {
                path: '/system/file',
                name: 'SystemFile',
                title: '人员档案'
            },
            {
                path: '/system/limit',
                name: 'SystemLimit',
                title: '权限管理'
            },
            {
                path: '/system/code',
                name: 'SystemCode',
                title: '分类代码'
            },
        ]
    },
]

const router = new VueRouter({
    routes: [
      {
        path: '/',
        redirect: '/home' // 默认首页
      },
    ]
})
// 监听路由变化
// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//       next()
//     } else {
//       // 判断用户是否已登录
//       const isLogin = sessionStorage.getItem('isLogin')
//       if (!isLogin) {
//         next({path: '/login'})
//       } else {
//         next()
//       }
//     }
//   })
export default router