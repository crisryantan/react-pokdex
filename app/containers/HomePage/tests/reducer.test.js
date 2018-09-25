import { fromJS } from 'immutable';
import homePageReducer from '../reducer';

import {
  getPokeResources,
  getPokeResourcesSuccess,
  getPokeResourcesError,
  selectPokemonSuccess,
  updatePokemonInfo,
  removePokemon,
} from '../actions';

describe('homePageReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      pokeList: [],
      pokeRoster: [],
      pokeNatures: [],
      focusedPokemon: {},
      loading: false,
    });
  });

  it('returns the initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(state);
  });

  it('should handle the getPokeResources action correctly', () => {
    const expectedResult = fromJS({
      pokeList: [],
      pokeRoster: [],
      pokeNatures: [],
      focusedPokemon: {},
      loading: true,
    });
    expect(homePageReducer(state, getPokeResources())).toEqual(expectedResult);
  });

  it('should handle the getPokeResourcesSuccess action correctly', () => {
    const pokeList = [
      { name: 'Bulbasaur' },
      { name: 'Squirtle' },
      { name: 'Charmander' },
    ];
    const pokeNatures = [
      { name: 'Hardy' },
      { name: 'Bold' },
      { name: 'Modest' },
    ];

    const expectedResult = fromJS({
      pokeList,
      pokeNatures,
      focusedPokemon: {},
      pokeRoster: [],
      loading: false,
    });
    expect(
      homePageReducer(state, getPokeResourcesSuccess(pokeList, pokeNatures)),
    ).toEqual(expectedResult);
  });

  it('should handle the getPokeResourcesError action correctly', () => {
    const err = 'Something went wrong';
    const expectedResult = fromJS({
      pokeList: [],
      pokeNatures: [],
      focusedPokemon: {},
      pokeRoster: [],
      loading: false,
    });
    expect(homePageReducer(state, getPokeResourcesError(err))).toEqual(
      expectedResult,
    );
  });

  it('should handle the selectPokemonSuccess action correctly', () => {
    const pokemon = { name: 'Bulbasaur' };
    const expectedResult = fromJS({
      pokeList: [],
      pokeNatures: [],
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
      pokeNatures: [],
      focusedPokemon: {},
      pokeRoster: [pokemon],
      loading: false,
    });
    expect(homePageReducer(state, updatePokemonInfo(pokemon))).toEqual(
      expectedResult,
    );
  });

  it('should handle the removePokemon action correctly', () => {
    const pokemon = { name: 'Bulbasaur' };
    const expectedResult = fromJS({
      pokeList: [],
      pokeNatures: [],
      focusedPokemon: {},
      pokeRoster: [],
      loading: false,
    });
    expect(homePageReducer(state, removePokemon(pokemon))).toEqual(
      expectedResult,
    );
  });
});
