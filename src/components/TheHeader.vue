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
        href="/"
        icon-name="home"
      />
      <link-button
        href="/about"
        icon-name="location"
      />
      <link-button
        href="/"
        icon-name="plans"
      />
      <link-button
        href="/"
        icon-name="faq"
      />
      <link-button
        href="/"
        icon-name="login"
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
