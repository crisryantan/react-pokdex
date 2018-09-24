import {
  getPokeList,
  getPokeListSuccess,
  selectPokemon,
  updatePokemonInfo,
} from '../actions';

import {
  GET_POKE_LIST,
  GET_POKE_LIST_SUCCESS,
  SELECT_POKEMON,
  UPDATE_POKEMON_INFO,
} from '../constants';

describe('HomePage actions', () => {
  describe('getPokeList', () => {
    it('has a type of GET_POKE_LIST', () => {
      const expected = {
        type: GET_POKE_LIST,
      };

      expect(getPokeList()).toEqual(expected);
    });
  });

  describe('getPokeListSuccess', () => {
    it('has a type of GET_POKE_LIST_SUCCESS', () => {
      const pokeList = [];
      const expected = {
        type: GET_POKE_LIST_SUCCESS,
        pokeList,
      };
      expect(getPokeListSuccess(pokeList)).toEqual(expected);
    });
  });

  describe('selectPokemon', () => {
    it('has a type of SELECT_POKEMON', () => {
      const pokemon = { name: 'Charmander' };
      const expected = {
        type: SELECT_POKEMON,
        pokemon,
      };
      expect(selectPokemon(pokemon)).toEqual(expected);
    });
  });

  describe('updatePokemonInfo', () => {
    it('has a type of UPDATE_POKEMON_INFO', () => {
      const pokemon = { name: 'Charmander', nature: 'Cool' };
      const expected = {
        type: UPDATE_POKEMON_INFO,
        pokemon,
      };
      expect(updatePokemonInfo(pokemon)).toEqual(expected);
    });
  });
});
