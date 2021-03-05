<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: { Header },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  scroll-behavior: smooth;
  margin: 0;
}

html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
