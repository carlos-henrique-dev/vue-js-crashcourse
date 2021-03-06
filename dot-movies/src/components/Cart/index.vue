<template>
  <Menu :showMenu="showCart" @toggleMenu="toggleCart">
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
  </Menu>
</template>

<script>
import CartItem from "./CartItem";
import { mapGetters, mapActions } from "vuex";
import Menu from "../Menu/index";

export default {
  name: "Cart",
  components: { CartItem, Menu },
  computed: mapGetters(["showCart", "allCartItems", "cartTotalPrice"]),
  methods: {
    ...mapActions(["toggleCart"]),
  },
};
</script>

<style lang="scss" scoped>
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
</style>