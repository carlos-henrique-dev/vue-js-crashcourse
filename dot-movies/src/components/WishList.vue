<template>
  <div class="wish-list-menu" v-bind:class="{ 'show-wish-list': showWishList }">
    <i @click="toggleWishList" class="fas fa-times closebtn"></i>
    <div class="wishlist-header">
      <h1>Meus favoritos</h1>
      <span @click="actionClearWishList">Esvaziar</span>
    </div>

    <div class="empty-list" v-show="allWishListItems.length === 0">
      <span>Você não possui nenhum item nos favoritos</span>
    </div>

    <div class="wish-list-content">
      <div v-for="wishListItem in allWishListItems" :key="wishListItem.id">
        <WishListItem :item="wishListItem" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import WishListItem from "./WishListItem";

export default {
  name: "WishList",
  components: { WishListItem },
  computed: mapGetters(["showWishList", "allWishListItems"]),
  methods: {
    ...mapActions(["toggleWishList", "actionClearWishList"]),
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
  padding: 5px;

  &.show-wish-list {
    visibility: inherit;
    width: 300px;
    box-shadow: -15px 10px 15px 5px rgba(0, 0, 0, 0.5);
  }

  .empty-list {
    padding: 30px;
    color: #bababa;
    margin-top: 80px;
    text-align: center;
  }

  .closebtn {
    cursor: pointer;
    color: red;
    border: none;
    font-size: 30px;
    font-weight: 600;
  }

  .wishlist-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;

    h1 {
      font-size: 16px;
      margin: 0;
    }
    span {
      color: #6558f5;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .wish-list-content {
    margin-top: 30px;
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