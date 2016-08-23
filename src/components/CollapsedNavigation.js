import React, { Component, PropTypes } from 'react';

import getWidths from '../utilities/getWidths';


const getHeight = el => el.offsetHeight;

class CollapsedNavigation extends Component {
  getItemRefs(refs) {
    return Object.keys(refs).reduce((result, key) => {
      if (key.slice(0, 4) === 'item') {
        result[key] = refs[key]
      }
      return result;
    }, {});
  }

  componentDidMount() {
    const widths = getWidths(this.getItemRefs(this.refs));
    this.props.addWidths(widths);
  }

  componentDidUpdate() {
    this.props.setCollapsedNavHeight(getHeight(this.refs['collapsed-nav']));
  }

  render() {
    const height = this.props.collapsedNavOpen ? this.props.collapsedNavHeight : 0;
    return (
      <div style={{
        height: height
      }} className={`c-collapsed-nav ${this.props.collapsedNavOpen ? 'is-open' : ''}`}>
        <div className="o-site-wrap o-site-wrap--padding">
          <div className="c-collapsed-nav__inner" ref="collapsed-nav">
            <div className="u-soft-ends">
              <h2 className="c-collapsed-nav__title">
                More
              </h2>
              <div className="c-collapsed-nav__content">
                <ul className="o-grid o-grid--no-gutter">
                  {
                    this.props.navigation.map((item, i) =>
                    <li key={i} className={`o-grid__item u-1/2 u-1/3@sm ${ i === 0 ? 'c-collapsed-nav__first' : ''}`}>
                      <a href="#" className="c-collapsed-nav__item">
                        <span ref={`item${i}`} className="c-nav-item">
                          {item.text}
                        </span>
                      </a>
                    </li>)
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

CollapsedNavigation.propTypes = {
  navigation: PropTypes.array,
  addWidths: PropTypes.func.isRequired,
  setCollapsedNavHeight: PropTypes.func.isRequired,
  collapsedNavHeight: PropTypes.number.isRequired
};

export default CollapsedNavigation;
