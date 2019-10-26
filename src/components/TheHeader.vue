<template>
  <header role="banner">
    <h1 class="logo"><router-link to="/">Cupcakes & Cookies</router-link></h1>
    <nav role="navigation">
      <ul>
        <li class="home"><router-link to="/">Home</router-link></li>
        <li class="oQueE"><router-link to="/">O que é</router-link></li>
        <li class="planos"><router-link to="/">Planos</router-link></li>
        <li class="faq"><router-link to="/">FAQ</router-link></li>
        <li class="login">
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

<style>
/*HEADER*/
.logo {
  float: left;
  margin: 40px 0px;
}

.logo a {
  display: block;
  height: 82px;
  width: 282px;
  background: url(../assets/img/logo.png) 0 0 no-repeat;
  text-indent: -9999px;
}

/*menu*/
nav {
  float: right;
  margin: 60px 0px 40px;
}

nav ul li {
  background: #ee2461;
  border-radius: 40px;
  float: left;
  margin-left: 10px;
}

nav ul li:hover {
  box-shadow: #555555 0 0 6px;
}

nav ul li:first-child {
  margin: 0;
}

nav ul li a {
  background-image: url(../assets/img/global.png);
  text-indent: -9999px;
  width: 42px;
  height: 42px;
  display: block;
  background-repeat: no-repeat;
  cursor: pointer;
}

nav ul li.home a {
  background-position: center -1102px;
}

nav ul li.oQueE a {
  background-position: center -830px;
}

nav ul li.planos a {
  background-position: center -1170px;
}

nav ul li.faq a {
  background-position: center -898px;
}

nav ul li.login {
  position: relative;
}

nav ul li.login a {
  background-position: center -1034px;
}

nav ul li.login div {
  display: none;
}

nav ul li.login:hover div {
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

nav ul li.login:hover div form fieldset p {
  margin-top: 5px;
}

nav ul li.login:hover div form fieldset p strong {
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

nav ul li.login:hover div form fieldset p label {
  color: white;
  font-size: 14px;
  font-family: Tahoma;
  display: block;
}

nav ul li.login:hover div form fieldset p input[type="text"],
nav ul li.login:hover div form fieldset p input[type="password"] {
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

nav ul li.login:hover div form fieldset .lembrar {
  overflow: hidden;
}

nav ul li.login:hover div form fieldset .lembrar [type="checkbox"] {
  display: none;
}

nav ul li.login:hover div form fieldset .lembrar label {
  padding-left: 20px;
  background: url(../assets/img/global.png) 0 -482px no-repeat;
  height: 20px;
  overflow: hidden;
  float: left;
}

nav ul li.login:hover div form fieldset .lembrar label.active {
  background-position: 0px -462px;
}

nav ul li.login:hover div form fieldset .lembrar a {
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

nav ul li.login:hover div form fieldset .entrar {
  clear: both;
}

nav ul li.login:hover div form fieldset .entrar input[type="submit"] {
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

nav ul li.login:hover div form fieldset .entrar input[type="submit"]:hover {
  box-shadow: #666666 0 0 6px;
}
</style>