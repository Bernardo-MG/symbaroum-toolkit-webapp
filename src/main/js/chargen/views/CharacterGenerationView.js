import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { injectIntl } from 'react-intl';

import SimpleView from 'views/containers/SimpleView';

import titleMessages from 'i18n/title';

const CharacterGenerationView = (props) =>
   <SimpleView title={props.intl.formatMessage(titleMessages.chargen)}>
   </SimpleView>;

CharacterGenerationView.propTypes = {
   intl: PropTypes.object.isRequired
};

const mapStateToProps = () => {
   return {};
};

const mapDispatchToProps = () => {
   return {};
};

export default injectIntl(connect(
   mapStateToProps,
   mapDispatchToProps
)(CharacterGenerationView));
