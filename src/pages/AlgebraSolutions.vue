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
  return new URL(`../assets/solutions/algebra/${imageName}`, import.meta.url).href
}

const data = computed(() => {
  return new Array(349).fill(0).map((item, i) => {

    let index = i + 1

    let [from, to] = [1, 100]

    if(index > 100) {
      from = 101
      to = 200
    }

    if(index > 200) {
      from = 201
      to = 349
    }

    return {
      task: index,
      solution: getImageUrl(`8-algebra-ag-merzlyak-vb-polonskij-ms-yakir-2021--1-ratsionalni-virazi-zavdannya-${from}-${to}-${index}.jpg`),
      // solution: `https://vshkole.com/web/images/uploads/answerbookcontents/8-algebra-ag-merzlyak-vb-polonskij-ms-yakir-2021--1-ratsionalni-virazi-zavdannya-${from}-${to}-${index}.jpg`,
    }
  })

})


window.transformJSArrayToBachArray = () => {
  console.log('Algebra Solutions:');

  const r = `urls=(
      ${data.value.map(item => `"${item.solution}"`).join('\n')}
  )`

  return r
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

  &__number {
    margin: 0;
  }
}

</style>