import axios from "axios";

export const defaultUrl = "https://api.themoviedb.org/3";

const axiosClient = axios.create({
  baseURL: defaultUrl,
  params: {
    language: "pt-BR",
    api_key: process.env.VUE_APP_TMDB_API_KEY,
  },
});

export default axiosClient;
