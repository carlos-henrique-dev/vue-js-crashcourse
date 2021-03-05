const state = {
  wishListItems: [],
  showWishList: false,
};

const getters = {
  allWishListItems: (state) => state.wishListItems,
  showWishList: (state) => state.showWishList,
};

const actions = {
  toggleWishList({ commit, rootState }) {
    if (rootState.cart.showCart) {
      commit("toggleCart");
    }
    commit("toggleWishList");
  },
  actionAddToWishList({ commit }, movie) {
    commit("addToWishList", movie);
  },
  actionClearWishList({ commit }) {
    commit("clearWishList");
  },
};

const mutations = {
  toggleWishList: (state) => {
    if (state.showCart) {
      state.showCart = false;
    }
    state.showWishList = !state.showWishList;
  },
  addToWishList: (state, item) => (state.wishListItems = [...state.wishListItems, item]),
  removeFromWishList: (state, id) => (state.wishListItems = state.wishListItems.filter((item) => item.id !== id)),
  clearWishList: (state) => (state.wishListItems = []),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
