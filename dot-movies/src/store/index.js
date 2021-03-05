import { createStore } from "vuex";
import movies from "./modules/movies";
import genres from "./modules/genres";

export default createStore({
  modules: {
    movies,
    genres,
  },
});
