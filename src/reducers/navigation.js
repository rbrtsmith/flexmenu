const addWidth = (navItem, index, action) => ({
  ...navItem,
  width: action.payload[index]
});

const navigation = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WIDTHS' :
      return state.map((navItem, i) => addWidth(navItem, i, action));
    case 'SET_COLLAPSED_NAV_ITEMS' :
      return state.map((navItem, index) => {
        if (index < action.payload.length) {
          return {
            ...navItem,
            collapsed: false
          };
        }
        return {
          ...navItem,
          collapsed: true
        };
      });
    default :
      return state;
  }
};


export default navigation;
