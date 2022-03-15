<template>
  <div id="post-wrapper">
    <v-md-preview :text="text" />
  </div>
</template>

<script setup>
import css from "@assets/css/main.scss";
import pathe, { resolve } from "pathe";

const route = useRoute();
const id = route.params.id;
const text = ref("");
const __dirname = pathe.resolve();

if (process.server) {
  const fs = await import("fs");
  const content = fs.readFileSync(
    resolve(__dirname, `./posts/${id}.md`),
    "utf8"
  );
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