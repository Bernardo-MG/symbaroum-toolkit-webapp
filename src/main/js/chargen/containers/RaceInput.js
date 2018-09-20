import React from 'react';

import PropTypes from 'prop-types';

import FormField from 'grommet/components/FormField';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setRace } from 'chargen/actions';

import { selectRace } from 'chargen/selectors';

const RaceInput = (props) =>
   <FormField label={props.label}>
      <input id='race' name='race' type='text' value={props.value} onChange={(event) => props.action(event.target.value)}/>
   </FormField>;

RaceInput.propTypes = {
   action: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectRace(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      action: bindActionCreators(setRace, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(RaceInput);
