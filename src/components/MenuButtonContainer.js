import { connect } from 'react-redux';

import MenuButton from './MenuButton';
import { toggleCollapsedNav } from '../actions';

const mapStateToProps = ({ collapsedNavOpen }) => ({
  collapsedNavOpen
});

const mapDispatchToProps = dispatch => ({
  toggleCollapsedNav() {
    dispatch(toggleCollapsedNav());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuButton);
