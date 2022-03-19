<template>
  <div id="page">
    <common-header />
    <navigation />
    <content-list />
  </div>
</template>

<script setup>
const googleSiteVerification = useRuntimeConfig().googleSiteVerification;

useMeta({
  title: "끄적끄적",
  meta: {
    name: "google-site-verification",
    content: googleSiteVerification,
  },
});
</script>