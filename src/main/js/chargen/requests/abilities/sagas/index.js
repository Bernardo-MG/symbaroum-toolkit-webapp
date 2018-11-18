import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from 'chargen/actions/actionTypes';
import * as requestTypes from 'chargen/requests/abilities/actions/actionTypes';
import { abilitiesFetcher } from 'chargen/requests/abilities/fetchers';
import { abilitiesRequestSuccess, abilitiesRequestFailure } from 'chargen/requests/abilities/actions';

function fetchOptions(params) {
   return abilitiesFetcher.fetch(params);
}

function* requestOptions(action) {
   const params = { ...action.params };
   let response;
   try {
      response = yield call(fetchOptions, params);
      yield put(abilitiesRequestSuccess(response.payload));
   } catch (err) {
      yield put(abilitiesRequestFailure(err));
   }
}

function* buildOptions(action) {
   yield put({ type: types.SET_ABILITIES_OPTIONS, payload: action.payload });
}

export const abilitiesRequestSagas = [
   takeLatest(requestTypes.REQUEST_ABILITIES, requestOptions),
   takeLatest(requestTypes.REQUEST_SUCCESS_ABILITIES, buildOptions)
];
