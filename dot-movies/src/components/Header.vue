<template>
  <div class="nav">
    <h1>LOGO</h1>
    <div class="search-bar">
      <input type="text" class="search" placeholder="Pesquisa" />
      <i class="fas fa-search"></i>
    </div>
    <div class="options">
      <i class="fas fa-heart with-list"></i>
      <i class="fas fa-shopping-cart cart"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.nav {
  background: #8dd7cf;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  padding: 0 40px;
  height: 40px;

  h1 {
    margin: 0;
    color: #fff;
    font-size: 28px;
  }

  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 300px;
    height: 30px;
    padding: 0 10px;
    background: #fff;
    border: 2px solid #cacaca;
    border-radius: 3px;

    .search {
      border: none;
      width: 100%;
      height: 28px;
    }

    .search:focus {
      outline: none;
    }

    i {
      cursor: pointer;
      color: #b8b8b8;
      font-weight: 600;
      font-size: 20px;
      transition: transform 0.3s;
    }

    i:hover,
    i:active {
      color: #8dd7cf;
      transform: scale(1.1);
    }
  }

  .options {
    display: flex;
    margin: auto 0;

    .with-list,
    .cart {
      cursor: pointer;
      color: #fff;
      font-size: 25px;
      font-weight: 600;
      transition: transform 0.3s, color 0.3s;
    }

    .with-list {
      margin-right: 20px;
    }

    .with-list:hover,
    .cart:hover,
    .with-list:active,
    .cart:active {
      color: #fbe192;
      transform: scale(1.2);
    }
  }
}
</style>