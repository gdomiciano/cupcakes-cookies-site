<template>
  <div class="home">
    <banner msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";

export default {
  name: "home",
  components: {
    Banner
  }
};
</script>
