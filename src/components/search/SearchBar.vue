<template>
  <div id="search-bar">
    <input
      type="text"
      class="search-input"
      placeholder="search..."
      ref="input"
      @keypress="enterInput"
    />
    <button type="button" class="search-button" @click="navigate">검색</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['search'])

const route = useRoute()
const text = computed(() => {
  return route.query.text
})
const input = ref<HTMLInputElement>()

function navigate() {
  return navigateTo({
    path: '/search',
    query: {
      text: input.value.value,
    },
  })
}

function enterInput(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    navigate()
  }
}

onMounted(() => {
  if (text.value && input.value) {
    input.value.value = String(text.value)
  }
})
</script>

<style lang="scss" scoped>
#search-bar {
  float: right;
  .search-input {
    width: 170px;
    height: 34px;
    outline: none;
    border: none;
    opacity: 0.5;
    border-radius: 15px 0px 0px 15px;
    padding: 0px 10px;
    font-size: 15px;
    font-weight: 500;
  }
  .search-button {
    outline: none;
    border-radius: 4px;
    width: 70px;
    height: 34px;
    font-size: 15px;
    border: none;
    border-radius: 0px 15px 15px 0px;
    background-color: #1f0d6d;
    opacity: 0.5;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>
