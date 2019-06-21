import Vue from 'vue'
import App from './App.vue'
import router from './router.ts'
import store from './store'
import axios from 'axios'

// element-ui
import ElementUi from 'element-ui'
Vue.use(ElementUi)
import 'element-ui/lib/theme-chalk/index.css'
// element-ui 拓展组件树形下拉
import './components/elementui/selectTree.vue'
// google字体图标库
import 'material-icons/iconfont/material-icons.css'
// 基础样式
import './assets/css/base.css'
// 组件覆盖样式
import './assets/css/common.css'
//工具类
import './assets/script/toolsUtil'

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
