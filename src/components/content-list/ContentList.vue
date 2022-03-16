<template>
  <div id="content-list">
    <content
      v-for="(post, index) in postList"
      :key="index"
      :title="post.title"
      :description="post.description"
      :thumbnail="post.thumbnail"
      :route="post.route"
    />
  </div>
</template>

<script setup>
import { postList } from "@src/data/post";
</script>

<style scoped lang="scss">
#content-list {
  margin: 60px;
  width: 75%;
  height: 100%;
  float: right;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>