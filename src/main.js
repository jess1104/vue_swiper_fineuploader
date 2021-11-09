import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
// 記得新增官網沒寫
import swiper, { Navigation, Pagination, Autoplay } from "swiper";
// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
// 記得新增官網沒寫
swiper.use([Navigation, Pagination, Autoplay]);
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
