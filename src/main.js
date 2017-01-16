/*
import Vue from 'vue'
import App from './App'

/!* eslint-disable no-new *!/
new Vue({
  el: 'body',
  components: { App }
})
*/
//这种直接import，就是直接调用或引入样式
import './mock/app_mock'
import './common/stylus/index.styl'
//下面import。。。from。。。是ES6模块化使用
import Vue from 'vue'
// 引入插件
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

// 引入组件
import App from  './App'
import goods from './components/goods/goods'
import ratings from './components/ratings/'
import seller from './components/seller/seller'

//使用插件
Vue.use(VueResource)
Vue.use(VueRouter)

//创建路由器对象
const router = new VueRouter({
  linkActiveClass: 'active'
});
// 映射路由
router.map({
  '/goods':{
    component: goods
  },
  '/ratings':{
    component:ratings
  },
  '/seller':{
    component:seller
  }
})

//启动路由
const app = Vue.extend(App)
router.start(app,'#app')
//默认请求路由
router.go('/goods')

new  Vue({
  el:'body',
  components: {App} ,
  created(){
    this.$http.get('/api/ratings').then(
      (response) =>{

        console.log(JSON.parse(response.body))

      }
    )
  }
})


