import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setPersuasive } from 'chargen/assets/actions';

import BoundNumberInput from 'components/BoundNumberInput';

import { selectPersuasive } from 'chargen/assets/selectors';

const PersuasiveInput = (props) =>
   <BoundNumberInput {...props} />;

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
