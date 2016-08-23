import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';

import VisibleNavigationItemsContainer from './VisibleNavigationItemsContainer';
import BurgerIcon from '../icons/BurgerIcon';

const MenuButton = ({ toggleCollapsedNav, collapsedNavOpen }) => (
  <button className={`c-menu-button ${collapsedNavOpen ? 'is-active' : ''}`} onClick={toggleCollapsedNav}>
    <MediaQuery query='(min-device-width: 601px)'>
      <div>More { collapsedNavOpen ? '▲' : '▼' }</div>
    </MediaQuery>
    <MediaQuery query='(max-device-width: 600px)'>
      <div className="c-burger-icon">
        <BurgerIcon />
      </div>
    </MediaQuery>
  </button>
);

MenuButton.propTypes = {
  toggleCollapsedNav: PropTypes.func.isRequired,
  collapsedNavOpen: PropTypes.bool.isRequired
};

export default MenuButton;
