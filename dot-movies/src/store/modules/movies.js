import axiosClient from "../../helpers/axios-client";

const state = {
  movies: [],
  loading: false,
};

const getters = {
  allMovies: (state) => state.movies,
  isLoading: (state) => state.loading,
};

const actions = {
  async getMovies({ commit }) {
    return new Promise((resolve, reject) => {
      commit("toggleLoading");
      axiosClient
        .get("movie/popular", {
          params: { page: 1 },
        })
        .then((response) => {
          commit("toggleLoading");
          commit("setMovies", response.data.results);
          resolve({ status: 200 });
        })
        .catch((err) => {
          commit("toggleLoading");
          commit("setMovies", []);
          reject({ status: 400 });
        });
    });
  },
  async searchMovies({ commit }, query) {
    return new Promise((resolve, reject) => {
      commit("toggleLoading");
      axiosClient
        .get("search/movie", {
          params: { query },
        })
        .then((response) => {
          commit("toggleLoading");
          commit("setMovies", response.data.results);
          resolve({ status: 200 });
        })
        .catch((err) => {
          commit("toggleLoading");
          commit("setMovies", []);
          reject({ status: 400 });
        });
    });
  },
};

const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
  toggleLoading: (state) => (state.loading = !state.loading),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
