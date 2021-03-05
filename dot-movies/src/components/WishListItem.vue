<template>
  <div class="wishlist-item">
    <img :src="getImageUrl(item.poster_path)" />

    <h1 class="title">{{ item.title }}</h1>

    <span class="price">{{
      item.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    }}</span>

    <i @click="actionAddToCart(item)" class="fas fa-shopping-cart"></i>
    <i
      @click="!isOnCart ? actionRemoveFromCart(item.id) : null"
      class="fas fa-trash"
    ></i>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "WishListItem",
  props: {
    item: Object,
  },

  methods: {
    ...mapActions(["actionAddToCart", "actionRemoveFromCart"]),
    getImageUrl(url) {
      return `http://image.tmdb.org/t/p/w200${url}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.wishlist-item {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-top: 5px;
  transition: background-color 0.3s;

  img {
    width: 40px;
    height: 40px;
    object-fit: fill;
    border-radius: 5px 5px 0 0;
  }

  .title,
  .amount,
  .price,
  i {
    font-size: 12px;
    margin: auto;
  }

  i {
    cursor: pointer;
    font-size: 14px;
    color: #a5a5a5;
    transition: color 0.3s;
  }

  .fa-trash:hover {
    color: red;
  }

  .fa-shopping-cart:hover {
    color: #1aae9f;
  }
}

.wishlist-item:hover {
  background-color: #cecece;
}
</style>