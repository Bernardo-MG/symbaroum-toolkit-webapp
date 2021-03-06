import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setQuick } from 'chargen/actions';

import ObservableNumberInput from 'components/ObservableNumberInput';

import { selectQuick } from 'chargen/selectors';

const QuickInput = (props) =>
   <ObservableNumberInput {...props} />;

QuickInput.propTypes = {
   onChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectQuick(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onChange: bindActionCreators(setQuick, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(QuickInput);
