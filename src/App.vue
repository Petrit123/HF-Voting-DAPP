<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top:150px;
  color: #F5FFFA;
  font-weight: bold;
  position: relative;
}
body {
  background-image:    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
  url('./assets/blockchain.png');
    background-attachment: fixed;
  background-size: cover;
  background-size: cover;
}
img {
    max-width: 100%;
    max-height: 100%;
}
</style>
