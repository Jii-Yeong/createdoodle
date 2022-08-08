<template>
  <div id="content-list">
    <div class="search-area">
      <search-bar />
    </div>
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
const reverseList = ref(copyList.reverse())

const route = useRoute()
const text = computed(() => {
  return route.query.text
})

onBeforeMount(() => {
  if (text.value)
    reverseList.value = copyList.filter((item) =>
      item.title.includes(text.value)
    )
})

watch(text, () => {
  console.log(text)
  reverseList.value = copyList.filter((item) => item.title.includes(text.value))
})
</script>

<style lang="scss" scoped>
#content-list {
  margin: 100px 0;
  max-width: 950px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .search-area {
    float: right;
    margin: 0 16px;
  }
  .content-area {
    padding: 30px 16px;

    .content-item {
      margin: 16px 0;
    }
  }
}
</style>
