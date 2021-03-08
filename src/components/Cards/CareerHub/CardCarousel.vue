<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
    
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
      return{
        settings: {
          "arrows": false,
          "dots": true,
          "infinite": true,
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "autoplay": true,
          "speed": 2000,
          "autoplaySpeed": 2000,
          "cssEase": "linear"
        }
      }
    }
}
</script>
