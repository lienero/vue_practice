<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/databinding">DataBinding</router-link> |
    <router-link to="/databindinghtml">DataBindingHtml</router-link> |
    <router-link to="/databindinglist">DataBindingList</router-link> |
    <router-link to="/rendering">Rendering</router-link> |
    <router-link to="/event">Event</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/kakaologin">login</router-link> |
    <router-link to="/naverlogin">naverlogin</router-link> |
    <router-link to="/googlelogin">googlelogin</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
