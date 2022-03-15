<template>
  <div id="post-wrapper">
    <v-md-preview :text="text" />
  </div>
</template>

<script setup>
import css from "@assets/css/main.scss";
const route = useRoute();
const id = route.params.id;
const text = ref("");

if (process.server) {
  const fs = await import("fs");
  const content = fs.readFileSync(`/public/posts/${id}.md`, "utf8");
  text.value = content;
}
</script>

<style scoped lang="scss">
#post-wrapper {
  width: 75%;
  float: right;
  margin-top: 100px;
}
</style>