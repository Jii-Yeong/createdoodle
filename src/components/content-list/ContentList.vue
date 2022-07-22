<template>
  <div id="content-list">
    <div class="content-area">
      <content
        class="content-item"
        v-for="(post, index) in postList"
        :key="index"
        :title="post.title"
        :description="post.description"
        :thumbnail="post.thumbnail"
        :route="post.route"
      />
    </div>
  </div>
</template>

<script setup>
import { postList } from '@src/data/post'
</script>

<style scoped lang="scss">
#content-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content-area {
    max-width: 1120px;
    padding: 60px;

    .content-item {
      margin: 32px 0;
    }
  }
}
</style>
