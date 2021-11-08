<template>
  <div class="container">
    <div class="swiper mySwiper swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="image in this.imagesData"
          :key="`${image.id}-swiper`"
          class="swiper-slide"
        >
          <img :src="image.url" alt="" />
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
    <ul>
      <li v-for="(image, index) in images" :key="`${image.id}-list`">
        <img class="sm-pics" :src="image.url" alt="" />
        <button @click="upItem(index)">
          <i class="fas fa-chevron-up"></i>
        </button>
        <button @click="downItem(index)">
          <i class="fas fa-chevron-down"></i>
        </button>
        <button @click="deleteImg(image.id)">
          <i class="far fa-trash-alt"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination]);
export default {
  data() {
    return {
      swiper: null,
    };
  },
  watch: {
    images() {
      if (this.swiper) {
        this.swiper.destroy();
        // 有更新過 images 的內容，等畫面渲染完成後
        // 使用渲染後的 HTML 初始化 Swiper
        this.$nextTick(() => {
          this.initSwiper();
        });
      }
    },
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
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-top: 10px;
  padding: 5px 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px #0078b7 solid;
}
button {
  width: 40px;
  height: 30px;
  border-radius: 5px;
  border: 0;
  margin: 0;
  padding: 0;
  outline: none;
  color: #fff;
  cursor: pointer;
  background-color: #0078b7;
}
.swiper-slide img {
  width: 100%;
}
.sm-pics {
  width: 100px;
}
</style>
