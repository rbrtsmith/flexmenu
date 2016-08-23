const navWrapperWidth = (state = 0, action) => {
  switch (action.type) {
    case 'SET_WIDTH' :
      return action.payload;
    default :
      return state;
  }
};

export default navWrapperWidth;
