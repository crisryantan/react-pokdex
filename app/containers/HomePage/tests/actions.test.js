import {
  getPokeResources,
  getPokeResourcesSuccess,
  getPokeResourcesError,
  selectPokemon,
  updatePokemonInfo,
} from '../actions';

import {
  GET_POKE_RESOURCES,
  GET_POKE_RESOURCES_SUCCESS,
  GET_POKE_RESOURCES_ERROR,
  SELECT_POKEMON,
  UPDATE_POKEMON_INFO,
} from '../constants';

describe('HomePage actions', () => {
  describe('getPokeResources', () => {
    it('has a type of GET_POKE_RESOURCES', () => {
      const expected = {
        type: GET_POKE_RESOURCES,
      };

      expect(getPokeResources()).toEqual(expected);
    });
  });

  describe('getPokeResourcesSuccess', () => {
    it('has a type of GET_POKE_RESOURCES_SUCCESS', () => {
      const pokeList = [];
      const pokeNatures = [];
      const expected = {
        type: GET_POKE_RESOURCES_SUCCESS,
        pokeList,
        pokeNatures,
      };
      expect(getPokeResourcesSuccess(pokeList, pokeNatures)).toEqual(expected);
    });
  });

  describe('getPokeResourcesError', () => {
    it('has a type of GET_POKE_RESOURCES_ERROR', () => {
      const err = '';
      const expected = {
        type: GET_POKE_RESOURCES_ERROR,
        err,
      };
      expect(getPokeResourcesError(err)).toEqual(expected);
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
