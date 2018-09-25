/*
 *
 * HomePage2 actions
 *
 */

import {
  GET_POKE_LIST,
  GET_POKE_LIST_SUCCESS,
  SELECT_POKEMON,
  SELECT_POKEMON_SUCCESS,
  UPDATE_POKEMON_INFO,
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

export function selectPokemonSuccess(pokemon) {
  return {
    type: SELECT_POKEMON_SUCCESS,
    pokemon,
  };
}

export function updatePokemonInfo(pokemon) {
  return {
    type: UPDATE_POKEMON_INFO,
    pokemon,
  };
}
