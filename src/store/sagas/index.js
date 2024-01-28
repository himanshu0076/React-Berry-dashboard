// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';
// Imports: Redux Sagas
import watchAppSaga from './appSaga';
// Redux Saga: Root Saga
export default function* rootSaga() {
    yield all([fork(watchAppSaga)]);
}
