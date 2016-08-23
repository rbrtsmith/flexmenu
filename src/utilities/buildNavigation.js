const buildNavigation = categories => {
  return categories.map(category => {
    return {
      text: category.text,
      color: category.color,
      collapsed: true,
      width: 0
    };
  });
};

export default buildNavigation;
