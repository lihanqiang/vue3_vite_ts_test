import {createRouter, createWebHistory} from 'vue-router'
const history = createWebHistory()
import Home from '/@/views/Home/index.vue'
import Page404 from '/@/views/404/index.vue'
const constantRoutes: any[] = [
	{
		name: '/',
		path: '/',
		redirect: '/home'
	},
	{
		name: 'home',
		path: '/home',
		component: Home
	},
	{
		name: '404',
		path: '/404',
		component: Page404
	}
]
const errorRotes: any[] = [
	{
		name: 'notFound',
		path: '/:pathMatch(.*)*',
		redirect: '/404'
	}
]
export const router = createRouter({
  history,
  routes: [...constantRoutes, ...errorRotes]
})

// 路由钩子
router.afterEach(() => {
  console.log('路由切换了')
})