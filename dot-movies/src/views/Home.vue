<template>
  <Movies />
  <Cart />
  <WishList />
</template>

<script>
import Movies from "../components/Movies";
import Cart from "../components/Cart";
import WishList from "../components/WishList";

// import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: { Movies, Cart, WishList },

  // computed: mapGetters(["showCart"]),
};
</script>