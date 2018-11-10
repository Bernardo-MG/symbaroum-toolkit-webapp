import * as types from 'chargen/requests/races/actions/actionTypes';

export const optionsRequestSuccess = (payload) => {
   return {
      type: types.REQUEST_SUCCESS_RACES,
      payload
   };
};

export const optionsRequestFailure = (payload) => {
   return {
      type: types.REQUEST_FAILURE_RACES,
      payload
   };
};
