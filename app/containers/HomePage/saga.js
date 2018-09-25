import { call, put, takeEvery } from 'redux-saga/effects';
import { message } from 'antd';
import { getPokeList, getSpecificPokemon, getPokeNature } from 'utils/api';
import { GET_POKE_RESOURCES, SELECT_POKEMON } from './constants';
import {
  getPokeResourcesSuccess,
  selectPokemonSuccess,
  getPokeResourcesError,
} from './actions';

export function* getPokeResourcesSaga() {
  try {
    const { results: pokeList } = yield call(getPokeList);
    const { results: pokeNatures } = yield call(getPokeNature);

    yield put(getPokeResourcesSuccess(pokeList, pokeNatures));
  } catch (error) {
    message.error(
      'Something went wrong when fetching the resources, please refresh the page',
    );
    yield put(getPokeResourcesError(error));
  }
}

export function* getSpecificPokemonSaga({ pokemon }) {
  try {
    if (!pokemon.sprites) {
      // since we already indexed in our axios instance, remove https://pokeapi.co/api/v2/pokemon/
      // so we only get the ID of the pokemon to make the request
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
  yield takeEvery(GET_POKE_RESOURCES, getPokeResourcesSaga);
  yield takeEvery(SELECT_POKEMON, getSpecificPokemonSaga);
}
