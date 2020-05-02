<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  background: #f6c5d4 url(/assets/img/bg.jpg) 0 0 repeat;
}

#app {
  width: 960px;
  margin: 20px auto;
  background: #fff;
  box-shadow: #666666 0px 0px 7px;
  overflow: hidden;
  border-radius: 10px;
  padding: 0 20px;
}
</style>
