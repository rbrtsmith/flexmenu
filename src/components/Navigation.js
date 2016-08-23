import React, { PropTypes, Component } from 'react';
import { debounce } from 'lodash';

import VisibleNavigation from './VisibleNavigation';
import CollapsedNavigationContainer from './CollapsedNavigationContainer';

class Navigation extends Component {

  checkWidths() {
    let remainingNavWrapperWidth = this.props.navWrapperWidth;
    const itemsThatFit = [];
    this.props.navigation.forEach(item => {
      remainingNavWrapperWidth -= item.width;
      if (remainingNavWrapperWidth > 10) {
        itemsThatFit.push(item);
      }
    });
    this.props.setCollapsedItems(itemsThatFit);
  }

  componentDidMount() {
    setTimeout(() => {
      this.checkWidths.call(this);
    }, 10);
    window.addEventListener('resize', debounce(this.checkWidths, 5).bind(this));
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidths);
  }

  render() {
    const { navigation, addWidths } = this.props;
    const isCollapsed = component => component.collapsed;
    const visibleComponents = navigation.filter(component => !isCollapsed(component));
    const collapsedComponents = navigation.filter(isCollapsed);
    return (
      <div>
        <VisibleNavigation navigation={visibleComponents} showMenuButton={collapsedComponents.length} />
        <CollapsedNavigationContainer navigation={collapsedComponents} addWidths={addWidths} />
      </div>
    );
  }
}

Navigation.propTypes = {
  navigation: PropTypes.array.isRequired,
  addWidths: PropTypes.func.isRequired,
  navWrapperWidth: PropTypes.number.isRequired
};

export default Navigation;