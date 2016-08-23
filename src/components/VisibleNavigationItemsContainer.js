import { connect } from 'react-redux';

import VisibleNavigationItems from './VisibleNavigationItems';
import { storeNavWrapperWidth } from '../actions';

const mapDispatchToProps = dispatch => ({
  storeNavWrapperWidth(width) {
    dispatch(storeNavWrapperWidth(width));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(VisibleNavigationItems);
