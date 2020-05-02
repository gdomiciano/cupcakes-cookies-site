<template>
  <footer class="footer">
    <div class="institutional">
      <small>Cupcakes & Cookies 2013. Todos os direitos reservados.</small>
      <small>Conheça a nossa <a href="">Política de Privacidade.</a></small>
    </div>
    <div class="social-medias">
      <link-button
        href="https://twitter.com"
        icon-name="twitter"
      />
      <link-button
        href="http://facebook.com"
        icon-name="facebook"
      />
      <link-button
        href="http://br.linkedin.com/"
        icon-name="linkedin"
      />
    </div>
  </footer>
</template>

<script>
import LinkButton from '@/components/LinkButton.vue';

export default {
  name: 'TheFooter',
  components: {
    LinkButton,
  },
};
</script>

<style>
.footer {
  padding: 30px 20px;
  background: #ee2461;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.institutional {
    display: flex;
    flex-direction: column;
    color: #fff;
}
.social-medias {
  display: flex;
}
</style>
