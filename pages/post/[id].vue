<template>
  <div id="page">
    <common-header />
    <navigation />
    <post />
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
