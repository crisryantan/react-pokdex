import React from 'react';
import { shallow } from 'enzyme';
import PokemonLineup from '../index';
import { LineupChild } from '../css';

describe('<PokemonLineup />', () => {
  let subject = null;
  let pokeRoster;
  let pokeId;
  let selectPokemon;

  beforeEach(() => {
    pokeRoster = [
      {
        name: 'Bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
        sprites: { front_default: 'url' },
      },
    ];
    pokeId = '#001';
    selectPokemon = jest.fn();
  });

  const buildSubject = customProps => {
    const props = {
      pokeRoster,
      pokeId,
      selectPokemon,
    };
    return shallow(
      <PokemonLineup {...Object.assign({}, props, customProps)} />,
    );
  };

  it('renders a <PokemonLineup>', () => {
    subject = buildSubject();
    expect(subject.find(PokemonLineup)).toBeDefined();
  });

  it('should successfully selectPokemon', () => {
    subject = buildSubject();
    const LineupChildField = subject.find(LineupChild);
    LineupChildField.props().onClick();

    expect(selectPokemon).toBeCalled();
  });
});
