import { takeEvery } from 'redux-saga/effects';
import { GET_POKE_RESOURCES } from '../constants';
import homepageSaga, { getPokeResourcesSaga } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('homepageSaga', () => {
  const homepageSagaTest = homepageSaga();

  it('should start a task to watch for the requestPageData action', () => {
    const expected = takeEvery(GET_POKE_RESOURCES, getPokeResourcesSaga);
    const actual = homepageSagaTest.next().value;

    expect(actual).toEqual(expected);
  });
});
