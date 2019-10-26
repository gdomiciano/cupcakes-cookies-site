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

</style>