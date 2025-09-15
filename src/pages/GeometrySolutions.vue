<template>
  <div class="solution-items">
    <div  class="solution-items__item" v-for="item in data">
      <h3 class="solution-items__number" >{{item.task}})</h3>
      <img
          :src="item.solution">
    </div>
  </div>
</template>

<script setup>

import { computed } from "vue";

const getImageUrl = (imageName) => {
  return new URL(`../assets/solutions/geometry/${imageName}`, import.meta.url).href
}

const data = computed(() => {
  return new Array(367).fill(0).map((item, i) => {

    let index = i + 1

    return {
      task: index,
      solution: getImageUrl(`8-geometriya-ag-merzlyak-vb-polonskij-ms-yakir-2021--1-chotirikutniki-${index}.jpg`),
      // solution: `https://vshkole.com/web/images/uploads/answerbookcontents/8-geometriya-ag-merzlyak-vb-polonskij-ms-yakir-2021--1-chotirikutniki-${index}.jpg`,
    }
  })

})


console.log(data.value.map(item => item.solution).slice(0, 10))

window.transformJSArrayToBachArray = () => {
  return "urls=(",
      data.value.map(item => `"${item.solution}"`).join("\n  "),
      ")"
}
</script>


<style lang="scss" scoped>

.solution-items {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__item {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
}

</style>