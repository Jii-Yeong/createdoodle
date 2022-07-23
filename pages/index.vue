<template>
  <div id="page">
    <common-header />
    <content-list />
  </div>
</template>

<script lang="ts" setup>
import '@public/asset/init.scss'
import CommonHeader from "@src/components/header/CommonHeader.vue"
import ContentList from "@src/components/content-list/ContentList.vue"
import {useMeta, useRuntimeConfig} from "nuxt/app"

const googleSiteVerification = useRuntimeConfig().googleSiteVerification

useMeta({
  title: '끄적끄적',
  meta: {
    name: 'google-site-verification',
    content: googleSiteVerification,
  },
})
</script>
