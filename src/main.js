import Vue from 'vue'
import App from './App.vue'
require('./assets/css/base.css');//全局引入css 
require('./assets/js/font.js');
require('./assets/css/index.css');
import VueRouter from 'vue-router'
import routes from './routeCofig.js'


//使用 axios
import axios from 'axios' //做数据请求和交互
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了



// 使用自定义的过滤器filter
import filters from './filters'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))



// 引入store 文件夹栏目的index
import store from './store/index.js'
// 使用router 
Vue.use(VueRouter);

const router=new VueRouter({
	mode:'history',      //切换路径模式，变成history模式  去掉默认的/#
	routes              //使用routes配置文件
});



new Vue({
  el: '#app',
  router,       //使用routes配置文件
  store,
  render: h => h(App)
})
