<template>
  <Html>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
  </Html>
  <div id="post-wrapper">
    <v-md-preview :text="text" />
    <div ref="comment"/>
  </div>
<!--  <Script src="https://utteranc.es/client.js"-->
<!--          repo="Jii-Yeong/createdoodle-comments"-->
<!--          issue-term="pathname"-->
<!--          theme="github-light"-->
<!--          crossorigin="anonymous"-->
<!--          async>-->
<!--  </Script>-->
</template>S

<script setup>
import { getMd } from "/api/posts";
import { postList } from "@src/data/post";

const route = useRoute();
const id = route.params.id;
const text = ref("");
const comment = ref(null);

const url = useRuntimeConfig().url;
const title = postList.filter((list) => list.route === Number(id))[0].title;

onMounted(() => {
  getMd(id, url).then((response) => {
    response.text().then((value) => {
      text.value = value;
    });
  });

  const script = document.createElement('script');
  script.src = "https://utteranc.es/client.js";
  script.crossorigin = "annonymous";
  script.async = true;
  script.setAttribute('issue-term','pathname')
  script.setAttribute('repo', 'Jii-Yeong/createdoodle-comments')

  comment.value.appendChild(script);
});
</script>

<style scoped lang="scss">
#post-wrapper {
  width: 75%;
  float: right;
  margin-top: 100px;
  @include xs {
    width: 100%;
    float: left;
  }
}
</style>