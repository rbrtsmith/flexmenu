export const addWidths = payload => ({
  type: 'ADD_WIDTHS',
  payload
});

export const storeNavWrapperWidth = payload => ({
  type: 'SET_WIDTH',
  payload
});

export const setCollapsedItems = payload => ({
  type: 'SET_COLLAPSED_NAV_ITEMS',
  payload
});

export const toggleCollapsedNav = () => ({
  type: 'TOGGLE_COLLAPSED_NAV'
});

export const setCollapsedNavHeight = payload => ({
  type: 'SET_COLLAPSED_NAV_HEIGHT',
  payload
});
