import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from 'chargen/actions/actionTypes';
import * as requestTypes from 'chargen/requests/attributes/actions/actionTypes';
import { derivedAttributesFetcher } from 'chargen/requests/attributes/fetchers';
import { derivedAttributesRequestSuccess, derivedAttributesRequestFailure } from 'chargen/requests/races/actions';

function fetchOptions(params) {
   return derivedAttributesFetcher.fetch(params);
}

function* requestDerived(action) {
   const params = { ...action.params };
   let response;
   try {
      response = yield call(fetchOptions, params);
      yield put(derivedAttributesRequestSuccess(response.payload));
   } catch (err) {
      yield put(derivedAttributesRequestFailure(err));
   }
}

function* buildDerived(action) {
   yield put({ type: types.SET_CORRUPTION_THRESHOLD, payload: action.payload.corruptionThreshold });
   yield put({ type: types.SET_DEFENSE, payload: action.payload.defense });
   yield put({ type: types.SET_PAIN_THRESHOLD, payload: action.payload.painThreshold });
   yield put({ type: types.SET_THOUGHNESS, payload: action.payload.thoughness });
}

export const raceRequestSagas = [
   takeLatest(types.SET_ACCURATE, requestDerived),
   takeLatest(types.SET_CUNNING, requestDerived),
   takeLatest(types.SET_DISCREET, requestDerived),
   takeLatest(types.SET_PERSUASIVE, requestDerived),
   takeLatest(types.SET_QUICK, requestDerived),
   takeLatest(types.SET_RESOLUTE, requestDerived),
   takeLatest(types.SET_STRONG, requestDerived),
   takeLatest(types.SET_VIGILANT, requestDerived)
];
