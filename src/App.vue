<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <the-header />
    <router-view />
    <the-footer />
  </div>
</template>
<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
<style lang="scss">
body {
  background: #f6c5d4 url(/assets/img/bg.jpg) 0 0 repeat;
}

#app {
  width: 90%;
  margin: 10px auto;
  background: #fff;
  box-shadow: #666666 0 0 7px;
  overflow: hidden;
  border-radius: 10px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  //tablet
  #app {
    width: 80%;
    margin: 15px auto;
  }
 }

@media (min-width: 1024px) {
  //desktop
  #app {
    width: 1000px;
    margin: 20px auto;
  }
 }

</style>
