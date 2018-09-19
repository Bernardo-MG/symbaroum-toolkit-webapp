import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setResolute } from 'chargen/actions';

import ObservableNumberInput from 'components/ObservableNumberInput';

import { selectResolute } from 'chargen/selectors';

const ResoluteInput = (props) =>
   <ObservableNumberInput {...props} />;

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
