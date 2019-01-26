import { takeEvery, all, fork, call, put } from 'redux-saga/effects';
import Axios from 'axios';
import { ActionNames } from '@constants';
import { DataActions } from '@actions';


function* handleFetch() {
    try {
        const res = yield call(Axios, "/data.json");
        if (res.error) {
            yield put(DataActions.dataError(res.error));
        } else {
            yield put(DataActions.dataSuccess(res.data.data));
        }
    } catch (err) {
        if (err instanceof Error) {
            yield put(DataActions.dataError(err.stack!));
        } else {
            yield put(DataActions.dataError("Unexpected error"));
        }
    }
}



function* watchFetchRequest() {
    yield takeEvery(ActionNames.DATA_REQUEST, handleFetch);
}

function* dataSaga() {
    yield all([fork(watchFetchRequest)])
}


export default dataSaga;
