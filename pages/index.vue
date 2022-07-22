<template>
  <div id="page">
    <common-header />
    <content-list />
  </div>
</template>

<script setup>
import '../public/asset/init.scss'

const googleSiteVerification = useRuntimeConfig().googleSiteVerification

useHead({
  link: {
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    rel: 'stylesheet',
  },
})

useMeta({
  title: '끄적끄적',
  meta: {
    name: 'google-site-verification',
    content: googleSiteVerification,
  },
})
</script>
