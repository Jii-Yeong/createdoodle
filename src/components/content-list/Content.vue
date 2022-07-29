<template>
  <nuxt-link :to="`/post/${route}`" class="content">
    <div class="content-info">
      <p class="title">{{ title }}</p>
    </div>
    <img :src="`posts/thumbnail/${thumbnail}.png`" class="image" />
  </nuxt-link>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

interface Props {
  title: string
  description: string
  thumbnail: string
  route: number
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.content {
  max-height: 178px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  text-decoration: none;

  .content-info {
    .title {
      font-size: 20px;
      color: #14171c;
    }
  }

  .image {
    max-width: 233px;
    max-height: 80px;
  }
}
</style>
