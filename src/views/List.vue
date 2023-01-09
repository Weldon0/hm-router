<template>
  <div>
    <NumItem v-for="item in list" :key="item.id"/>
  </div>
</template>

<script>
import NumItem from "@/components/NumItem.vue";

export default {
  components: {NumItem},
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.list = Array(10).fill('').map((item, index) => ({
      num1: Math.floor(Math.random() * 10),
      num2: Math.floor(Math.random() * 10),
      result: '',
      status: 0,
      id: index
    }))
  },
}
</script>

<style scoped>

</style>
