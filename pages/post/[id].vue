<template>
  <div id="page">
    <common-header />
    <navigation />
    <post />
  </div>
</template>

<script setup lang="ts">
import {useMeta, useRuntimeConfig} from "nuxt/app";
import CommonHeader from "@src/components/header/CommonHeader.vue";
import Navigation from "@src/components/navigation/Navigation.vue";
import Post from "@src/components/post/Post.vue";

const googleSiteVerification = useRuntimeConfig().googleSiteVerification

useMeta({
  meta: {
    name: 'google-site-verification',
    content: googleSiteVerification,
  },
})
</script>

<style scoped lang="scss">
#page {

}
</style>
