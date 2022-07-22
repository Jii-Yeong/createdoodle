<template>
  <div id="page">
    <common-header />
    <navigation />
    <post />
  </div>
</template>

<script setup>
const googleSiteVerification = useRuntimeConfig().googleSiteVerification

useHead({
  link: {
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    rel: 'stylesheet',
  },
})

useMeta({
  meta: {
    name: 'google-site-verification',
    content: googleSiteVerification,
  },
})
</script>
