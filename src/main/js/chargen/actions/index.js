import * as types from 'charen/actions/actionTypes';

export const setAccurate = (value) => {
   return {
      type: types.SET_ACCURATE,
      payload: value
   };
};

export const setCunning = (value) => {
   return {
      type: types.SET_CUNNING,
      payload: value
   };
};

export const setDiscreet = (value) => {
   return {
      type: types.SET_DISCREET,
      payload: value
   };
};

export const setPersuasive = (value) => {
   return {
      type: types.SET_PERSUASIVE,
      payload: value
   };
};

export const setQuick = (value) => {
   return {
      type: types.SET_QUICK,
      payload: value
   };
};

export const setResolute = (value) => {
   return {
      type: types.SET_RESOLUTE,
      payload: value
   };
};

export const setStrong = (value) => {
   return {
      type: types.SET_STRONG,
      payload: value
   };
};

export const setVigilant = (value) => {
   return {
      type: types.SET_VIGILANT,
      payload: value
   };
};
