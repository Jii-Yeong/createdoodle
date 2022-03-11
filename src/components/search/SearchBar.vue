<template>
  <div id="search-bar">
    <input type="text" class="search-input" />
    <button type="button" class="search-button">검색</button>
  </div>
</template>

<style lang="scss" scoped>
#search-bar {
  display: flex;
  align-items: center;
  margin: 0px 40px;
  .search-input {
    width: 210px;
    height: 37px;
    outline: none;
    border: none;
    background-color: #c2c2c2;
    opacity: 0.5;
    border-radius: 20px 0px 0px 20px;
    padding: 0px 10px;
  }
  .search-button {
    outline: none;
    border-radius: 0px 20px 20px 0px;
    width: 80px;
    height: 37px;
    font-size: 16px;
    border: none;
    background-color: #1f0d6d;
    opacity: 0.7;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>