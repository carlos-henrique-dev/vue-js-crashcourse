<template>
  <Header />
  <router-view />
  <Cart />
  <WishList />
</template>

<script>
import Header from "./components/shared/Header";
import Cart from "./components/Cart/index";
import WishList from "./components/Wishlist/index";

export default {
  name: "App",
  components: { Header, Cart, WishList },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  scroll-behavior: smooth;
  margin: 0;
}

html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
