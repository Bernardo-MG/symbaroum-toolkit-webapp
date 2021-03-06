import * as types from 'chargen/requests/races/actions/actionTypes';

export const requestRaces = () => {
   return {
      type: types.REQUEST_RACES
   };
};

export const racesRequestSuccess = (payload) => {
   return {
      type: types.REQUEST_SUCCESS_RACES,
      payload
   };
};

export const racesRequestFailure = (payload) => {
   return {
      type: types.REQUEST_FAILURE_RACES,
      payload
   };
};
