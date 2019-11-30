<template>
  <div class="home">
    <banner/>

    <section class="opcoes">
      <h2>Conheça algumas opções de doces</h2>
      <candy-option v-for="option in options" :key="option.title" :title="option.title" :desc="option.desc" :list="option.list"/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import CandyOption from "@/components/CandyOption.vue";

export default {
  name: 'Home',
  components: {
    Banner,
    CandyOption
  },
  data () {
    return {
      options: [
        {
          title: 'Opção X',
          desc: 'art marzipan tart pastry cake jelly-o. Sugar plum pudding macaroon liquorice I love. Pastry dessert cookie tart. I love I love topping danish.',
          list: ['Candy canes cheesecake;', 'Apple pie wafer;', 'Tiramisu cupcake;', 'Lemon drops faworki;']
        },
        {
          title: 'Opção Y',
          desc: 'Halvah wypas pudding I love candy toffee. Jelly beans chupa chups pudding danish I love donut. I love danish bonbon jelly-o I love gummies cotton candy marzipan danish. Donut sweet pastry jujubes croissant.',
          list: ['Tootsie roll cheesecake;', 'Apple pie wafer;', 'Danish marzipan;']
        },
        {
          title: 'Opção Z',
          desc: 'Liquorice toffee marzipan lemon drops chocolate cake ice cream.',
          list: ['Chocolate marzipan jelly;', 'Sweet lollipop ice cream;', 'Soufflé jelly-o bear claw sweet;', 'Brownie pie gummi bears;', 'Jelly beans dragée']
        }
      ]
    }
  },
  mounted() {
    console.log(process.env.VUE_APP_API_KEY, this, this.axios, this.$http)
    this.$http.get('/search', {params: {q: 'chocolate'}})
      .then(function(response) {
        console.lo(response.data)
      })
    // this.$http.get('/random').then(res => console.log(res))
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding: 20px;
  overflow: hidden;
}
</style>