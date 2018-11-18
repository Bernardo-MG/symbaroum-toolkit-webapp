import { abilitiesRequestSagas } from 'chargen/requests/abilities/sagas';
import { attributesRequestSagas } from 'chargen/requests/attributes/sagas';
import { raceRequestSagas } from 'chargen/requests/races/sagas';

export const requestSagas = [
   ...abilitiesRequestSagas,
   ...attributesRequestSagas,
   ...raceRequestSagas
];
