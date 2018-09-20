import React from 'react';

import PropTypes from 'prop-types';

import FormField from 'grommet/components/FormField';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setOccupation } from 'chargen/actions';

import { selectOccupation } from 'chargen/selectors';

const OccupationInput = (props) =>
   <FormField label={props.label}>
      <input id='occupation' name='occupation' type='text' value={props.value} onChange={(event) => props.action(event.target.value)}/>
   </FormField>;

OccupationInput.propTypes = {
   action: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectOccupation(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      action: bindActionCreators(setOccupation, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(OccupationInput);
