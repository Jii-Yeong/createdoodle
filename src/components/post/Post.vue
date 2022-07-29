<template>
  <Html>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
  </Html>
  <div id="post-wrapper">
    <div class="post">
      <div class="category">
        <p class="text">{{ category }}</p>
        <p v-if="subCategory" class="sub-category">{{ subCategory }}</p>
      </div>
      <v-md-preview :text="text" />
    </div>
    <div ref="comment"></div>
  </div>
  <!--  <Script src="https://utteranc.es/client.js"-->
  <!--          repo="Jii-Yeong/createdoodle-comments"-->
  <!--          issue-term="pathname"-->
  <!--          theme="github-light"-->
  <!--          crossorigin="anonymous"-->
  <!--          async>-->
  <!--  </Script>-->
</template>
S

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getMd } from '/api/posts'
import { postList } from '@src/data/post'

const route = useRoute()
const id = route.params.id as string
const text = ref('')
const comment = ref(null)

const url = useRuntimeConfig().url
const title = ref('')
const category = ref('')
const subCategory = ref('')

function setPostInformation() {
  postList.forEach((post, index) => {
    if (Number(id) === index + 1) {
      title.value = post.title
      category.value = post.category
      if (post.subCategory) subCategory.value = post.subCategory
    }
  })
}

onMounted(() => {
  getMd(id, url).then((response: Response) => {
    if (response) {
      text.value = String(response)
    }
  })
  setPostInformation()
  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.crossOrigin = 'annonymous'
  script.async = true
  script.setAttribute('issue-term', 'pathname')
  script.setAttribute('repo', 'Jii-Yeong/createdoodle-comments')

  if (comment.value) (comment.value as HTMLElement).appendChild(script)
})
</script>

<style lang="scss" scoped>
#post-wrapper {
  max-width: 950px;
  width: 100%;
  margin: 80px 0;

  .post {
    background-color: #ffffff;
    border-radius: 8px;

    .category {
      display: flex;
      gap: 8px;
      padding: 32px 39px 0;
      .text {
        font-size: 18px;
        color: #7b71be;
        font-weight: 700;
      }

      .sub-category {
        color: #838383;
        font-size: 18px;
      }
    }
  }
}
</style>
