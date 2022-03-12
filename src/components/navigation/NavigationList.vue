<template>
  <div id="navigation-list">
    <ul class="navigation-wrapper">
      <li>{{ category.upperTitle }}</li>
      <li
        class="navigation-list"
        v-for="(list, index) in category.lowerList"
        :key="index"
      >
        {{ list }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Category } from "src/models/category";
import { defineProps } from "vue";

interface Props {
  category: Category;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
#navigation-list {
  margin: 35px 0px;
  .navigation-wrapper {
    list-style: none;
    font-size: 17px;
    li {
      padding: 5px;
      &:first-child {
        font-size: 18px;
        font-weight: 700;
        color: #5764ab;
      }
      &:nth-child(n + 2) {
        margin: 1px;
      }
    }
  }
}
</style>