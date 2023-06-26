import Layout from '@/layout'

export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/user',
    name: 'System',
    meta: { title: '系统管理', icon: 'nested' },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/system/user/index'),
        meta: { title: '用户管理', icon: 'user' }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/system/role/index'),
        meta: { title: '角色管理', icon: 'role' }
      },
      // ...
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/list',
    name: 'Order',
    meta: { title: '订单管理', icon: 'order' },
    children: [
      {
        path: 'list',
        name: 'OrderList',
        component: () => import('@/views/order/list/index'),
        meta: { title: '订单列表', icon: 'list' }
      },
      {
        path: 'detail/:id',
        name: 'OrderDetail',
        component: () => import('@/views/order/detail/index'),
        meta: { title: '订单详情', icon: 'detail' },
        hidden: true
      },
      // ...
    ]
  },
  // ...
]




 <template>
   <!-- 顶部菜单 -->
   <div v-for="menu in menus" :key="menu.id" @click="handleTopMenuClick(menu)">
      {{ menu.title }}
   </div>
   <!-- 侧边栏菜单 -->
   <div v-for="item in sideMenus" :key="item.id" @click="handleSideMenuClick(item)">
      {{ item.title }}
   </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [],
      menus: [],
      sideMenus: []
    }
  },
  created() {
    // 获取路由信息
    this.routes = this.$router.options.routes
    this.menus = this.routes.filter(item => item.meta && item.meta.isTopMenu)
  },
  methods: {
    // 处理顶部菜单点击事件
    handleTopMenuClick(menu) {
      this.sideMenus = menu.children
    },
    // 处理侧边栏菜单点击事件
    handleSideMenuClick(item) {
      this.$router.push({ name: item.name })
    }
  }
}
</script>
