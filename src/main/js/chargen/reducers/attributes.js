import * as ActionTypes from 'chargen/actions/actionTypes';

const attributes = (
   state = { accurate: 0, cunning: 0, discreet: 0, persuasive: 0, quick: 0, resolute: 0, strong: 0, vigilant: 0 },
   action) => {
   const { type, payload } = action;
   switch (type) {
   case ActionTypes.SET_ACCURATE: {
      return {
         ...state,
         accurate: payload
      };
   }
   case ActionTypes.SET_CUNNING: {
      return {
         ...state,
         cunning: payload
      };
   }
   case ActionTypes.SET_DISCREET: {
      return {
         ...state,
         discreet: payload
      };
   }
   case ActionTypes.SET_PERSUASIVE: {
      return {
         ...state,
         persuasive: payload
      };
   }
   case ActionTypes.SET_QUICK: {
      return {
         ...state,
         quick: payload
      };
   }
   case ActionTypes.SET_RESOLUTE: {
      return {
         ...state,
         resolute: payload
      };
   }
   case ActionTypes.SET_STRONG: {
      return {
         ...state,
         strong: payload
      };
   }
   case ActionTypes.SET_VIGILANT: {
      return {
         ...state,
         vigilant: payload
      };
   }
   default:
      return state;
   }
};

export default attributes;
