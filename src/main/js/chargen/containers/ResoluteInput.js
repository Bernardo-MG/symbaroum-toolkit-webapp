import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setResolute } from 'chargen/assets/actions';

import BoundNumberInput from 'components/BoundNumberInput';

import { selectResolute } from 'chargen/assets/selectors';

const ResoluteInput = (props) =>
   <BoundNumberInput {...props} />;

ResoluteInput.propTypes = {
   onChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectResolute(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onChange: bindActionCreators(setResolute, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ResoluteInput);
