import * as ActionTypes from 'chargen/actions/actionTypes';

const derivedAttributes = (
   state = { corruptionThreshold: 0, defense: 0, painThreshold: 0, thoughness: 0 },
   action) => {
   const { type, payload } = action;
   switch (type) {
   case ActionTypes.SET_CORRUPTION_THRESHOLD: {
      return {
         ...state,
         corruptionThreshold: payload
      };
   }
   case ActionTypes.SET_DEFENSE: {
      return {
         ...state,
         defense: payload
      };
   }
   case ActionTypes.SET_PAIN_THRESHOLD: {
      return {
         ...state,
         painThreshold: payload
      };
   }
   case ActionTypes.SET_THOUGHNESS: {
      return {
         ...state,
         thoughness: payload
      };
   }
   default:
      return state;
   }
};

export default derivedAttributes;
