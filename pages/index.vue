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
  meta: {
    name: "google-site-verification",
    content: googleSiteVerification,
  },
});
</script>