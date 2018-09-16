import React from 'react';

import PropTypes from 'prop-types';

import FormField from 'grommet/components/FormField';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setPlayerName } from 'chargen/actions';

import { selectPlayerName } from 'chargen/selectors';

const PlayerNameInput = (props) =>
   <FormField label={props.label}>
      <input id='player_name' name='player_name' type='text' value={props.value} onChange={(event) => props.action(event.target.value)}/>
   </FormField>;

PlayerNameInput.propTypes = {
   action: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectPlayerName(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      action: bindActionCreators(setPlayerName, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(PlayerNameInput);
