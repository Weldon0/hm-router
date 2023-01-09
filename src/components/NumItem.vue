<template>
  <div class="subject">
    <span></span>
    <span>+</span>
    <span></span>
    <span>=</span>
    <input type="number" />
    <button>提交</button>
  </div>
</template>

<script>
export default {
  name: 'NumItem'
};
</script>

<style scoped>
.subject {
  margin: 5px;
  padding: 5px;
  font-size: 20px;
}
.subject span {
  display: inline-block;
  text-align: center;
  width: 20px;
}
.subject input {
  width: 50px;
  height: 20px;
}
</style>
