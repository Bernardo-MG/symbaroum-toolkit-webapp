import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCunning } from 'chargen/actions';

import ObservableNumberInput from 'components/ObservableNumberInput';

import { selectCunning } from 'chargen/selectors';

const CunningInput = (props) =>
   <ObservableNumberInput {...props} />;

CunningInput.propTypes = {
   onChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectCunning(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onChange: bindActionCreators(setCunning, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CunningInput);
