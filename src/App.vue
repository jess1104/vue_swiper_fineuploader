<template>
  <div id="app" class="app">
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
    <ul>
      <li v-for="(image, index) in images" :key="`${image.id}-list`">
        <img class="sm-pics" :src="image.file" alt="" />
        <button @click="upItem(index)">🔼</button>
        <button @click="downItem(index)">🔽</button>
        <button @click="deleteImg(image.id)">❌</button>
      </li>
    </ul>
    <Gallery :uploader="uploader" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import FineUploaderTraditional from "fine-uploader-wrappers";
import Gallery from "vue-fineuploader/gallery";

Swiper.use([Navigation, Pagination]);

export default {
  components: {
    Gallery,
  },
  data() {
    const uploader = new FineUploaderTraditional({
      options: {
        deleteFile: {
          enabled: true,
          endpoint: "my/upload/endpoint",
        },
        request: {
          endpoint: "my/upload/endpoint",
        },
      },
    });
    return {
      swiper: null,
      uploader,
    };
  },
  computed: {
    ...mapState(["imagesData"]),
    images() {
      return this.imagesData.map((item) => {
        return item;
      });
    },
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    ...mapActions(["deleteImg", "upImg", "downImg"]),
    initSwiper() {
      this.swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    },
    upItem(upIndex) {
      if (upIndex <= 0) {
        return;
      }
      this.upImg(upIndex);
    },
    downItem(downIndex) {
      if (downIndex >= this.images.length - 1) {
        return;
      }
      this.downImg(downIndex);
    },
  },
};
</script>
<style scoped>
button {
  border: 0;
  margin-right: 10px;
  padding: 0;
  outline: none;
  cursor: pointer;
}
.swiper {
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
}
.sm-pics {
  width: 100px;
}
</style>
