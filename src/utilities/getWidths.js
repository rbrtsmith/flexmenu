const getWidths = function(navItems) {
  const getWidth = key => navItems[key].offsetWidth;
  return Object.keys(navItems).map(getWidth);
};

export default getWidths;
