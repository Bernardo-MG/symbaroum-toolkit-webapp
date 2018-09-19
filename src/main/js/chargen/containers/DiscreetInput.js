import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setDiscreet } from 'chargen/actions';

import ObservableNumberInput from 'components/ObservableNumberInput';

import { selectDiscreet } from 'chargen/selectors';

const DiscreetInput = (props) =>
   <ObservableNumberInput {...props} />;

DiscreetInput.propTypes = {
   onChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectDiscreet(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onChange: bindActionCreators(setDiscreet, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(DiscreetInput);
