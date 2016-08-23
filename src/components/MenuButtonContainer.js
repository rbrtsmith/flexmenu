import { connect } from 'react-redux';

import MenuButton from './MenuButton';
import { toggleCollapsedNav } from '../actions';

const mapDispatchToProps = dispatch => ({
  toggleCollapsedNav() {
    dispatch(toggleCollapsedNav());
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(MenuButton);
