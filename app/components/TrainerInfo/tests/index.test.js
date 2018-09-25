import React from 'react';
import { shallow } from 'enzyme';
import TrainerInfo from '../index';

describe('<TrainerInfo />', () => {
  let subject = null;
  let pokeRoster;
  let focusedPokemon;
  let selectPokemon;
  let updatePokemon;
  let removePokemon;
  let pokeNatures;

  beforeEach(() => {
    pokeRoster = [
      { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    ];
    focusedPokemon = {};
    pokeNatures = [];
    updatePokemon = jest.fn();
    selectPokemon = jest.fn();
    removePokemon = jest.fn();
  });

  const buildSubject = customProps => {
    const props = {
      pokeRoster,
      focusedPokemon,
      updatePokemon,
      selectPokemon,
      pokeNatures,
      removePokemon,
    };
    return shallow(<TrainerInfo {...Object.assign({}, props, customProps)} />);
  };

  it('renders a <TrainerInfo>', () => {
    subject = buildSubject();
    expect(subject.find(TrainerInfo)).toBeDefined();
  });
});
