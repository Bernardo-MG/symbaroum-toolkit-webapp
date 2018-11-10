import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from 'chargen/actions/actionTypes';
import * as requestTypes from 'chargen/requests/races/actions/actionTypes';
import { racesFetcher } from 'chargen/requests/races/fetchers';
import { racesSuccess, racesFailure } from 'chargen/requests/races/actions';

function fetchOptions(params) {
   return racesFetcher.fetch(params);
}

function* requestOptions(action) {
   const params = { ...action.params };
   let response;
   try {
      response = yield call(fetchOptions, params);
      yield put(racesSuccess(response.payload));
   } catch (err) {
      yield put(racesFailure(err));
   }
}

function* buildOptions(action) {
   yield put({ type: types.SET_RACES_OPTIONS, payload: action.payload });
}

export const raceRequestSagas = [
   takeLatest(requestTypes.REQUEST_SPONSOR_AFFINITY_GROUP_OPTIONS, requestOptions),
   takeLatest(requestTypes.REQUEST_SUCCESS_SPONSOR_AFFINITY_GROUP_OPTIONS, buildOptions)
];
