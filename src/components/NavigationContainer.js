import { connect } from 'react-redux';

import Navigation from './Navigation';
import { addWidths, setCollapsedItems } from '../actions';


const mapStateToProps = ({ navigation, navWrapperWidth }) => ({
  navigation,
  navWrapperWidth
});

const mapDispatchToProps = dispatch => ({
  addWidths(widths) {
    dispatch(addWidths(widths));
  },
  setCollapsedItems(items) {
    dispatch(setCollapsedItems(items));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
