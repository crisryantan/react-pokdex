import React from 'react';
import { shallow } from 'enzyme';
import PokemonLineup from '../index';
import { PokeImage, RemoveBtn } from '../css';

describe('<PokemonLineup />', () => {
  let subject = null;
  let pokeRoster;
  let pokeId;
  let selectPokemon;
  let removePokemon;

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
    removePokemon = jest.fn();
  });

  const buildSubject = customProps => {
    const props = {
      pokeRoster,
      pokeId,
      selectPokemon,
      removePokemon,
    };
    return shallow(
      <PokemonLineup {...Object.assign({}, props, customProps)} />,
    );
  };

  it('renders a <PokemonLineup>', () => {
    subject = buildSubject();
    expect(subject.find(PokemonLineup)).toBeDefined();
  });

  it('should successfully trigger selectPokemon', () => {
    subject = buildSubject();
    const PokeImageField = subject.find(PokeImage);
    PokeImageField.props().onClick();

    expect(selectPokemon).toBeCalled();
  });

  it('should successfully trigger removeBtn', () => {
    subject = buildSubject();
    const RemoveBtnField = subject.find(RemoveBtn);
    RemoveBtnField.props().onClick();

    expect(removePokemon).toBeCalled();
  });
});
