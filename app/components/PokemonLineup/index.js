/**
 *
 * PokemonLineup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Title, Wrapper, Lineup, LineupChild, PokeImage } from './css';

/* eslint-disable react/prefer-stateless-function */
class PokemonLineup extends React.PureComponent {
  render() {
    const { pokeRoster, selectPokemon } = this.props;
    return (
      <Wrapper>
        <Title>Pokemon Lineup</Title>
        <Lineup>
          {pokeRoster.map(pokemon => (
            <LineupChild
              key={pokemon.name}
              onClick={() => selectPokemon(pokemon)}
            >
              <PokeImage url={pokemon.sprites.front_default} />
            </LineupChild>
          ))}
        </Lineup>
      </Wrapper>
    );
  }
}

PokemonLineup.propTypes = {
  pokeRoster: PropTypes.array.isRequired,
  selectPokemon: PropTypes.func.isRequired,
};

export default PokemonLineup;
