import React from 'react';

import PropTypes from 'prop-types';

import Combo from 'components/Combo';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setRace } from 'chargen/actions';

import { selectRaceOptions } from 'chargen/selectors';

const RaceCombo = (props) =>
   <Combo placeHolder={props.label} source={props.options}/>;

RaceCombo.propTypes = {
   action: PropTypes.func.isRequired,
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
      action: bindActionCreators(setRace, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(RaceCombo);
