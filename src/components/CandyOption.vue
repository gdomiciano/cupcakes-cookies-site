<template>
  <article class="option">
    <h3 class="title">Opção X</h3>
    <p class="desc">art marzipan tart pastry cake jelly-o. Sugar plum pudding macaroon liquorice I love. Pastry dessert cookie tart. I love I love topping danish.</p>
    <ul class="option-list">
      <li class="option-list-item">Candy canes cheesecake;</li>
      <li class="option-list-item">Apple pie wafer;</li>
      <li class="option-list-item">Tiramisu cupcake;</li>
      <li class="option-list-item">Lemon drops faworki;</li>
    </ul>
    <a href="" class="mais">veja mais</a>
  </article>
</template>

<script>
  export default {
    name: 'CandyOption'
  }
</script>

<style lang="scss" scoped>

.option {
  float: left;
  width: 300px;
}

.option:first-child {
  margin: 0 20px;
}

.option .title {
  color: #ee2461;
  font-size: 24px;
  font-family: SignikaBold;
  margin: 0;
}

.option .desc,
.option .option-list-item {
  color: #36414e;
  font-size: 16px;
  font-family: Tahoma;
  line-height: 18px;
}

.option .option-list {
  padding: 0;
  margin-top: 20px;
}

.option .option-list-item {
  list-style-image: url(../assets/img/icon_checked.png);
  list-style-position: inside;
}

.option .mais {
  background: #ee2461 url(../assets/img/global.png) 6px -973px no-repeat;
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

.option .mais:hover {
  box-shadow: #666666 0 0 5px;
}

</style>