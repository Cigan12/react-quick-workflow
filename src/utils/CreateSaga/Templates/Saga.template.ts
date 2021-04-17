export const sagaTemplate = (name: string) => `import {
    ForkEffect,
    takeEvery,
} from 'redux-saga/effects';

function* generatorFunc() {
    
}

export function* ${name}Saga(): Generator<ForkEffect<never>> {
    yield takeEvery('', generatorFunc);
}`;
