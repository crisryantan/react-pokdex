/*
 *
 * HomePage2 actions
 *
 */

import {
  GET_POKE_LIST,
  GET_POKE_LIST_SUCCESS,
  SELECT_POKEMON,
} from './constants';

export function getPokeList() {
  return {
    type: GET_POKE_LIST,
  };
}

export function getPokeListSuccess(pokeList) {
  return {
    type: GET_POKE_LIST_SUCCESS,
    pokeList,
  };
}

export function selectPokemon(pokemon) {
  return {
    type: SELECT_POKEMON,
    pokemon,
  };
}
