<template>
  <footer role="contentinfo" class="footer">
    <div class="institutional">
      <p>Cupcakes & Cookies 2013. Todos os direitos reservados.</p>
      <p>Conheça a nossa <a href="">Política de Privacidade.</a></p>
    </div>
    <div class="social">
      <a href="https://twitter.com" class="tw"></a>
      <a href="http://facebook.com" class="fb"></a>
      <a href="http://br.linkedin.com/" class="in"></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>

.footer {
  display: grid;
  padding: 46px 20px 40px;
  background: #ee2461;
  grid-gap: 10px;
  grid-template-columns: 3fr 1fr;
}

.footer .institutional {
  font-size: 14px;
  font-style: italic;
}

.footer .institutional p {
  color: white;
  font-family: Tahoma;
}

.footer .institutional a {
  color: white;
  text-decoration: underline;
  font-family: Tahoma;
}

.footer .social {
  overflow: hidden;
  margin-right: 20px;
}

.footer .social a {
  display: block;
  width: 31px;
  height: 31px;
  background: url(../assets/img/global.png) 0 -302px no-repeat;
  float: left;
  margin: 5px;
  border-radius: 20px;
}

.footer .social a.fb {
  background-position: 0 -546px;
}

.footer .social a.in {
  background-position: 0 -382px;
}

.footer .social a:hover {
  box-shadow: #666666 0 0 5px;
}
</style>