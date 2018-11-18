import * as types from 'chargen/requests/abilities/actions/actionTypes';

export const requestAbilities = () => {
   return {
      type: types.REQUEST_ABILITIES
   };
};

export const abilitiesRequestSuccess = (payload) => {
   return {
      type: types.REQUEST_SUCCESS_ABILITIES,
      payload
   };
};

export const abilitiesRequestFailure = (payload) => {
   return {
      type: types.REQUEST_FAILURE_ABILITIES,
      payload
   };
};
