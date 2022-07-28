<template>
  <div id="page">
    <common-header />
    <div class="post-area">
      <post />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMeta, useRuntimeConfig } from 'nuxt/app';
import CommonHeader from '@src/components/header/CommonHeader.vue';
import Post from '@src/components/post/Post.vue';

const googleSiteVerification = useRuntimeConfig().googleSiteVerification;

useMeta({
  meta: {
    name: 'google-site-verification',
    content: googleSiteVerification,
  },
});
</script>

<style lang="scss" scoped>
.post-area {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
