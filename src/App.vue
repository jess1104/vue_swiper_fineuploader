<template>
  <div id="app" class="app">
    <Swiper />
    <Gallery :uploader="uploader" />
  </div>
</template>

<script>
import FineUploaderTraditional from "fine-uploader-wrappers";
import Gallery from "vue-fineuploader/gallery";
import Swiper from "./components/Swiper.vue";
import { mapActions } from "vuex";

export default {
  components: {
    Gallery,
    Swiper,
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

    return {
      uploader,
    };
  },
  mounted() {
    this.uploader.on("complete", (_id, _name, res) => {
      if (res.status == 200) {
        const url = res.data.url;
        this.addImgs(url);
      }
    });
  },

  methods: {
    ...mapActions(["addImgs"]),
  },
};
</script>

<style>
.app {
  margin: auto;
  margin-top: 50px;
  width: 30%;
}
.vue-fine-uploader-gallery-file {
  height: auto;
}
</style>
