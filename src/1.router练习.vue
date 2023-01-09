<template>
  <div>
    <div class="footer_wrap">
      <!--<a href="#/find">发现音乐</a>-->
      <!--<a href="#/my">我的音乐</a>-->
      <!--<a href="#/part">朋友</a>-->

      <router-link to="/">发现音乐</router-link>
      <router-link to="/a">发现音乐</router-link>
      <router-link to="/a/b">发现音乐</router-link>
      <router-link to="/a/b/c">我的音乐</router-link>
      <router-link to="/a/b/c/d/e/f/e">朋友</router-link>
    </div>
    <div class="top">
      <!-- 指定一个路由出口，告诉vue当路由命中的时候，对应的组件展示在什么地方-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

/**
 * 如果路由被命中了，当前router-link对应的a标签上会出现两个类名，router-link-active  router-link-exact-active(精确匹配)
 * 只要设置router-link-active的样式，即可实现高亮效果
 */
export default {};
</script>

<style scoped>
.精确匹配 {
  background: rgb(85, 85, 85) !important;
}
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}

.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}

.footer_wrap a:hover {
  background-color: #555;
}

.top {
  padding-top: 62px;
}
</style>
