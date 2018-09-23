/*
 *
 * HomePage2 reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_POKE_LIST,
  GET_POKE_LIST_SUCCESS,
  SELECT_POKEMON,
} from './constants';

export const initialState = fromJS({
  pokeList: [],
  pokeRoster: [],
  focusedPokemon: {},
  loading: true,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKE_LIST:
      return state;

    case GET_POKE_LIST_SUCCESS: {
      return state
        .set('loading', false)
        .set('pokeList', fromJS(action.pokeList));
    }

    case SELECT_POKEMON: {
      const pokeRoster = state.get('pokeRoster');
      const pokemonExist = pokeRoster.find(
        pokemon => pokemon.name === action.pokemon.name,
      );
      const rosterCount = state.get('pokeRoster').count();

      if (pokemonExist) {
        return state.set('focusedPokemon', fromJS(action.pokemon));
      }

      // this is when roster count reaches 6 pokemons.
      // apply FIFO principle when removing a pokemon from the roster
      if (rosterCount === 6 && !pokemonExist) {
        return state
          .set('pokeRoster', pokeRoster.insert(0, action.pokemon).pop())
          .set('focusedPokemon', fromJS(action.pokemon));
      }

      return state
        .set('pokeRoster', pokeRoster.insert(0, action.pokemon))
        .set('focusedPokemon', fromJS(action.pokemon));
    }

    default:
      return state;
  }
}

export default homePageReducer;
