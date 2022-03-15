<template>
  <div id="post-wrapper">
    <v-md-preview :text="text" />
  </div>
</template>

<script setup>
import css from "@assets/css/main.scss";
import { getMd } from "/api/posts";
const route = useRoute();
const id = route.params.id;
const text = ref("");

const url = useRuntimeConfig().url;

onMounted(() => {
  getMd(id, url).then((response) => {
    response.text().then((value) => {
      console.log(value);
      text.value = value;
    });
  });
});
</script>

<style scoped lang="scss">
#post-wrapper {
  width: 75%;
  float: right;
  margin-top: 100px;
}
</style>