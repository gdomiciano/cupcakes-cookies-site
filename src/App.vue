<template>
  <div class="app-container">
    <the-header />
    <main id="app">
      <router-view />
    </main>
    <the-footer />
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style>
body {
  background: #f6c5d4 url(assets/img/bg.jpg) 0 0 repeat;
}

.app-container {
  width: 960px;
  margin: 20px auto;
  background: #fff;
  box-shadow: #666666 0px 0px 7px;
  overflow: hidden;
  border-radius: 10px;
}
</style>
