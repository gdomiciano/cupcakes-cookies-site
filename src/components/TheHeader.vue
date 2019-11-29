<template>
  <header class="header" role="banner">
    <h1 class="logo"><router-link to="/">Cupcakes & Cookies</router-link></h1>
    <nav role="navigation" class="nav">
      <ul>
        <li class="nav-item home"><router-link to="/">Home</router-link></li>
        <li class="nav-item oQueE"><router-link to="/">O que é</router-link></li>
        <li class="nav-item planos"><router-link to="/">Planos</router-link></li>
        <li class="nav-item faq"><router-link to="/">FAQ</router-link></li>
        <li class="nav-item login">
          <router-link to="/">Login</router-link>
          <div>
            <form action="">
              <fieldset>
                <p><strong>Faça o login</strong></p>
                <p>
                  <label for="usuario">Usuário</label>
                  <input type="text" id="usuario" placeholder="Nome do usuário" name="usuario" />
                </p>
                <p>
                  <label for="senha">Senha</label>
                  <input type="password" id="senha" placeholder="Senha" name="senha" /></p>
                <p class="lembrar">
                  <input type="checkbox" id="lembrar" name="lembrar" checked="checked" />
                  <label for="lembrar" class="active">lembrar login</label>
                  <a href="" class="esqueci">esqueci minha senha</a>
                </p>
                <p class="entrar"><input type="submit" value="Entrar"></p>
              </fieldset>
            </form>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="scss" scoped>

.header { // .header{}
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 10px 20px;
}

.logo {
  margin: 0;

  a {
    display: block;
    height: 82px;
    width: 282px;
    background: url(../assets/img/logo.png) 0 0 no-repeat;
    text-indent: -9999px;
  }
}

.nav {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-end;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    padding:0;
    margin: 0;
  }
}

.nav .nav-item {
  background: #ee2461;
  border-radius: 40px;
  list-style: none;
  width: fit-content;
}

@media (min-width: 768px) and (max-width: 1023px) {
  //tablet
  .header { // .header{}
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    padding: 15px;
  }
 }

@media (min-width: 1024px) {
  //dektop
  .header {
    grid-template-areas:
      'logo . menu';
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr auto;
    padding: 20px;
  }

  .logo {
    grid-area: logo;
  }

  .nav {
    grid-area: menu
  }
}

/*menu*/


.nav .nav-item:hover {
  box-shadow: #555555 0 0 6px;
}

.nav .nav-item:first-child {
  margin: 0;
}

.nav .nav-item a {
  background-image: url(../assets/img/global.png);
  text-indent: -9999px;
  width: 42px;
  height: 42px;
  display: block;
  background-repeat: no-repeat;
  cursor: pointer;
}

.nav .nav-item.home a {
  background-position: center -1102px;
}

.nav .nav-item.oQueE a {
  background-position: center -830px;
}

.nav .nav-item.planos a {
  background-position: center -1170px;
}

.nav .nav-item.faq a {
  background-position: center -898px;
}

.nav .nav-item.login {
  position: relative;
}

.nav .nav-item.login a {
  background-position: center -1034px;
}

.nav .nav-item.login div {
  display: none;
}

.nav .nav-item.login:hover div {
  display: block;
  position: absolute;
  top: 2px;
  right: 0;
  background: #ee2461;
  border-radius: 10px;
  box-shadow: #666666 0 0 6px;
  width: 270px;
  height: 214px;
  padding: 10px;
  z-index: 50;
}

.nav .nav-item.login:hover div form fieldset p {
  margin-top: 5px;
}

.nav .nav-item.login:hover div form fieldset p strong {
  color: white;
  font-family: Signika;
  font-size: 18px;
  display: block;
  width: 100%;
  background: url(../assets/img/global.png) 230px -1046px no-repeat;
  border-bottom: #b8053b 1px solid;
  font-weight: normal;
  padding-bottom: 5px;
}

.nav .nav-item.login:hover div form fieldset p label {
  color: white;
  font-size: 14px;
  font-family: Tahoma;
  display: block;
}

.nav .nav-item.login:hover div form fieldset p input[type="text"],
.nav .nav-item.login:hover div form fieldset p input[type="password"] {
  border-radius: 5px;
  border: none;
  background: #b8053b;
  box-shadow: 1px 4px 0px 1px #93042f inset;
  padding: 5px;
  font-family: Tahoma;
  font-style: italic;
  width: 260px;
  color: #ffccdc;
  margin-top: 5px;
}

.nav .nav-item.login:hover div form fieldset .lembrar {
  overflow: hidden;
}

.nav .nav-item.login:hover div form fieldset .lembrar [type="checkbox"] {
  display: none;
}

.nav .nav-item.login:hover div form fieldset .lembrar label {
  padding-left: 20px;
  background: url(../assets/img/global.png) 0 -482px no-repeat;
  height: 20px;
  overflow: hidden;
  float: left;
}

.nav .nav-item.login:hover div form fieldset .lembrar label.active {
  background-position: 0px -462px;
}

.nav .nav-item.login:hover div form fieldset .lembrar a {
  float: right;
  text-indent: 0px;
  text-decoration: underline;
  color: white;
  background: none;
  width: 114px;
  font-family: tahoma;
  font-size: 12px;
  height: auto;
}

.nav .nav-item.login:hover div form fieldset .entrar {
  clear: both;
}

.nav .nav-item.login:hover div form fieldset .entrar input[type="submit"] {
  background: #b8053b url(../assets/img/global.png) 7px -620px no-repeat;
  border-radius: 30px;
  border: none;
  width: 104px;
  padding-right: 10px;
  color: white;
  font-family: Signika;
  font-size: 18px;
  text-align: right;
  height: 40px;
}

.nav .nav-item.login:hover div form fieldset .entrar input[type="submit"]:hover {
  box-shadow: #666666 0 0 6px;
}
</style>