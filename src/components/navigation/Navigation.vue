<template>
  <nav id="navigation">
    <navigation-list
      v-for="(list, index) in category"
      :key="index"
      :category="list"
    />
  </nav>
</template>

<script setup>
import { category } from "@src/data/category";
</script>

<style lang="scss" scoped>
#navigation {
  margin-top: 60px;
  width: 320px;
  height: 93%;
  border-right: 1px solid #c2c2c2;
  position: fixed;
  overflow-y: auto;
}
</style>