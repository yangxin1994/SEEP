import Vue from 'vue'
import Router from 'vue-router'

// 登录页
import Login from './views/login'
// 主页
import Index from './views/index'
//404
import NotFoundComponent from './views/404'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: "登录",
      component: Login
    },
    {
      path: '/',
      component: Index,
      name: '其他',
      children: [
        {path: '/404', component: NotFoundComponent}
      ]
    },
    {
     path: '/',
     name: '主页',
     component: Index,
     children: [
      //{path: "/orgPage/user-main", component: Test, name: '用户权限'},
      //{path: "/user/roleMenu", component: resolve => require([`@/components/user/roleMenu.vue`], resolve), name: '用户权限'}
     ]
    }
  ]
})

router.beforeEach((to, form, next) => {
	if(to.path == "/login"){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("menu");
  } else {
    let user = sessionStorage.getItem("user");
    //登录验证
    if(!user){
      next({ path: "/login" });
    } else {
      let menu = sessionStorage.getItem("menu");
      if(!menu){
        //创建动态路由
        //findmenu().then(req => {
        //	menu = formatMenu(req.data);
        //	router.addRoutes(menu);
        //	router.options.routes = menu;
        //});
        //router.options.routes = menu;
      } else {
        next({ ...to, replace: true });
      }
    }
  }
  next()
})

export default router