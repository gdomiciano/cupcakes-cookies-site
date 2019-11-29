<template>
  <section class="banner">
    <div class="slider-wrapper theme-default">
        <div id="slider" class="nivoSlider">
          <!-- <img v-for="(image, index) in images" :key="index" :src="image" alt=""/> -->
          <img src="@/assets/img/banner/01.jpg" alt=""/>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',

  data () {
    return {
      images: [
        './assets/img/banner/01.jpg',
        './assets/img/banner/02.jpg',
        './assets/img/banner/03.jpg',
        './assets/img/banner/04.jpg',
        './assets/img/banner/05.jpg'
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.banner {
  width: 100%;
  margin: 6px auto;
}

.banner .slider-wrapper {
  position: relative;
}

.banner .theme-default .nivoSlider {
  box-shadow: none;
  text-align: center;
}

.banner .slider-wrapper #slider .niv-slice,
.banner .slider-wrapper #slider .nivo-box {
  position: absolute;
  z-index: 20;
}

.banner .slider-wrapper .nivo-controlNav {
  position: absolute;
  right: 10px;
  bottom: 0px;
  z-index: 99;
  display: block;
}

.banner .nivo-controlNav a {
  background: url(../assets/img/global.png) 0 -705px;
  width: 20px;
  height: 20px;
  display: inline-block;
  margin: 0px 5px;
}

.banner .nivo-controlNav a.active {
  background-position: right -705px;
}

.banner .theme-default .nivo-directionNav a {
  background-image: url(../assets/img/global.png);
  display: block;
  width: 46px;
  height: 46px;
  opacity: 1;
  z-index: 99;
}

.banner .theme-default .nivo-directionNav .nivo-prevNav {
  background-position: 0 -206px;
}

.banner .theme-default .nivo-directionNav .nivo-nextNav {
  background-position: 0 -110px;
}
</style>
