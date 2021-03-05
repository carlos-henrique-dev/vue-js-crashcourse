<template>
  <div class="cart-menu" v-bind:class="{ 'show-cart': showCart }">
    <i @click="toggleCart" class="fas fa-times closebtn"></i>
    <div class="cart-content">
      <div v-for="cartItem in allCartItems" :key="cartItem.id">
        <CartItem :item="cartItem" />
      </div>
    </div>

    <div class="cart-total">
      <span>Total:</span>
      <span class="total-price">{{
        cartTotalPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      }}</span>
    </div>

    <router-link
      class="action"
      :to="allCartItems.length === 0 ? '' : '/checkout'"
      :class="allCartItems.length === 0 ? 'disabled' : ''"
    >
      Finalizar compra
    </router-link>
  </div>
</template>

<script>
import CartItem from "./CartItem";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  components: { CartItem },
  computed: mapGetters(["showCart", "allCartItems", "cartTotalPrice"]),
  methods: {
    ...mapActions(["toggleCart"]),
    alert() {
      alert("oeee");
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-menu {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 40px;
  right: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding: 5px;
  box-sizing: border-box;
  visibility: hidden;

  &.show-cart {
    visibility: inherit;
    width: 300px;
    box-shadow: -15px 10px 15px 5px rgba(0, 0, 0, 0.5);
  }

  .closebtn {
    cursor: pointer;
    color: red;
    border: none;
    font-size: 30px;
    font-weight: 600;
  }

  .cart-content {
    margin-top: 20px;
  }

  .cart-total {
    position: relative;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;

    .total-price {
      font-weight: bold;
    }
  }

  a {
    float: right;
    margin-top: 30px;
    text-decoration: none;
    background: #6558f5;
    border: none;
    padding: 10px 5px;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &.disabled {
      background: #797979;
    }
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