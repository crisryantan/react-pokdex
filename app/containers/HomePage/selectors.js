import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.get('homePage', initialState);

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(selectHomePageDomain, substate => substate.get('loading'));

const makeSelectPokeList = () =>
  createSelector(selectHomePageDomain, substate =>
    substate.get('pokeList').toJS(),
  );

const makeSelectPokeRoster = () =>
  createSelector(selectHomePageDomain, substate =>
    substate.get('pokeRoster').toJS(),
  );

const makeSelectPokeNatures = () =>
  createSelector(selectHomePageDomain, substate =>
    substate.get('pokeNatures').toJS(),
  );

const makeSelectFocusedPokemon = () =>
  createSelector(selectHomePageDomain, substate =>
    substate.get('focusedPokemon').toJS(),
  );

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, substate => substate.toJS());

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectLoading,
  makeSelectPokeList,
  makeSelectPokeRoster,
  makeSelectPokeNatures,
  makeSelectFocusedPokemon,
};
