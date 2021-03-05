import axiosClient from "../../helpers/axios-client";

const state = {
  movies: [],
};

const getters = {
  allMovies: (state) => state.movies,
};

const actions = {
  async getMovies({ commit }) {
    const response = await axiosClient.get("movie/popular", {
      params: { page: 1 },
    });

    commit("setMovies", response.data.results);
  },
};

const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
