<template>
  <nuxt-link :to="`/post/${route}`" class="content">
    <div class="content-info">
      <div class="category">
        <p class="text">{{ category }}</p>
        <p class="sub-category">{{ subCategory }}</p>
      </div>
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
  category: string
  subCategory: string
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
      font-size: 19px;
      color: #14171c;
    }

    .category {
      display: flex;
      gap: 8px;
      padding-bottom: 12px;
      .text {
        font-size: 16px;
        color: #7b71be;
        font-weight: 700;
      }

      .sub-category {
        color: #838383;
        font-size: 16px;
      }
    }
  }

  .image {
    max-width: 233px;
    max-height: 80px;
  }
}
</style>
