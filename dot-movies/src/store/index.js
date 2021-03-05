import { createStore } from "vuex";
import movies from "./modules/movies";
import genres from "./modules/genres";
import cart from "./modules/cart";
import wishlist from "./modules/wishlist";

export default createStore({
  modules: {
    movies,
    genres,
    cart,
    wishlist,
  },
});
