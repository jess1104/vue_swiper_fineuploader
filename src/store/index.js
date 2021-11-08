import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imagesData: [
      {
        id: 123,
        url: "https://ppt.cc/fGBeox@.png",
      },
      {
        id: 456,
        url: "https://ppt.cc/fWZz8x@.jpg",
      },
      {
        id: 789,
        url: "https://ppt.cc/fP7RDx@.jpg",
      },
    ],
  },
  actions,
  mutations,
});
