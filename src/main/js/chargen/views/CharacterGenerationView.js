import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { injectIntl } from 'react-intl';

import Box from 'grommet/components/Box';

import SimpleView from 'views/containers/SimpleView';

import AttributesForm from 'chargen/components/AttributesForm';
import CharacterNameInput from 'chargen/containers/CharacterNameInput';
import OccupationCombo from 'chargen/containers/OccupationCombo';
import PlayerNameInput from 'chargen/containers/PlayerNameInput';
import RaceCombo from 'chargen/containers/RaceCombo';
import ShadowInput from 'chargen/containers/ShadowInput';

import chargenMessages from 'i18n/chargen';
import titleMessages from 'i18n/title';

const CharacterGenerationView = (props) =>
   <SimpleView title={props.intl.formatMessage(titleMessages.chargen)}>
      <Box justify='center' align='center' margin='medium'>
         <PlayerNameInput label={props.intl.formatMessage(chargenMessages.player_name)} />
         <CharacterNameInput label={props.intl.formatMessage(chargenMessages.character_name)} />
         <ShadowInput label={props.intl.formatMessage(chargenMessages.shadow)} />
         <RaceCombo placeHolder={props.intl.formatMessage(chargenMessages.race)} />
         <OccupationCombo placeHolder={props.intl.formatMessage(chargenMessages.occupation)} />
         <AttributesForm />
      </Box>
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
