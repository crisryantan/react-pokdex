import { call, put, takeEvery } from 'redux-saga/effects';

import { getPokeList, getSpecificPokemon } from 'utils/api';
import { GET_POKE_LIST, SELECT_POKEMON } from './constants';
import { getPokeListSuccess, selectPokemonSuccess } from './actions';

export function* getPokeListSaga() {
  try {
    const { results } = yield call(getPokeList);
    yield put(getPokeListSuccess(results));
  } catch (error) {
    yield put(error);
  }
}

export function* getSpecificPokemonSaga({ pokemon }) {
  try {
    if (!pokemon.sprites) {
      const id = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '');
      const data = yield call(getSpecificPokemon, id);
      const newpokemon = { ...data, ...pokemon };
      yield put(selectPokemonSuccess(newpokemon));
      return;
    }
    yield put(selectPokemonSuccess(pokemon));
  } catch (error) {
    yield put(error);
  }
}

export default function* defaultSaga() {
  yield takeEvery(GET_POKE_LIST, getPokeListSaga);
  yield takeEvery(SELECT_POKEMON, getSpecificPokemonSaga);
}
