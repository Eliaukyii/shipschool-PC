import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'

// import axios from 'axios'

//适配
// import 'amfe-flexible'
// import 'amfe-flexible/index.js'

Vue.config.productionTip = false

//全局引入element-ui
Vue.use(ElementUI)

new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate() {
      Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
    }
}).$mount('#app')

