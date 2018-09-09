import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setVigilant } from 'chargen/assets/actions';

import BoundNumberInput from 'components/BoundNumberInput';

import { selectVigilant } from 'chargen/assets/selectors';

const VigilantInput = (props) =>
   <BoundNumberInput {...props} />;

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
