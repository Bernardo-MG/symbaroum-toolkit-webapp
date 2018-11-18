import { put, takeLatest } from 'redux-saga/effects';
import * as types from 'chargen/actions/actionTypes';
import { REQUEST_ABILITIES } from 'chargen/requests/abilities/actions/actionTypes';
import { REQUEST_RACES } from 'chargen/requests/races/actions/actionTypes';

function* requestInitialData(action) {
   yield put({ type: REQUEST_ABILITIES, payload: action.payload });
   yield put({ type: REQUEST_RACES, payload: action.payload });
}

export const initializeChargenSaga = [
   takeLatest(types.INITIALIZE_CHARGEN, requestInitialData)
];
