import axiosClient from "../../helpers/axios-client";

const state = {
  genres: [],
};

const getters = {
  allGenres: (state) => state.genres,
  movieGenre: (state) => (id) => {
    const genre = state.genres.find((genre) => genre.id === id);
    if (genre !== -1) return genre.name;
    return "-";
  },
};

const actions = {
  async getGenres({ commit }) {
    const response = await axiosClient.get("/genre/movie/list");
    commit("setGenres", response.data.genres);
  },
};

const mutations = {
  setGenres: (state, genres) => (state.genres = genres),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
