import React from 'react';

import PropTypes from 'prop-types';

import FormField from 'grommet/components/FormField';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setQuote } from 'chargen/actions';

import { selectQuote } from 'chargen/selectors';

const QuoteInput = (props) =>
   <FormField label={props.label}>
      <input id='quote' name='quote' type='text' value={props.value} onChange={(event) => props.action(event.target.value)}/>
   </FormField>;

QuoteInput.propTypes = {
   action: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectQuote(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      action: bindActionCreators(setQuote, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(QuoteInput);
