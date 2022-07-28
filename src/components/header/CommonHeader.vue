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

<script lang="ts" setup></script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 60px;
  background-color: rgba(202, 195, 248, 0.7);
  position: fixed;
  box-shadow: 0 10px 10px 5px rgba(0, 0, 0, 0.03);

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
