import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.VUE_APP_TMDB_API_URL,
  params: {
    language: "pt-BR",
    api_key: process.env.VUE_APP_TMDB_API_KEY,
  },
});

export default axiosClient;
