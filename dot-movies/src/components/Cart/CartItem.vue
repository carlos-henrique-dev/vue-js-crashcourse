<template>
  <div class="cart-item">
    <img :src="getImageUrl(item.poster_path)" />

    <h1 class="title">{{ item.title }}</h1>

    <span class="amount">1</span>

    <span class="price">{{
      item.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    }}</span>

    <i @click="actionRemoveFromCart(item.id)" class="fas fa-trash"></i>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CartItem",
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
.cart-item {
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
    color: #cecece;
    transition: color 0.3s;
  }

  i:hover {
    color: red;
  }
}

.cart-item:hover {
  background-color: #cecece;
}
</style>