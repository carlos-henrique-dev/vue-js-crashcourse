<template>
  <div class="movies-container">
    <div v-for="movie in allMovies" :key="movie.id">
      <MovieCard :movie="movie" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieCard from "./MovieCard";
export default {
  name: "Movies",
  components: { MovieCard },
  methods: {
    ...mapActions(["getMovies", "getGenres"]),
  },
  computed: mapGetters(["allMovies"]),
  data() {
    return {
      page: 1,
    };
  },
  created() {
    this.getGenres();
    this.getMovies(this.page);
  },
};
</script>

<style lang="scss">
.movies-container {
  padding: 50px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
  @media (max-width: 600px) {
    padding: 50px 25px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>