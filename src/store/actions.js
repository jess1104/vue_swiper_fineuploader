export default {
  addImgs({ commit }, images) {
    commit("ADD_IMGS", images);
  },
  deleteImg({ commit }, imgId) {
    console.log(imgId);
    commit("DELETE_IMG", imgId);
  },
  upImg({ commit }, upIndex) {
    commit("UP_IMG", upIndex);
  },
  downImg({ commit }, downIndex) {
    commit("DOWN_IMG", downIndex);
  },
};
