<template>
  <header id="header">
    <div>
      <p class="title">끄적끄적</p>
    </div>
    <search-bar />
  </header>
</template>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  .title {
    font-size: 18px;
    margin: 13px 47px;
    padding: 0;
    color: #5764ab;
    font-weight: 700;
  }
}
</style>