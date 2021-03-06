<template>
  <div class="checkout-container">
    <div class="title">
      <h1>Finalizar compra</h1>
    </div>
    <div class="checkout-area">
      <form @submit="onSubmit" class="user-info-form">
        <div class="form-control row">
          <input type="text" name="text" placeholder="Nome Completo" />
        </div>

        <div class="form-control col-4">
          <input type="tel" v-mask="'###.###.###-##'" placeholder="CPF" />
        </div>

        <div class="form-control col-4">
          <input
            type="text"
            name="day"
            v-mask="'(##) # ####-####'"
            placeholder="Celular"
          />
        </div>

        <div class="form-control row">
          <input type="text" name="day" placeholder="E-mail" />
        </div>

        <div class="form-control col-3">
          <input
            type="text"
            name="day"
            v-mask="'#####-###'"
            placeholder="CEP"
          />
        </div>

        <div class="form-control col-5">
          <input type="text" name="day" placeholder="Endereço" />
        </div>

        <div class="form-control col-4">
          <input type="text" name="day" placeholder="Cidade" />
        </div>

        <div class="form-control col-4">
          <input type="text" name="day" placeholder="Estado" />
        </div>
      </form>
      <div class="cart">
        <table>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Qtd</th>
            <th>Preço</th>
          </tr>

          <tr v-for="cartItem in allCartItems" :key="cartItem.di">
            <td><img :src="getImageUrl(cartItem.poster_path)" /></td>
            <td>{{ cartItem.title }}</td>
            <td>1</td>
            <td>{{ renderPrice(cartItem.price) }}</td>
            <td>
              <i
                @click="actionRemoveFromCart(item.id)"
                class="fas fa-trash"
              ></i>
            </td>
          </tr>
        </table>

        <div class="cart-total">
          <span>Total:</span>
          <span class="total-price">{{
            cartTotalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          }}</span>
        </div>

        <button>Finalizar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import currencyConverter from "../../../helpers/currencyConverter";
import { mask } from "vue-the-mask";

export default {
  name: "CheckoutForm",
  directives: { mask },
  computed: mapGetters(["allCartItems", "cartTotalPrice"]),
  methods: {
    renderPrice(value) {
      return currencyConverter(value);
    },
    getImageUrl(url) {
      return `http://image.tmdb.org/t/p/w200${url}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 30px 70px 0;

  .title {
    display: block;
    width: 100%;
    margin-bottom: 30px;
    h1 {
      margin: 0;
      font-weight: normal;
      font-size: 28px;
    }
  }

  .checkout-area {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
  }

  .user-info-form {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(8, 1fr);
    width: 45%;

    .form-control {
      color: #fff;
      border-radius: 5px;
      margin: 0 15px 15px 0;

      input {
        height: 35px;
        width: 100%;
        border: 2px solid #cecece;
        border-radius: 5px;
        padding-left: 10px;
        transition: transform 0.3s;
        font-size: 18px;
        color: #595959;
      }
      input::placeholder {
        color: #cecece;
        font-size: 18px;
      }
      input:focus {
        outline: none;
        transform: scale(1.05);
      }

      &.row {
        grid-column: span 8;
      }
      &.col-3 {
        grid-column: span 3;
      }
      &.col-4 {
        grid-column: span 4;
      }
      &.col-5 {
        grid-column: span 5;
      }
    }
  }

  .user-info-form {
    .form-control:nth-last-of-type(-n + 2) {
      margin-bottom: 0;
    }
  }

  .cart {
    width: 45%;
    box-sizing: border-box;

    table {
      flex: 1 1 auto;
      text-align: left;
      width: 100%;
      border-collapse: collapse;

      th,
      td {
        margin-right: 5px;
      }

      th {
        padding-bottom: 10px;

        font-weight: normal;
        color: #7b7b7b;
      }

      tr {
        td:nth-child(3) {
          text-align: center;
        }
      }

      img {
        width: 60px;
        height: 60px;
      }

      i {
        color: #8d8d8d;
        cursor: pointer;
      }

      i:hover,
      i:active {
        color: red;
      }
    }

    .cart-total {
      position: relative;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;

      .total-price {
        font-weight: bold;
      }
    }

    button {
      width: 100%;
      background: #6558f5;
      border: none;
      padding: 15px 0;
      font-size: 16px;
      color: #fff;
      border-radius: 5px;
      margin-top: 30px;
    }
  }
}
</style>