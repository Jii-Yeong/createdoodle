<template>
  <div class="content">
    <div class="image-section">
      <div ref="image"></div>
    </div>
    <nuxt-link
      :to="{ name: 'post-id', params: { id: route } }"
      class="post-information"
    >
      <p class="title">{{ title }}</p>
      <p class="description">{{ description }}</p>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, Ref, onMounted } from "vue";

const image: Ref = ref(null);
const props = defineProps<Props>();

onMounted(() => {
  const imageElement = <HTMLImageElement>image.value;
  imageElement.style.background = `center/contain no-repeat url('thumbnail/${props.thumbnail}.png')`;
});

interface Props {
  title: string;
  description: string;
  thumbnail: string;
  route: number;
}
</script>

<style scoped lang="scss">
.content {
  width: 80%;
  padding: 30px 20px;
  margin: 30px 0px;
  display: flex;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  .image-section {
    margin: 0px 30px;
    width: 270px;
    height: 170px;
    background-color: #e2e2e2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    div {
      width: 270px;
      height: 170px;
    }
  }
}

.post-information {
  margin: 0px 30px;
  p {
    margin: 0;
    padding: 0;
  }
  .title {
    color: #5764ab;
    font-weight: 700;
    font-size: 25px;
    margin: 10px 0px;
    word-break: keep-all;
  }
  .description {
    color: #4e4e4e;
  }
}
</style>