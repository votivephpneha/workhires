<template>
<section id="featured-services" class="featured-services">
      <div class="container">
      <div class="row gy-4">
          <div class="col-md-12 d-flex justify-content-between align-items-center mb-5 p-0">
          <div class="heading-tow">
    <h1>Browse talent by category </h1>
    <p>Get some Inspirations from 1800+ skills</p>
      </div>
     <button class="btn-primary all-service"> All Services <img src="../assets/images/Group.png"> </button>
    </div>

     <div class="swiper-container talant-slider">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="box-slide">
                <div class="skill-devlop">
          <p> 1.853 skills</p>
          <p> Development & IT</p></div>
              </div>
             </div>
                   <div class="swiper-slide">
              <div class="box-slide">
                <div class="skill-devlop">
          <p>1.853 skills</p>
          <p> Design & 
Creative</p></div>
              </div>
             </div>
                   <div class="swiper-slide">
              <div class="box-slide">
                <div class="skill-devlop">
          <p> 1.853 skills</p>
          <p> Digital 
Marketing</p></div>
              </div>
             </div>
                   <div class="swiper-slide">
              <div class="box-slide">
                <div class="skill-devlop">
          <p> 1.853 skills</p>
          <p>Writing & 
Translation</p></div>
              </div>
             </div>
                   <div class="swiper-slide">
              <div class="box-slide">
                <div class="skill-devlop">
          <p> 1.853 skills</p>
          <p>Music & 
Audio</p></div>
              </div>
             </div>
                   <div class="swiper-slide">
              <div class="box-slide">
                <div class="skill-devlop">
          <p> 1.853 skills</p>
          <p> Development & IT</p></div>
              </div>
             </div>
            <div class="swiper-pagination"></div>
        </div>

        <!-- If we need navigation buttons -->

      <div class="swiper-button-prev prpfile-ckrl"> <div class="cirlcle-sbk"> <i class='bx bx-chevron-left'></i> </div></div>
        <div class="swiper-button-next">  <div class="cirlcle-sbk"> <i class='bx bx-chevron-right'></i> </div></div>
    </div>


  </div>
</div>
</section>


</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.min.css';

export default {
  name: "Talant",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
}
</script>