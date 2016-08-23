import { connect } from 'react-redux';

import CollapsedNavigation from './CollapsedNavigation';

const mapStateToProps = ({ collapsedNavOpen }) => ({
  collapsedNavOpen
});

export default connect(
  mapStateToProps
)(CollapsedNavigation);
