import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
return originalPush.call(this, location).catch((err) => err);
};

const routes = [{
        path: '/',
        component: () => import('../views/Main.vue'),
        name: '首页',
        redirect: '/login',
        children: [{
                path: 'home',
                name: 'Home',
                component: () => import('../views/Home.vue'),
            },
            // 申报管理
            {
                name: '日常报销申请',
                path: '/Office/FR_approvlsheet/CustomeApprovlsheet_List.aspx',
                component: () => import('@/views/Layout/Content/DeclareManage/DailyApply/component/Rcbx.vue'),
            },
            {
                name: '差旅报销申请',
                path: '/Office/FR_approvlsheet_Travel/CustomTravel_List.aspx',
                component: () => import('@/views/Layout/Content/DeclareManage/TravelApply/component/Clbx.vue'),
            },
            {
                name: '个人借支申请',
                path: '/Office/FR_Anysingle/CustomAnysingle_List.aspx',
                component: () => import('@/views/Layout/Content/DeclareManage/DebitApply/component/Jkbx.vue'),
            },
            {
                name: '往来付款申请',
                path: '/Office/FR_CurrentPayment/CustomCurrentPayment_List.aspx',
                component: () => import('@/views/Layout/Content/DeclareManage/PaymentApply/component/Wlfk.vue'),
            },
            {
                name: '日常报销单详情',
                path: '/rcDetail',
                component: () => import('@/views/Layout/Content/DeclareManage/DailyApply/component/Details.vue'),
            },
            {
                name: '差旅报销单详情',
                path: '/clDetail',
                component: () => import('@/views/Layout/Content/DeclareManage/TravelApply/component/Detail.vue'),
            },
            {
                name: '借支报销单详情',
                path: '/jzDetail',
                component: () => import('@/views/Layout/Content/DeclareManage/DebitApply/component/Detail.vue'),
            },
            {
                name: '往来报销单详情',
                path: '/wlDetail',
                component: () => import('@/views/Layout/Content/DeclareManage/PaymentApply/component/Detail.vue'),
            },


            //审批管理
            {
                name: '日常报销审批',
                path: '/CustomApprovlsheet_SP',
                component: () => import('@/views/Layout/Content/ApprovalManage/DailySP/index.vue'),
            },
            {
                name: '差旅报销审批',
                path: '/ApprovalTravel_SP',
                component: () => import('@/views/Layout/Content/ApprovalManage/TravelSP/index.vue'),
            },
            {
                name: '个人借支审批',
                path: '/CustomAnysingle_SP',
                component: () => import('@/views/Layout/Content/ApprovalManage/DebitSP/index.vue'),
            },
            {
                name: '往来付款审批',
                path: '/8cca0fea-84fc-4427-ac34-ba47154d5c80',
                component: () => import('@/views/Layout/Content/ApprovalManage/PaymentSP/index.vue'),
            },

            {
                name: '日常报销单审批',
                path: '/rcbxsp',
                component: () => import('@/views/Layout/Content/ApprovalManage/DailySP/dailySp.vue'),
            },
            {
                name: '差旅报销单审批',
                path: '/clbxsp',
                component: () => import('@/views/Layout/Content/ApprovalManage/TravelSP/travelSp.vue'),
            },
            {
                name: 'StepPage',
                path: '/StepPage',
                component: () => import('@/views/Layout/Content/DeclareManage/DailyApply/StepPage.vue'), //步骤条
            },
            {
                name: '摘要管理',
                path: '/zygl',
                component: () => import('@/views/Layout/Content/DeclareManage/DailyApply/component/Zygl.vue') //摘要管理
            },

    //系统管理
            {
                name: '岗位变更',
                path: '/Frames/Admin/Admin_Change.aspx',
                component: () => import('@/views/Layout/Content/SystemManage/Qxgl/gwbg.vue')
            },
            {
                name: '部门管理',
                path: '/Frames/Admin/Admin_Organization.aspx',
                component: () => import('@/views/Layout/Content/SystemManage/Qxgl/bmgl.vue')
            },
            {
                name: '用户管理',
                path: '/Frames/admin/Admin_List.aspx',
                component: () => import('@/views/Layout/Content/SystemManage/Qxgl/yhgl.vue')
            },
            {
                name: '角色列表',
                path: '/Frames/admin/Admin_Role.aspx',
                component: () => import('@/views/Layout/Content/SystemManage/Qxgl/jslb.vue')
            },
            {
                name: '角色权限',
                path: '/Frames/Admin/Admin_Role_Power.aspx?action=RoleList',
                component: () => import('@/views/Layout/Content/SystemManage/Qxgl/jsqx.vue')
            },
            {
                name: '人员类别',
                path: '/Office/C_Category/C_Category_List.aspx',
                component: () => import('@/views/Layout/Content/SystemManage/Ryda/rylb.vue')
            },
            {
                name: '部门管理',
                path: '/Office/C_Dept/C_Dept_Tree.aspx',
                component: () => import('@/views/Layout/Content/SystemManage/Ryda/bmgl.vue')
            },
            {
                name: '人员管理',
                path: '/Office/Employee/Employee_List.aspx',
                component: () => import('@/views/Layout/Content/SystemManage/Ryda/rygl.vue')
            },
            {
                name: '工资账户',
                path: '/Office/PayAccount/PayAccount_List.aspx',
                component: () => import('@/views/Layout/Content/SystemManage/Ryda/gzzh.vue')
            },
            {
                name: '报销账户',
                path: '/Office/AccountBank/AccountBank_List.aspx',
                component: () => import('@/views/Layout/Content/SystemManage/Ryda/bxzh.vue')
            },
            {
                name: '菜单栏目',
                path: '/Frames/SysSetting/System_Menu.aspx',
                component: () => import('@/views/Layout/Content/SystemManage/SystemSet/cdlm.vue')
            },
            {
                name: '按钮属性',
                path: '/Frames/SysSetting/System_Button.aspx',
                component: () => import('@/views/Layout/Content/SystemManage/SystemSet/btnType.vue')
            },

            
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
    }

]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router