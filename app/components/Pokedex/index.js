/**
 *
 * Pokedex
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Pokemon from 'components/Pokemon';
import { Input } from 'antd';
import {
  PokedexWrapper,
  PokeList,
  PokedexTitle,
  LightsWrapper,
  PokeLights,
  CircleLight,
} from './css';

const { Search } = Input;

function zeroPad(num, places) {
  const zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join('0') + num;
}

const lightList = {
  red: 'radial-gradient(#fb7b7b, #fb0505)',
  yellow: 'radial-gradient(#fbfb9b, #fbfb05)',
  green: 'radial-gradient(#b0fb7b, #50fb05)',
};

/* eslint-disable react/prefer-stateless-function */
class Pokedex extends React.PureComponent {
  render() {
    const { pokeList, selectPokemon, updateFilter } = this.props;
    return (
      <PokedexWrapper>
        <div>
          <PokedexTitle>Pokedex</PokedexTitle>
          <LightsWrapper>
            <PokeLights>
              <CircleLight style={{ background: lightList.red }} />
              <CircleLight style={{ background: lightList.yellow }} />
              <CircleLight style={{ background: lightList.green }} />
            </PokeLights>
          </LightsWrapper>
        </div>

        <Search
          placeholder="Search Pokemon"
          onChange={e => updateFilter(e.currentTarget.value)}
        />
        <PokeList>
          {pokeList.map(pokemon => {
            const pokeNum = pokemon.url
              .replace('https://pokeapi.co/api/v2/pokemon/', '')
              .replace('/', '');
            const pokeId = `#${zeroPad(pokeNum, 3)}`;
            return (
              <Pokemon
                key={pokeId}
                pokemon={pokemon}
                pokeId={pokeId}
                selectPokemon={selectPokemon}
              />
            );
          })}
        </PokeList>
      </PokedexWrapper>
    );
  }
}

Pokedex.propTypes = {
  pokeList: PropTypes.array.isRequired,
  selectPokemon: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
};

export default Pokedex;
