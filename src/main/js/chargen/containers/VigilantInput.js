import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setVigilant } from 'chargen/actions';

import ObservableNumberInput from 'components/ObservableNumberInput';

import { selectVigilant } from 'chargen/selectors';

const VigilantInput = (props) =>
   <ObservableNumberInput {...props} />;

VigilantInput.propTypes = {
   onChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectVigilant(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onChange: bindActionCreators(setVigilant, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(VigilantInput);
