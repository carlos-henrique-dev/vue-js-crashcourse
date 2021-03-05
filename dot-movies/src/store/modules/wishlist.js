const state = {
  wishListItems: [],
  showWishList: false,
};

const getters = {
  allWishListItems: (state) => state.allCartItems,
  showWishList: (state) => state.showWishList,
};

const actions = {
  toggleWishList({ commit, rootState }) {
    if (rootState.cart.showCart) {
      commit("toggleCart");
    }
    commit("toggleWishList");
  },
};

const mutations = {
  toggleWishList: (state) => {
    if (state.showCart) {
      state.showCart = false;
    }
    state.showWishList = !state.showWishList;
  },
  addToWishList: (state, item) => (state.wishListItems = [...wishListItems, item]),
  removeFromWishList: (state, id) => (state.wishListItems = state.wishListItems.filter((item) => item.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
