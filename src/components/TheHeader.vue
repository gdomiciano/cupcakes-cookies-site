<template>
  <header class="header">
    <router-link to="/">
      <img
        alt="Cupcake logo"
        src="../assets/img/logo.png"
      >
    </router-link>

    <nav class="menu">
      <link-button
        v-for="icon in menuItems"
        :key="icon"
        href="/"
        :icon-name="icon"
      />
    </nav>
  </header>
</template>

<script>
import LinkButton from '@/components/LinkButton.vue';

export default {
  name: 'TheHeader',
  components: {
    LinkButton,
  },
  data() {
    return {
      menuItems: ['home', 'location', 'plans', 'faq', 'login'],
    };
  },
};
</script>

<style>
  .header{
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .menu {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(5, auto);
  }
</style>
