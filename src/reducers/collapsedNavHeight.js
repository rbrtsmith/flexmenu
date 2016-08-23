const collapsedNavHeight = (state = 0, action) => {
  switch (action.type) {
    case 'SET_COLLAPSED_NAV_HEIGHT' :
      return action.payload;
    default :
      return state;
  }
};

export default collapsedNavHeight;
