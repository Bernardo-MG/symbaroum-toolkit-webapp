import { put, takeLatest, call, select } from 'redux-saga/effects';
import * as types from 'chargen/actions/actionTypes';
import * as requestTypes from 'chargen/requests/attributes/actions/actionTypes';
import { derivedAttributesFetcher } from 'chargen/requests/attributes/fetchers';
import { derivedAttributesRequestSuccess, derivedAttributesRequestFailure } from 'chargen/requests/attributes/actions';
import { selectAccurate, selectCunning, selectDiscreet, selectPersuasive, selectQuick, selectResolute, selectStrong, selectVigilant } from 'chargen/selectors';

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

function* generateDerived() {
   const accurate = yield select(selectAccurate);
   const cunning = yield select(selectCunning);
   const discreet = yield select(selectDiscreet);
   const persuasive = yield select(selectPersuasive);
   const quick = yield select(selectQuick);
   const resolute = yield select(selectResolute);
   const strong = yield select(selectStrong);
   const vigilant = yield select(selectVigilant);

   const params = { accurate, cunning, discreet, persuasive, quick, resolute, strong, vigilant };
   yield call(requestDerived, { params });
}

function* buildDerived(action) {
   yield put({ type: types.SET_CORRUPTION_THRESHOLD, payload: action.payload.corruptionThreshold });
   yield put({ type: types.SET_DEFENSE, payload: action.payload.defense });
   yield put({ type: types.SET_PAIN_THRESHOLD, payload: action.payload.painThreshold });
   yield put({ type: types.SET_THOUGHNESS, payload: action.payload.thoughness });
}

export const attributesRequestSagas = [
   takeLatest(types.SET_ACCURATE, generateDerived),
   takeLatest(types.SET_CUNNING, generateDerived),
   takeLatest(types.SET_DISCREET, generateDerived),
   takeLatest(types.SET_PERSUASIVE, generateDerived),
   takeLatest(types.SET_QUICK, generateDerived),
   takeLatest(types.SET_RESOLUTE, generateDerived),
   takeLatest(types.SET_STRONG, generateDerived),
   takeLatest(types.SET_VIGILANT, generateDerived),
   takeLatest(requestTypes.REQUEST_SUCCESS_DERIVED_ATTRIBUTES, buildDerived)
];
