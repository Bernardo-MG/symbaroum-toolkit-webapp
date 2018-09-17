import React from 'react';

import PropTypes from 'prop-types';

import FormField from 'grommet/components/FormField';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCharacterName } from 'chargen/actions';

import { selectCharacterName } from 'chargen/selectors';

const CharacterNameInput = (props) =>
   <FormField label={props.label}>
      <input id='player_name' name='player_name' type='text' value={props.value} onChange={(event) => props.action(event.target.value)}/>
   </FormField>;

CharacterNameInput.propTypes = {
   action: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectCharacterName(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      action: bindActionCreators(setCharacterName, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CharacterNameInput);
