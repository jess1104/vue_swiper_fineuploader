export default {
  addImgs({ commit }, imgUrl) {
    let image = { id: Date.now(), url: imgUrl };
    commit("ADD_IMG", image);
  },
  deleteImg({ commit }, imgId) {
    commit("DELETE_IMG", imgId);
  },
  upImg({ commit }, upIndex) {
    commit("UP_IMG", upIndex);
  },
  downImg({ commit }, downIndex) {
    commit("DOWN_IMG", downIndex);
  },
};
