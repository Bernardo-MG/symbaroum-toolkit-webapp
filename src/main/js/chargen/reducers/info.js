import * as ActionTypes from 'chargen/actions/actionTypes';

const attributes = (
   state = { playerName: '' },
   action) => {
   const { type, payload } = action;
   switch (type) {
   case ActionTypes.SET_PLAYER_NAME: {
      return {
         ...state,
         playerName: payload
      };
   }
   default:
      return state;
   }
};

export default attributes;
