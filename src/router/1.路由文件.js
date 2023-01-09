import Vue from "vue";

// 引入vueRouter
import VueRouter from "vue-router";

/**
 * 引入页面组件
 */
import My from "@/views/My.vue";
import Find from "@/views/Find.vue";
import Friend from "@/views/Friend.vue";

/**
 * 注册vueRouter
 */
Vue.use(VueRouter)

// 配置路由规则
const router = new VueRouter({
  // 修改模糊匹配的类名 和精确匹配命中的类名
  linkActiveClass: '模糊匹配',
  linkExactActiveClass: '精确匹配',
  routes: [
    {
      path: '/',
      component: Find
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/part',
      component: Friend
    }
  ]
})
// 配置好的路由规则进行导出【主入口里面需要注入到new Vue,所以需要进行导出】
export default router
