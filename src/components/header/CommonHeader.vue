<template>
  <header id="header">
    <div class="header-content">
      <mui-icon :size="60">arrow_drop_down</mui-icon>
      <div>
        <nuxt-link class="title" to="/">끄적끄적</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import DeleteIcon from '@mui/icons-material/Delete'
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 60px;
  background-color: rgba(212, 205, 255, 0.29);
  position: fixed;

  .header-content {
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 25px;
      padding: 0;
      color: #ffffff;
      font-weight: 700;
      text-decoration: none;
    }
  }
}
</style>
