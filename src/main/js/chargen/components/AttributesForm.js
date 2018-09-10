import React from 'react';

import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';

import Columns from 'grommet/components/Columns';
import FormField from 'grommet/components/FormField';

import AccurateInput from 'chargen/containers/AccurateInput';
import CunningInput from 'chargen/containers/CunningInput';
import DiscreetInput from 'chargen/containers/DiscreetInput';
import PersuasiveInput from 'chargen/containers/PersuasiveInput';
import QuickInput from 'chargen/containers/QuickInput';
import ResoluteInput from 'chargen/containers/ResoluteInput';
import StrongInput from 'chargen/containers/StrongInput';
import VigilantInput from 'chargen/containers/VigilantInput';

import chargenMessages from 'i18n/chargen';

const AttributesForm = (props) =>
   <Columns>
      <FormField label={props.intl.formatMessage(chargenMessages.accurate)}>
         <AccurateInput id='accurate' name='accurate' min={0} max={100}/>
      </FormField>
      <FormField label={props.intl.formatMessage(chargenMessages.cunning)}>
         <CunningInput id='cunning' name='cunning' min={0} max={100}/>
      </FormField>
      <FormField label={props.intl.formatMessage(chargenMessages.discreet)}>
         <DiscreetInput id='discreet' name='discreet' min={0} max={100}/>
      </FormField>
      <FormField label={props.intl.formatMessage(chargenMessages.persuasive)}>
         <PersuasiveInput id='persuasive' name='persuasive' min={0} max={100}/>
      </FormField>
      <FormField label={props.intl.formatMessage(chargenMessages.quick)}>
         <QuickInput id='quick' name='quick' min={0} max={100}/>
      </FormField>
      <FormField label={props.intl.formatMessage(chargenMessages.resolute)}>
         <ResoluteInput id='resolute' name='resolute' min={0} max={100}/>
      </FormField>
      <FormField label={props.intl.formatMessage(chargenMessages.strong)}>
         <StrongInput id='strong' name='strong' min={0} max={100}/>
      </FormField>
      <FormField label={props.intl.formatMessage(chargenMessages.vigilant)}>
         <VigilantInput id='vigilant' name='vigilant' min={0} max={100}/>
      </FormField>
   </Columns>;

AttributesForm.propTypes = {
   intl: PropTypes.object.isRequired
};

export default injectIntl(AttributesForm);
