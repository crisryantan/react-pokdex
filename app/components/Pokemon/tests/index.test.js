import React from 'react';
import { shallow } from 'enzyme';
import Pokemon from '../index';

describe('<Pokemon />', () => {
  let subject = null;
  let pokemon;
  let pokeId;
  let selectPokemon;

  beforeEach(() => {
    pokemon = {
      name: 'Bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    };
    pokeId = '#001';
    selectPokemon = jest.fn();
  });

  const buildSubject = customProps => {
    const props = {
      pokemon,
      pokeId,
      selectPokemon,
    };
    return shallow(<Pokemon {...Object.assign({}, props, customProps)} />);
  };

  it('renders a <Pokemon>', () => {
    subject = buildSubject();
    expect(subject.find(Pokemon)).toBeDefined();
  });

  it('should successfully selectPokemon', () => {
    subject = buildSubject();
    subject.props().onClick();
    expect(selectPokemon).toBeCalled();
  });
});
