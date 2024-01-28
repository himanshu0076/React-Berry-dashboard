import { takeEvery, put, call, delay, select } from 'redux-saga/effects';
import globalAction from '../actions';
import { closeSnackbar, openSnackbar } from 'store/slices/snackbar';

function* showToaster({ payload }) {
    yield put(
        openSnackbar({
            open: true,
            message: payload.message,
            variant: 'alert',
            alert: {
                color: payload.status
            },
            actionButton: false
        })
    );

    setTimeout(function* () {
        yield put(
            closeSnackbar({
                open: false
            })
        );
    }, 3000);
}

function* changeListingOrder({ payload }) {
    let currentOrder = yield select((state) => state.listing.order);
    currentOrder = currentOrder === 'desc' ? 'asc' : 'desc';
    yield put(globalAction('SET_ORDER', { order: currentOrder, orderBy: payload.orderBy }));
}

// function* getCustomer({payload}){

// }

export default function* watchAppSaga() {
    yield takeEvery('SHOW_TOASTER', showToaster);
    yield takeEvery('CHANGE_ORDER', changeListingOrder);
}
