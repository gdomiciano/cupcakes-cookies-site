<template>
  <header class="header">
    <router-link to="/">
      <img
        alt="Cupcake logo"
        src="../assets/img/logo.png"
      >
    </router-link>

    <nav>
      <link-button
        href="/"
        icon-name="home"
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

</style>
