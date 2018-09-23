import { call, put, takeEvery } from 'redux-saga/effects';

import { getPokeList } from 'utils/api';
import { GET_POKE_LIST } from './constants';
import { getPokeListSuccess } from './actions';

export function* getPokeListSaga() {
  try {
    const { results } = yield call(getPokeList);
    yield put(getPokeListSuccess(results));
  } catch (error) {
    yield put(error);
  }
}

export default function* defaultSaga() {
  yield takeEvery(GET_POKE_LIST, getPokeListSaga);
}
