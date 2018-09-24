import React from 'react';
import { shallow } from 'enzyme';
import { Input } from 'antd';
import Pokedex from '../index';

const { Search } = Input;

describe('<Pokedex />', () => {
  let subject = null;
  let updateFilter;
  let pokeList;
  let selectPokemon;

  beforeEach(() => {
    pokeList = [
      { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    ];
    updateFilter = jest.fn();
    selectPokemon = jest.fn();
  });

  const buildSubject = customProps => {
    const props = {
      pokeList,
      updateFilter,
      selectPokemon,
    };
    return shallow(<Pokedex {...Object.assign({}, props, customProps)} />);
  };

  it('renders a <Pokedex>', () => {
    subject = buildSubject();
    expect(subject.find(Pokedex)).toBeDefined();
  });

  it('should successfully update filter', () => {
    const e = {
      currentTarget: {
        value: 'Test',
      },
    };

    subject = buildSubject();
    const SearchField = subject.find(Search);
    SearchField.props().onChange(e);

    expect(updateFilter).toBeCalled();
  });
});
