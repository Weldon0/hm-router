<template>
  <div>
    <div>
      <router-link tag="div" to="/login?name=黑马">
        登录
      </router-link>
      <router-link tag="span" to="/register">
        注册
      </router-link>
      <router-link to="/art">
        文章详情
      </router-link>
      <router-link to="/list">
        文章列表
      </router-link>
    </div>
    <hr>
    <!--路由出口：指定组件展示的地方-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.router-link-exact-active {
  color: red;
}
</style>
