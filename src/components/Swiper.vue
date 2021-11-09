<template>
  <div class="container">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="image in imagesData" :key="`${image.id}-swiper`">
        <img :src="image.url" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <ul>
      <li v-for="(image, index) in imagesData" :key="`${image.id}-list`">
        <img class="sm-pics" :src="image.url" />
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

export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  computed: {
    ...mapState(["imagesData"]),
  },

  methods: {
    ...mapActions(["deleteImg", "upImg", "downImg"]),

    upItem(upIndex) {
      if (upIndex <= 0) {
        return;
      }
      this.upImg(upIndex);
    },
    downItem(downIndex) {
      if (downIndex >= this.imagesData.length - 1) {
        return;
      }
      this.downImg(downIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
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
