<template>
  <navigation />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from '@src/component/navigation/Navigation.vue'
import '@assets/css/main.scss'

export default defineComponent({
  components: { Navigation },
  setup() {
    Navigation
  },
})
</script>

