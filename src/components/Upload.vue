<template>
  <div class="container">
    <Gallery :uploader="uploader" />
  </div>
</template>

<script>
import FineUploaderTraditional from "fine-uploader-wrappers";
import Gallery from "vue-fineuploader/gallery";

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
      uploader,
    };
  },
};
</script>
