import { initializeChargenSaga } from 'chargen/sagas/initialize';
import { requestSagas } from 'chargen/requests/sagas';

export const chargenSagas = [
   ...initializeChargenSaga,
   ...requestSagas
];
