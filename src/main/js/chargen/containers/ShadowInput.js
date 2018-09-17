import React from 'react';

import PropTypes from 'prop-types';

import FormField from 'grommet/components/FormField';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setShadow } from 'chargen/actions';

import { selectShadow } from 'chargen/selectors';

const ShadowInput = (props) =>
   <FormField label={props.label}>
      <input id='player_name' name='player_name' type='text' value={props.value} onChange={(event) => props.action(event.target.value)}/>
   </FormField>;

ShadowInput.propTypes = {
   action: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectShadow(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      action: bindActionCreators(setShadow, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ShadowInput);
