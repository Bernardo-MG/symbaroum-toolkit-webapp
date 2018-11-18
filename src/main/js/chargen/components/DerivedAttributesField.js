import React from 'react';

import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';

import Columns from 'grommet/components/Columns';

import CorruptionThresholdValue from 'chargen/containers/CorruptionThresholdValue';
import DefenseValue from 'chargen/containers/DefenseValue';
import PainThresholdValue from 'chargen/containers/PainThresholdValue';
import ThoughnessValue from 'chargen/containers/ThoughnessValue';

import chargenMessages from 'i18n/chargen';

const DerivedAttributesField = (props) =>
   <Columns>
      <CorruptionThresholdValue label={props.intl.formatMessage(chargenMessages.corruption_threshold)}/>
      <DefenseValue label={props.intl.formatMessage(chargenMessages.defense)}/>
      <PainThresholdValue label={props.intl.formatMessage(chargenMessages.pain_threshold)}/>
      <ThoughnessValue label={props.intl.formatMessage(chargenMessages.thoughness)}/>
   </Columns>;

DerivedAttributesField.propTypes = {
   intl: PropTypes.object.isRequired
};

export default injectIntl(DerivedAttributesField);
