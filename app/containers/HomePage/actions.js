/*
 *
 * HomePage2 actions
 *
 */

import {
  GET_POKE_RESOURCES,
  GET_POKE_RESOURCES_SUCCESS,
  GET_POKE_RESOURCES_ERROR,
  SELECT_POKEMON,
  SELECT_POKEMON_SUCCESS,
  UPDATE_POKEMON_INFO,
  REMOVE_POKEMON,
} from './constants';

export function getPokeResources() {
  return {
    type: GET_POKE_RESOURCES,
  };
}

export function getPokeResourcesSuccess(pokeList, pokeNatures) {
  return {
    type: GET_POKE_RESOURCES_SUCCESS,
    pokeList,
    pokeNatures,
  };
}

export function getPokeResourcesError(err) {
  return {
    type: GET_POKE_RESOURCES_ERROR,
    err,
  };
}

export function selectPokemon(pokemon) {
  return {
    type: SELECT_POKEMON,
    pokemon,
  };
}

export function removePokemon(pokemon) {
  return {
    type: REMOVE_POKEMON,
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
