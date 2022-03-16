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
  @include xs {
    width: 100%;
    margin: 70px 0px;
    padding: 0px;
    float: left;
  }
}
</style>