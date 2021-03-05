const state = {
  cartItems: [],
  showCart: false,
};

const getters = {
  allCartItems: (state) => state.cartItems,
  showCart: (state) => state.showCart,
  cartTotalPrice: (state) =>
    state.cartItems.reduce((total, cartItem) => {
      return total + cartItem.price;
    }, 0),
};

const actions = {
  toggleCart({ commit, rootState }) {
    if (rootState.wishlist.showWishList) {
      commit("toggleWishList");
    }
    commit("toggleCart");
  },
  actionAddToCart({ commit }, movie) {
    commit("addToCart", movie);
  },
  actionRemoveFromCart({ commit }, id) {
    commit("removeFromCart", id);
  },
};

const mutations = {
  toggleCart: (state) => (state.showCart = !state.showCart),
  addToCart: (state, movie) => {
    const alreadyExists = state.cartItems.find((item) => item.id === movie.id);
    if (alreadyExists === undefined) {
      state.cartItems = [...state.cartItems, movie];
    }
  },
  removeFromCart: (state, id) => (state.cartItems = state.cartItems.filter((item) => item.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
