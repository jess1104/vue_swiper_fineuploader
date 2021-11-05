<template>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div
        v-for="image in this.imagesData"
        :key="`${image.id}-swiper`"
        class="swiper-slide"
      >
        <img :src="image.file" alt="" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
// import Swiper, { Navigation, Pagination } from "swiper";
// import "swiper/swiper-bundle.min.css";
// Swiper.use([Navigation, Pagination]);

// export default {
//   data() {
//     return {
//       swiper: null,
//     };
//   },
//   computed: {
//     ...mapState(["imagesData"]),
//     images() {
//       return this.imagesData.map((item) => {
//         return item;
//       });
//     },
//   },
//   mounted() {
//     this.initSwiper();
//   },
//   methods: {
//     initSwiper() {
//       this.swiper = new Swiper(".mySwiper", {
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//       });
//     },
//   },
// };
</script>
<style scoped>
/* .swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
img {
  width: 100%;
} */
</style>
