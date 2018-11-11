import React from 'react';

import PropTypes from 'prop-types';

import Combo from 'components/Combo';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setRace } from 'chargen/actions';

import { selectRaceOptions } from 'chargen/selectors';

function toOption(option) {
   return { value: option, label: option };
}

function toOptions(options) {
   const result = [];
   options.forEach((option) => result.push(toOption(option)));
   return result;
}

const RaceCombo = (props) =>
   <Combo placeHolder={props.label} source={toOptions(props.options)} onChange={props.onChange}/>;

RaceCombo.propTypes = {
   onChange: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired,
   options: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
   return {
      options: selectRaceOptions(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onChange: bindActionCreators(setRace, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(RaceCombo);
