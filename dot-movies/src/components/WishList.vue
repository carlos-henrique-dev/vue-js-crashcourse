<template>
  <div class="wish-list-menu" v-bind:class="{ 'show-wish-list': showWishList }">
    <button class="closebtn" @click="toggleWishList">Fechar favoritos</button>
    <div class="wish-list-content"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WishList",
  computed: mapGetters(["showWishList"]),
  methods: {
    ...mapActions(["toggleWishList"]),
  },
};
</script>

<style lang="scss" scoped>
.wish-list-menu {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 40px;
  right: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  visibility: hidden;

  &.show-wish-list {
    visibility: inherit;
    width: 300px;
    box-shadow: -15px 10px 15px 5px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-height: 450px) {
    .overlay a {
      font-size: 20px;
    }
    .overlay .closebtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }
}
</style>