import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';

import VisibleNavigationItemsContainer from './VisibleNavigationItemsContainer';
import BurgerIcon from '../icons/BurgerIcon';

const MenuButton = ({ toggleCollapsedNav }) => (
  <button className="c-menu-button" onClick={toggleCollapsedNav}>
    <MediaQuery query='(min-device-width: 601px)'>
      <div>More ▼</div>
    </MediaQuery>
    <MediaQuery query='(max-device-width: 600px)'>
      <div className="c-burger-icon">
        <BurgerIcon />
      </div>
    </MediaQuery>
  </button>
);

MenuButton.propTypes = {
  toggleCollapsedNav: PropTypes.func.isRequired
};

export default MenuButton;
