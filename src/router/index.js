import Vue from "vue";
import VueRouter from "vue-router";
import Login from '@/views/Login.vue'
import Reg from "@/views/Reg.vue";
import Art from "@/views/Art.vue";
import List from "@/views/List.vue";

// 注册
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Reg,
    },
    {
      path: '/art',
      component: Art,
    },
    {
      path: '/list',
      component: List,
    }
  ]
})

export default router
