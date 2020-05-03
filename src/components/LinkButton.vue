<template>
  <a
    :href="href"
    class="link-button"
  >
    <span :class="`icon icon-${iconName}`" />
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    href: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
  .link-button {
    background: #ee2461;
    border-radius: 50%;
    padding: 12px;
    color: white;
    font-family: Signika;
    font-size: 14px;
    text-decoration: none;
    display: flex;
  }

  .rounded {
    border-radius: 30px;
  }

  .icon {
    background-image: url(../assets/img/global.png);
    background-repeat: no-repeat;
    width: 18px;
    height: 18px;
  }

  .icon-next {
    background-position: 0 -110px;
  }

  .icon-previus {
    background-position: 0 -206px;
  }

  .icon-arrowRight {
    background-position: 0 -626px;
  }

  .icon-checked {
    background-position: 0 -775px;
  }

  .icon-facebook {
    width: 32px;
    height: 32px;
    background-position: 0 -546px;
  }

  .icon-faq {
    background-position: center -910px;
  }

  .icon-heart {
    width: 60px;
    height: 60px;
    background-position: 0 0;
  }

  .icon-home {
    background-position: center -1114px;
  }

  .icon-linkedin {
    width: 32px;
    height: 32px;
    background-position: 0 -382px;
  }

  .icon-login {
    background-position: center -1046px;
  }

  .icon-location {
    background-position: center -842px;
  }

  .icon-plans {
    background-position: center -1182px;
  }

  .icon-plus {
    background-position: 0 -978px;
  }

  .icon-twitter {
    width: 32px;
    height: 32px;
    background-position: 0 -302px;
  }

  .icon-bullet {
    background-position: 0 -705px;
  }

  .icon-check {
    background-position: 0 -462px;
  }

</style>
