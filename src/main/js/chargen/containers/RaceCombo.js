import React from 'react';

import { connect } from 'react-redux';

import Combo from 'components/Combo';

const RaceCombo = (props) =>
   <Combo {...props} />;

RaceCombo.propTypes = {};

const mapStateToProps = () => {
   return {};
};

const mapDispatchToProps = () => {
   return {};
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(RaceCombo);
