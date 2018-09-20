import * as ActionTypes from 'chargen/actions/actionTypes';

const attributes = (
   state = { characterName: '', occupation: '', playerName: '', quote: '', race: '', shadow: '' },
   action) => {
   const { type, payload } = action;
   switch (type) {
   case ActionTypes.SET_CHARACTER_NAME: {
      return {
         ...state,
         characterName: payload
      };
   }
   case ActionTypes.SET_OCCUPATION: {
      return {
         ...state,
         occupation: payload
      };
   }
   case ActionTypes.SET_PLAYER_NAME: {
      return {
         ...state,
         playerName: payload
      };
   }
   case ActionTypes.SET_QUOTE: {
      return {
         ...state,
         quote: payload
      };
   }
   case ActionTypes.SET_RACE: {
      return {
         ...state,
         race: payload
      };
   }
   case ActionTypes.SET_SHADOW: {
      return {
         ...state,
         shadow: payload
      };
   }
   default:
      return state;
   }
};

export default attributes;
