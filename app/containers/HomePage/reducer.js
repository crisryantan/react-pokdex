/*
 *
 * HomePage2 reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_POKE_RESOURCES,
  GET_POKE_RESOURCES_SUCCESS,
  SELECT_POKEMON_SUCCESS,
  UPDATE_POKEMON_INFO,
} from './constants';

export const initialState = fromJS({
  pokeList: [],
  pokeRoster: [],
  pokeNatures: [],
  focusedPokemon: {},
  loading: false,
});

function findIndex(list, pokemon) {
  return list.findIndex(listItem => listItem.get('name') === pokemon.name);
}

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKE_RESOURCES:
      return state.set('loading', true);

    case GET_POKE_RESOURCES_SUCCESS: {
      return state
        .set('loading', false)
        .set('pokeList', fromJS(action.pokeList))
        .set('pokeNatures', fromJS(action.pokeNatures));
    }

    case SELECT_POKEMON_SUCCESS: {
      const pokeRoster = state.get('pokeRoster');
      const pokemonExist = pokeRoster.find(
        pokemon => pokemon.get('name') === action.pokemon.name,
      );
      const rosterCount = state.get('pokeRoster').count();

      if (pokemonExist) {
        return state.set('focusedPokemon', fromJS(action.pokemon));
      }

      // this is when roster count reaches 6 pokemons.
      // apply FIFO principle when removing a pokemon from the roster
      if (rosterCount === 6 && !pokemonExist) {
        return state
          .set('pokeRoster', pokeRoster.insert(0, fromJS(action.pokemon)).pop())
          .set('focusedPokemon', fromJS(action.pokemon));
      }

      return state
        .set('pokeRoster', pokeRoster.insert(0, fromJS(action.pokemon)))
        .set('focusedPokemon', fromJS(action.pokemon));
    }

    case UPDATE_POKEMON_INFO: {
      const indexOfPokeList = findIndex(state.get('pokeList'), action.pokemon);
      const indexOfPokeRoster = findIndex(
        state.get('pokeRoster'),
        action.pokemon,
      );
      return state
        .setIn(['pokeList', indexOfPokeList], fromJS(action.pokemon))
        .setIn(['pokeRoster', indexOfPokeRoster], fromJS(action.pokemon));
    }

    default:
      return state;
  }
}

export default homePageReducer;
