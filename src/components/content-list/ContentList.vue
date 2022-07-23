<template>
  <div id="content-list">
    <div class="content-area">
      <content
        v-for="(post, index) in postList"
        :key="index"
        :description="post.description"
        :route="post.route"
        :thumbnail="post.thumbnail"
        :title="post.title"
        class="content-item"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { postList } from "@src/data/post";
import Content from "@src/components/content-list/Content.vue";
</script>

<style lang="scss" scoped>
#content-list {
  max-width: 950px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .content-area {
    padding: 60px 30px;
    .content-item {
      margin: 16px 0;
    }
  }
}
</style>
