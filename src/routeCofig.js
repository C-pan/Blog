import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'
import Article from './components/Article.vue'
import Login from './components/Login.vue'
import Edit from './components/Edit.vue'
// import UserLogin from './components/UserLogin.vue'
// import UserReg from './components/UserReg.vue'
// import Article from './components/Article.vue'
// 


export default[
	model:'history',
	{
		path:'/',
		redirect:'/home', //设置路由重新定向  默认跳转的路径
	},
	{
		path:'/404',
		redirect:'/home', //设置路由重新定向  默认跳转的路径
	},
	{
		path:'/home',
		component:Home
	},

	{
		path:'/follow',
		component:Follow
	},
	{
		path:'/column',
		component:Column
	},
	{
		path:'/user-info',
		component:UserInfo
	},
	{
		path:'/article/:id',
		component:Article
	},
	{
		path:'/login',
		component:Login
	},
	{
		path:'/edit',
		component:Edit
	}
]
