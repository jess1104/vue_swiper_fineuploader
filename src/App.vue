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
        // deleteFile: {
        //   enabled: true,
        //   endpoint: "https://api.imgbb.com/1/upload",
        //   inputName: "image",
        //   params: {
        //     key: "37b80921b067cb393c9db344fdd47468",
        //   },
        // },
        // cors: {
        //   expected: true,
        // },
        // chunking: {
        //   enabled: true,
        // },
        // resume: {
        //   enabled: true,
        // },
        // deleteFile: {
        //   enabled: true,

        //   endpoint:
        //     "https://api.imgbb.com/1/upload",
        // },
      },
    });

    return {
      uploader,
      state: {
        submittedFiles: [],
      },
    };
  },
  mounted() {
    this.uploader.on("complete", (_id, _name, res) => {
      if (res.status == 200) {
        const urls = res.data.url;
        console.log(res.data);
        const submittedFiles = this.state.submittedFiles;
        submittedFiles.push({ id: Date.now(), url: urls });
        // Actions
        this.addImgs(submittedFiles);
      }
    });
  },

  methods: {
    ...mapActions(["addImgs"]),

    uploadImg() {
      const newImg = this.urlsArr.map((item) => {
        return { item, id: Date.now() };
      });
      console.log(newImg);
    },
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
