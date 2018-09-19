import React from 'react';

import { connect } from 'react-redux';

import Combo from 'components/Combo';

const OccupationCombo = (props) =>
   <Combo {...props} />;

OccupationCombo.propTypes = {};

const mapStateToProps = () => {
   return {};
};

const mapDispatchToProps = () => {
   return {};
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(OccupationCombo);
