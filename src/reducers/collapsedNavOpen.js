const collapseNavOpen = (state = 0, action) => {
  switch (action.type) {
    case 'TOGGLE_COLLAPSED_NAV' :
      return !state;
    default :
      return state;
  }
};

export default collapseNavOpen;
