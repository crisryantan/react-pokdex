import React from 'react';
import { shallow } from 'enzyme';

import { SaveBtn } from '../css';
import PokemonData from '../index';

describe('<PokemonData />', () => {
  let subject = null;
  let pokeRoster;
  let updatePokemon;
  let focusedPokemon;
  let pokeNatures;

  beforeEach(() => {
    pokeRoster = [
      { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    ];
    updatePokemon = jest.fn();
    focusedPokemon = {};
    pokeNatures = [{ name: 'Hardy' }, { name: 'Bold' }, { name: 'Modest' }];
  });

  const buildSubject = customProps => {
    const props = {
      pokeRoster,
      updatePokemon,
      focusedPokemon,
      pokeNatures,
    };
    return shallow(<PokemonData {...Object.assign({}, props, customProps)} />);
  };

  it('renders a <PokemonData>', () => {
    subject = buildSubject();
    expect(subject.find(PokemonData)).toBeDefined();
  });

  describe('<PokemonData /> with focusedPokemon', () => {
    beforeEach(() => {
      subject = buildSubject({
        focusedPokemon: {
          name: 'Bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
          moves: [{ move: { move: { name: 'headbutt' } } }],
          abilities: [{ ability: { name: 'Hustle' } }],
        },
      });
    });

    it('renders pokemon form successfully', () => {
      expect(subject.find('.form')).toBeDefined();
      expect(subject.find(SaveBtn)).toBeDefined();
    });

    it('should update data successfully', () => {
      subject.instance().updateData('gender', 'Female');
      expect(subject.instance().state.data.gender).toEqual('Female');
    });

    it('should saveChanges successfully', () => {
      subject.instance().saveChanges();
      expect(updatePokemon).toBeCalled();
    });
  });
});
