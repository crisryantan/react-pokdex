import { fromJS } from 'immutable';

import {
  selectHomePageDomain,
  makeSelectLoading,
  makeSelectPokeList,
  makeSelectPokeRoster,
  makeSelectFocusedPokemon,
} from '../selectors';

describe('selectHomepage', () => {
  it('should select the homePage state', () => {
    const homePageState = fromJS({
      pokeList: [],
      pokeRoster: [],
      focusedPokemon: {},
      loading: false,
    });
    const mockedState = fromJS({
      homepage: homePageState,
    });
    expect(selectHomePageDomain(mockedState)).toEqual(homePageState);
  });
});

describe('makeSelectLoading', () => {
  const selector = makeSelectLoading();
  it('should select the fetching state', () => {
    const loading = false;
    const mockedState = fromJS({
      homepage: {
        loading,
      },
    });
    expect(selector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectPokeList', () => {
  const selector = makeSelectPokeList();
  it('should select the pokeList state', () => {
    const pokeList = [];
    const mockedState = fromJS({
      homepage: {
        pokeList,
      },
    });
    expect(selector(mockedState)).toEqual(pokeList);
  });
});

describe('makeSelectPokeRoster', () => {
  const selector = makeSelectPokeRoster();
  it('should select the pokeRoster state', () => {
    const pokeRoster = [];
    const mockedState = fromJS({
      homepage: {
        pokeRoster,
      },
    });
    expect(selector(mockedState)).toEqual(pokeRoster);
  });
});

describe('makeSelectFocusedPokemon', () => {
  const selector = makeSelectFocusedPokemon();
  it('should select the focusedPokemon state', () => {
    const focusedPokemon = {};
    const mockedState = fromJS({
      homepage: {
        focusedPokemon,
      },
    });
    expect(selector(mockedState)).toEqual(focusedPokemon);
  });
});
