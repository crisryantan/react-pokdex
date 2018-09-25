import { fromJS } from 'immutable';
import homePageReducer from '../reducer';

import {
  getPokeList,
  getPokeListSuccess,
  selectPokemonSuccess,
  updatePokemonInfo,
} from '../actions';

describe('homePageReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      pokeList: [],
      pokeRoster: [],
      focusedPokemon: {},
      loading: false,
    });
  });

  it('returns the initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(state);
  });

  it('should handle the getPokeList action correctly', () => {
    const expectedResult = fromJS({
      pokeList: [],
      pokeRoster: [],
      focusedPokemon: {},
      loading: true,
    });
    expect(homePageReducer(state, getPokeList())).toEqual(expectedResult);
  });

  it('should handle the getPokeListSuccess action correctly', () => {
    const pokeList = [
      { name: 'Bulbasaur' },
      { name: 'Squirtle' },
      { name: 'Charmander' },
    ];
    const expectedResult = fromJS({
      pokeList,
      focusedPokemon: {},
      pokeRoster: [],
      loading: false,
    });
    expect(homePageReducer(state, getPokeListSuccess(pokeList))).toEqual(
      expectedResult,
    );
  });

  it('should handle the selectPokemonSuccess action correctly', () => {
    const pokemon = { name: 'Bulbasaur' };
    const expectedResult = fromJS({
      pokeList: [],
      focusedPokemon: pokemon,
      pokeRoster: [pokemon],
      loading: false,
    });
    expect(homePageReducer(state, selectPokemonSuccess(pokemon))).toEqual(
      expectedResult,
    );
  });

  it('should handle the updatePokemonInfo action correctly', () => {
    const pokemon = { name: 'Bulbasaur' };
    const expectedResult = fromJS({
      pokeList: [pokemon],
      focusedPokemon: {},
      pokeRoster: [pokemon],
      loading: false,
    });
    expect(homePageReducer(state, updatePokemonInfo(pokemon))).toEqual(
      expectedResult,
    );
  });
});
