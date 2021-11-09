export default {
  ADD_IMG(state, image) {
    state.imagesData.push(image);
  },
  DELETE_IMG(state, imgId) {
    state.imagesData = state.imagesData.filter((item) => {
      return item.id !== imgId;
    });
  },
  UP_IMG(state, upIndex) {
    state.imagesData = state.imagesData.map((item, index) => {
      if (index === upIndex - 1) {
        return state.imagesData[upIndex];
      }
      if (index === upIndex) {
        return state.imagesData[upIndex - 1];
      }
      return item;
    });
  },
  DOWN_IMG(state, downIndex) {
    state.imagesData = state.imagesData.map((item, index) => {
      if (index === downIndex + 1) {
        return state.imagesData[downIndex];
      }
      if (index === downIndex) {
        return state.imagesData[downIndex + 1];
      }
      return item;
    });
  },
};
