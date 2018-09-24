import { takeEvery } from 'redux-saga/effects';
import { GET_POKE_LIST } from '../constants';
import homepageSaga, { getPokeListSaga } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('homepageSaga', () => {
  const homepageSagaTest = homepageSaga();

  it('should start a task to watch for the requestPageData action', () => {
    const expected = takeEvery(GET_POKE_LIST, getPokeListSaga);
    const actual = homepageSagaTest.next().value;

    expect(actual).toEqual(expected);
  });
});
