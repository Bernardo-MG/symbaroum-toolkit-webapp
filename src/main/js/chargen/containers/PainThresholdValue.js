import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { injectIntl } from 'react-intl';

import Value from 'grommet/components/Value';

import { selectPainThreshold } from 'chargen/selectors/derivedAttributes';

const PainThresholdValue = (props) => <Value value={props.value} label={props.label} />;

PainThresholdValue.propTypes = {
   label: PropTypes.string,
   value: PropTypes.number.isRequired,
   intl: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
   return {
      value: selectPainThreshold(state)
   };
};

const mapDispatchToProps = () => {
   return {};
};

export default injectIntl(connect(
   mapStateToProps,
   mapDispatchToProps
)(PainThresholdValue));
