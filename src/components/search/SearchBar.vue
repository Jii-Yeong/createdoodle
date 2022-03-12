<template>
  <div id="search-bar">
    <input type="text" class="search-input" placeholder="search..." />
    <button type="button" class="search-button">검색</button>
  </div>
</template>

<style lang="scss" scoped>
#search-bar {
  display: flex;
  align-items: center;
  margin: 0px 40px;
  .search-input {
    width: 170px;
    height: 37px;
    outline: none;
    border: none;
    opacity: 0.5;
    border-radius: 20px 0px 0px 20px;
    padding: 0px 10px;
    font-size: 17px;
    font-weight: 500;
  }
  .search-button {
    outline: none;
    border-radius: 4px;
    width: 70px;
    height: 30px;
    font-size: 15px;
    border: none;
    background-color: #1f0d6d;
    opacity: 0.5;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>