<template>
  <div class="home">
    <banner />
    <section class="options">
      <h2 class="section-title">
        Conheça algumas opções de doces
      </h2>
      <option-card
        v-for="option in options"
        :key="option.title"
        :title="option.title"
        :description="option.description"
        :options="option.optionsList"
      />
    </section>
    <section class="trial">
      <link-button
        href=""
        text="Faça um teste!"
        icon-name="heart"
      />
      <p>{{ tryOutText }}</p>
    </section>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Option from '@/components/Option.vue';
import LinkButton from '@/components/LinkButton.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    OptionCard: Option,
    LinkButton,
  },
  data() {
    return {
      tryOutText: 'Cupcake ipsum dolor sit amet carrot cake marshmallow wypas. Muffin lemon drops I love caramels chocolate bar.',
      options: [
        {
          title: 'Option X',
          description: 'art marzipan tart pastry cake jelly-o. Sugar plum pudding macaroon liquorice I love. Pastry dessert cookie tart. I love I love topping danish.',
          optionsList: [
            'Candy canes cheesecake;',
            'Apple pie wafer;',
            'Tiramisu cupcake;',
            'Lemon drops faworki;',
          ],
        },
        {
          title: 'Option Y',
          description: 'Halvah wypas pudding I love candy toffee. Jelly beans chupa chups pudding danish I love donut. I love danish bonbon jelly-o I love gummies cotton candy marzipan danish. Donut sweet pastry jujubes croissant.',
          optionsList: [
            'Candy canes cheesecake;',
            'Apple pie wafer;',
            'Tiramisu cupcake;',
          ],
        },
        {
          title: 'Option Z',
          description: 'Liquorice toffee marzipan lemon drops chocolate cake ice cream',
          optionsList: [
            'Candy canes cheesecake;',
            'Apple pie wafer;',
            'Tiramisu cupcake;',
            'Lemon drops faworki;',
            'Brownie pie gummi bears;',
            'Jelly beans dragée.',
          ],
        },
      ],
    };
  },
};
</script>
<style>
  .home {
    margin-bottom: 20px;
    padding: 20px;
  }
  .options {
    display: grid;
    grid-gap: 20px;
    grid-template-rows: auto 1fr;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 20px;
  }
  .section-title {
    color: #b8053b;
    font-family: SignikaBold;
    font-size: 28px;
    grid-column: span 3;
  }
</style>
