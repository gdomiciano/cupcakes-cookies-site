<template>
  <section class="about">
    <h1 class="section-title">
      This is another page
    </h1>

    <img
      v-if="imgURL"
      :src="imgURL"
      class="picture"
      alt="cute dog"
    >
    <p
      v-else
      class="error"
    >
      {{ errorMsg }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      imgURL: '',
      errorMsg: '',
    };
  },
  mounted() {
    this.$axios
      .get('https://dog.ceo/api/breeds/image/randm')
      .then((response) => {
        this.imgURL = response.data.message;
      })
      .catch((error) => {
        console.error(error);
        this.errorMsg = error.message;
      });
  },
};
</script>

<style>

  .about{
    margin-bottom: 20px;
    padding: 20px;
    display: grid;
    grid-gap: 20px;
  }

  .section-title {
    color: #b8053b;
    font-family: Signika;
    font-weight: 700;
    font-size: 28px;
    grid-column: span 3;
  }

  .error{
    color: red;
  }
</style>
