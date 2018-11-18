import * as ActionTypes from 'chargen/actions/actionTypes';

const attributes = (
   state = { abilities: [], races: [] },
   action) => {
   const { type, payload } = action;
   switch (type) {
   case ActionTypes.SET_ABILITIES_OPTIONS: {
      return {
         ...state,
         abilities: payload
      };
   }
   case ActionTypes.SET_RACES_OPTIONS: {
      return {
         ...state,
         races: payload
      };
   }
   default:
      return state;
   }
};

export default attributes;
