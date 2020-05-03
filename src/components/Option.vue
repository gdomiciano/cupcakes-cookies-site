<template>
  <article class="option">
    <h3 class="option-title">
      {{ title }}
    </h3>
    <p class="option-description">
      {{ description }}
    </p>
    <ul class="option-list">
      <li
        v-for="(option, index) in options"
        :key="index"
        class="option-list-item"
      >
        {{ option }}
      </li>
    </ul>
    <link-button
      href="/"
      icon-name="plus"
      text="See more"
    />
  </article>
</template>

<script>
import LinkButton from '@/components/LinkButton.vue';

export default {
  name: 'Option',
  components: {
    LinkButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
    .option-title {
      color: #ee2461;
      font-size: 24px;
      font-family: SignikaBold;
    }

    .option-description,
    .option-list-item {
      color: #36414e;
      line-height: 18px;
    }

    .option-list {
      padding: 0;
      margin-top: 20px;
    }

    .option-list-item {
      list-style-image: url(../assets/img/icon_checked.png);
      list-style-position: inside;
    }
</style>
