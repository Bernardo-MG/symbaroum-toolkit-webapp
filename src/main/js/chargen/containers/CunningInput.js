import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCunning } from 'chargen/assets/actions';

import BoundNumberInput from 'components/BoundNumberInput';

import { selectCunning } from 'chargen/assets/selectors';

const CunningInput = (props) =>
   <BoundNumberInput {...props} />;

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
