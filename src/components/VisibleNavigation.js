import React, { PropTypes } from 'react';

import VisibleNavigationItemsContainer from './VisibleNavigationItemsContainer';
import MenuButtonContainer from './MenuButtonContainer';
import SearchForm from './SearchForm';
import BBCIcon from '../icons/BBCIcon';

const VisibleNavigation = ({ navigation, showMenuButton }) => (
  <div className="c-visible-navigation">
    <div className="o-site-wrap o-site-wrap--padding">
      <div className="o-flag">
        <div className="o-flag__body">
          <div className="o-flag">
            <div className="o-flag__component o-flag__component--nowrap">
              <div className="c-site-logo">
                <BBCIcon />
              </div>
            </div>
            <div className="o-flag__body u-soft-sides">
              <VisibleNavigationItemsContainer navItems={navigation} />              
            </div>
          </div>
        </div>
        <div className="o-flag__component o-flag__component--nowrap">
          <ul className="o-inline-list">
              {!!showMenuButton &&
                <li className="o-inline-list__item">
                  <MenuButtonContainer />
                </li>
              }
            <li className="o-inline-list__item">
              <SearchForm />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

VisibleNavigation.propTypes = {
  navigation: PropTypes.array,
  showMenuButton: PropTypes.number.isRequired
};

export default VisibleNavigation;
