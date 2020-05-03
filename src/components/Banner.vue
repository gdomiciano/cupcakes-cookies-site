<template>
  <div class="banner">
    <img
      :src="require('@/assets/img/banner/01.jpg')"
      alt=""
      class="banner-image"
    >
  </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style>
.banner {
    margin-bottom: 20px;
}
.banner-image {
    width: 100%;
}
</style>
