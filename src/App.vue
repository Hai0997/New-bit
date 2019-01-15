<template>
  <div id="app">
    <Head></Head>
    <router-view></router-view>
    <Footers></Footers>

  </div>
</template>

<script>
    import Head from "./components/home/Head";
    import Footers from "./components/home/Footers";


    export default {
        components: {Footers, Head}
    }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
