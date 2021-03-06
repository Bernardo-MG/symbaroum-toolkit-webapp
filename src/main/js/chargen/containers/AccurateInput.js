import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setAccurate } from 'chargen/actions';

import ObservableNumberInput from 'components/ObservableNumberInput';

import { selectAccurate } from 'chargen/selectors';

const AccurateInput = (props) =>
   <ObservableNumberInput {...props} />;

AccurateInput.propTypes = {
   onChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectAccurate(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onChange: bindActionCreators(setAccurate, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(AccurateInput);
