import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { injectIntl } from 'react-intl';

import Box from 'grommet/components/Box';

import SimpleView from 'views/containers/SimpleView';

import AttributesForm from 'chargen/components/AttributesForm';
import DerivedAttributesField from 'chargen/components/DerivedAttributesField';
import CharacterNameInput from 'chargen/containers/CharacterNameInput';
import OccupationInput from 'chargen/containers/OccupationInput';
import PlayerNameInput from 'chargen/containers/PlayerNameInput';
import QuoteInput from 'chargen/containers/QuoteInput';
import RaceCombo from 'chargen/containers/RaceCombo';
import ShadowInput from 'chargen/containers/ShadowInput';

import { initializeChargen } from 'chargen/actions';

import chargenMessages from 'i18n/chargen';
import titleMessages from 'i18n/title';

class CharacterGenerationView extends Component {

   constructor(props) {
      super(props);

      props.initialize();
   }

   render() {
      return (
         <SimpleView title={this.props.intl.formatMessage(titleMessages.chargen)}>
            <Box justify='center' align='center' margin='medium'>
               <PlayerNameInput label={this.props.intl.formatMessage(chargenMessages.player_name)} />
               <CharacterNameInput label={this.props.intl.formatMessage(chargenMessages.character_name)} />
               <ShadowInput label={this.props.intl.formatMessage(chargenMessages.shadow)} />
               <QuoteInput label={this.props.intl.formatMessage(chargenMessages.quote)} />
               <RaceCombo label={this.props.intl.formatMessage(chargenMessages.race)} />
               <OccupationInput label={this.props.intl.formatMessage(chargenMessages.occupation)} />
               <AttributesForm />
               <DerivedAttributesField />
            </Box>
         </SimpleView>
      );
   }

}

CharacterGenerationView.propTypes = {
   intl: PropTypes.object.isRequired,
   initialize: PropTypes.func.isRequired
};

const mapStateToProps = () => {
   return {};
};

const mapDispatchToProps = (dispatch) => {
   return {
      initialize: bindActionCreators(initializeChargen, dispatch)
   };
};

export default injectIntl(connect(
   mapStateToProps,
   mapDispatchToProps
)(CharacterGenerationView));
