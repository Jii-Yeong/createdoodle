<template>
  <div id="content-list">
    <div class="content-area">
      <content
        v-for="(post, index) in reverseList"
        :key="index"
        :description="post.description"
        :route="post.route"
        :thumbnail="post.thumbnail"
        :category="post.category"
        :sub-category="post.subCategory"
        :title="post.title"
        class="content-item"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { postList } from '@src/data/post'
import Content from '@src/components/content-list/Content.vue'

const copyList = [...postList]
const reverseList = copyList.reverse()
</script>

<style lang="scss" scoped>
#content-list {
  max-width: 950px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .content-area {
    padding: 60px 16px;
    .content-item {
      margin: 16px 0;
    }
  }
}
</style>
