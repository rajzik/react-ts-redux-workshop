import { all, fork } from 'redux-saga/effects'
import dataSaga from './data';

export default function* (){
    yield all([fork(dataSaga)])
}