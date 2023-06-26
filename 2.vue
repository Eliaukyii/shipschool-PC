// 顶部导航菜单配置
export const menuList = [
  {
    path: '/home',
    name: 'home',
    title: '首页'
  },
  {
    path: '/product',
    name: 'product',
    title: '产品',
    children: [
      {
        path: '/product/list',
        name: 'productList',
        title: '产品列表'
      },
      {
        path: '/product/add',
        name: 'productAdd',
        title: '添加产品'
      },
      {
        path: '/product/edit/:id',
        name: 'productEdit',
        title: '编辑产品'
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    title: '订单',
    children: [
      {
        path: '/order/list',
        name: 'orderList',
        title: '订单列表'
      },
      {
        path: '/order/detail/:id',
        name: 'orderDetail',
        title: '订单详情'
      }
    ]
  },
  // 其他顶部导航菜单配置
]

// 路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home' // 默认首页
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/product/list',
      name: 'productList',
      component: ProductList
    },
    {
      path: '/product/add',
      name: 'productAdd',
      component: ProductAdd
    },
    {
      path: '/product/edit/:id',
      name: 'productEdit',
      component: ProductEdit
    },
    {
      path: '/order/list',
      name: 'orderList',
      component: OrderList
    },
    {
      path: '/order/detail/:id',
      name: 'orderDetail',
      component: OrderDetail
    },
    // 其他路由配置
    {
      path: '*',
      component: NotFound
    }
  ]
})

// 监听路由变化
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    // 判断用户是否已登录
    const isLogin = sessionStorage.getItem('isLogin')
    if (!isLogin) {
      next({path: '/login'})
    } else {
      next()
    }
  }
})

export default router
