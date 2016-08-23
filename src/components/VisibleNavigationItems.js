import React, { PropTypes, Component } from 'react';
import { debounce } from 'lodash';

import getWidths from '../utilities/getWidths';


class VisibleNavigationItems extends Component {
  getWrapperWidth() {
    const width = getWidths({
      ['items-wrapper']: this.refs['items-wrapper']
    });
    this.props.storeNavWrapperWidth(width[0]);
  }

  componentDidMount() {
    this.getWrapperWidth.call(this);
    window.addEventListener('resize', debounce(this.getWrapperWidth, 5).bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWrapperWidth);
  }

  render() {
    return (
      <div ref="items-wrapper" className="c-nav">
        <ul className="o-inline-list">
          {
            this.props.navItems.map((item, i) =>
              <li className="o-inline-list__item c-visible-nav-item" key={i}>
                <a href="#" className="c-nav-item c-visible-nav-link" style={{color: item.color}}>
                  <span style={{color: '#222'}}>
                    {item.text}
                  </span>
                </a>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

VisibleNavigationItems.propTypes = {
  navItems: PropTypes.array,
  storeNavWrapperWidth: PropTypes.func.isRequired
};

export default VisibleNavigationItems;
