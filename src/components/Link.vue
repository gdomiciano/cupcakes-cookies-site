<template>
  <router-link class="link-button">
    <span class="icon">X</span>
    text
  </router-link>
</template>

<script>
export default {
  name: 'LinkButton',
};
</script>

<style>
    .link-button {
        background: #ee2461;
        border-radius: 40px;
        background-image: url(@/assets/global.png);
        text-indent: -9999px;
        background-repeat: no-repeat;
         border-radius: 30px;
        width: 56px;
        padding: 6px 14px 6px 30px;
        color: white;
        font-family: Signika;
        font-size: 14px;
        text-align: right;
        margin: 20px auto 10px 0;
        text-decoration: none;
        display: block;
    }
</style>
