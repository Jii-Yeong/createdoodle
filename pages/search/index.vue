<template>
  <div id="page">
    <common-header />
    <div class="content-list-area">
      <content-list />
    </div>
  </div>
</template>

<script lang="ts" setup>
import '@assets/css/init.scss'
import CommonHeader from '@src/components/header/CommonHeader.vue'
import ContentList from '@src/components/content-list/ContentList.vue'

const googleSiteVerification = useRuntimeConfig().googleSiteVerification

useHead({
  title: '끄적끄적',
  meta: [
    {
      name: 'google-site-verification',
      content: googleSiteVerification,
    },
  ],
})
</script>

<style lang="scss" scoped>
.content-list-area {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
