import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setPersuasive } from 'chargen/actions';

import ObservableNumberInput from 'components/ObservableNumberInput';

import { selectPersuasive } from 'chargen/selectors';

const PersuasiveInput = (props) =>
   <ObservableNumberInput {...props} />;

PersuasiveInput.propTypes = {
   onChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectPersuasive(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onChange: bindActionCreators(setPersuasive, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(PersuasiveInput);
