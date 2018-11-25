import React from 'react';

import PropTypes from 'prop-types';

import Combo from 'components/Combo';

import { connect } from 'react-redux';

import { selectAbilityOptions } from 'chargen/selectors';

function toOption(option) {
   return { value: option, label: option };
}

function toOptions(options) {
   const result = [];
   Object.keys(options).forEach((option) => result.push(toOption(option)));
   return result;
}

const AbilityCombo = (props) =>
   <Combo placeHolder={props.label} source={toOptions(props.options)}/>;

AbilityCombo.propTypes = {
   onChange: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired,
   options: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
   return {
      options: selectAbilityOptions(state)
   };
};

const mapDispatchToProps = () => {
   return {};
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(AbilityCombo);
