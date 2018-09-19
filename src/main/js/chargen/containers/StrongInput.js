import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setStrong } from 'chargen/actions';

import ObservableNumberInput from 'components/ObservableNumberInput';

import { selectStrong } from 'chargen/selectors';

const StrongInput = (props) =>
   <ObservableNumberInput {...props} />;

StrongInput.propTypes = {
   onChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectStrong(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onChange: bindActionCreators(setStrong, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(StrongInput);
