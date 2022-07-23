<template>
  <div id="content-list">
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
</template>

<script setup>
import {postList} from '@src/data/post'
import Content from "@src/components/content-list/Content";</script>

<style lang="scss" scoped>
#content-list {
  max-width: 950px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .content-item {
    margin: 16px 0;
  }
}
</style>
