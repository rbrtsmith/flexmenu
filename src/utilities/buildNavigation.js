const buildNavigation = categories => {
  return categories.map(category => {
    return {
      text: category,
      collapsed: true,
      width: 0
    };
  });
};

export default buildNavigation;
