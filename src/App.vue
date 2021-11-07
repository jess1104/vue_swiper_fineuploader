<template>
  <div id="app" class="app">
    <div class="swiper mySwiper swiper-container">
      <div class="swiper-wrapper">
        <div v-for="image in this.imagesData" :key="`${image.id}-swiper`" class="swiper-slide">
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
        request: {
          endpoint: "https://api.imgbb.com/1/upload",
          inputName: "image",
          params: {
            key: "37b80921b067cb393c9db344fdd47468",
          },
        },
      },
    });
    uploader.on("complete", (_id, _name, res) => {
      if (res.status == 200) {
        const url = res.data.url;
        console.log(url);
      }
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
img {
  width: 100%;
}
.sm-pics {
  width: 100px;
}
</style>
<style>
.vue-fine-uploader-gallery-file {
  height: auto;
}
</style>
