<template>
  <div>
    登录页面 -- {{ $route.query.name }}
  </div>
</template>

<script>
export default {
  mounted() {
    // 获取当前的路由信息对象的
    console.log(this.$route.query)
    // this.$router
  }
}
</script>

<style scoped>

</style>
