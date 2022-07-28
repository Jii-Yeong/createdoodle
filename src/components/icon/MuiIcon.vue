<template>
  <span :style="{ fontSize: `${size}px` }" class="material-icons icons">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
interface Props {
  size: number
}

withDefaults(defineProps<Props>(), {
  size: 26,
})
</script>

<style lang="scss" scoped>
.icons {
  color: #ffffff;
}
</style>
