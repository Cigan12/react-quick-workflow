export const sagaTemplate = (name: string) => `
import {
    call,
    ForkEffect,
    put,
    PutEffect,
    takeEvery,
} from 'redux-saga/effects';

function* generatorFunc() {
    
}

export function* ${name}Saga(): Generator<ForkEffect<never>> {
    yield takeEvery('', generatorFunc());
}`;
