import { connect } from 'react-redux';

import CollapsedNavigation from './CollapsedNavigation';
import { setCollapsedNavHeight } from '../actions';


const mapStateToProps = ({ collapsedNavOpen, collapsedNavHeight }) => ({
  collapsedNavOpen,
  collapsedNavHeight
});

const mapDispatchToProps = dispatch => ({
  setCollapsedNavHeight(payload) {
    dispatch(setCollapsedNavHeight(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollapsedNavigation);
