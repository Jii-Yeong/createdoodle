<template>
  <nuxt-link class="content" :to="{ name: 'post-id', params: { id: route } }">
    <div class="content-info">
      <p class="title">{{ title }}</p>
    </div>
    <img class="image" :src="`posts/thumbnail/${thumbnail}.png`" />
  </nuxt-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  title: string
  description: string
  thumbnail: string
  route: number
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  max-height: 178px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  text-decoration: none;

  .content-info {
    .title {
      font-size: 24px;
      color: #14171c;
    }
  }

  .image {
    max-width: 233px;
    max-height: 126px;
  }
}
</style>
