import * as types from 'chargen/requests/attributes/actions/actionTypes';

export const requestDerivedAttributes = (payload) => {
   return {
      type: types.REQUEST_DERIVED_ATTRIBUTES,
      payload
   };
};

export const derivedAttributesRequestSuccess = (payload) => {
   return {
      type: types.REQUEST_SUCCESS_DERIVED_ATTRIBUTES,
      payload
   };
};

export const derivedAttributesRequestFailure = (payload) => {
   return {
      type: types.REQUEST_FAILURE_DERIVED_ATTRIBUTES,
      payload
   };
};
