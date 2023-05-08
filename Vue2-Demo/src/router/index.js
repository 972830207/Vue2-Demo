/**
 * @author yc
 * @filename index.js
 * @date 2021-11-10 星期三
 * @路由文件主入口，判断是否登录 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import workbench from './workbench'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: workbench
}, )

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
    //这里验证是否登录
    if (localStorage.getItem('token')) {
        if (to.name === '/Login') {
            next({ path: '/' })
        }else {
            next()
        }
    } else {
        //没有token,则需要跳转到登录页面
        if (to.path === '/Login') {
            next()
        } else {
            next(`/Login?redirect=${to.path}`)
        }
    }
});

export default router