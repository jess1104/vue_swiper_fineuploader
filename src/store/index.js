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
        file: "https://ppt.cc/fGBeox@.png",
      },
      {
        id: 456,
        file: "https://ppt.cc/fWZz8x@.jpg",
      },
      {
        id: 789,
        file: "https://ppt.cc/fP7RDx@.jpg",
      },
    ],
  },
  actions,
  mutations,
});
