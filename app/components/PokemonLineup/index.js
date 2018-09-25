/**
 *
 * PokemonLineup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  Wrapper,
  Lineup,
  LineupChild,
  PokeImage,
  RemoveBtn,
} from './css';

/* eslint-disable react/prefer-stateless-function */
class PokemonLineup extends React.PureComponent {
  render() {
    const { pokeRoster, selectPokemon, removePokemon } = this.props;
    return (
      <Wrapper>
        <Title>Pokemon Lineup</Title>
        <Lineup>
          {pokeRoster.map(pokemon => (
            <LineupChild key={pokemon.name}>
              <RemoveBtn onClick={() => removePokemon(pokemon)}>X</RemoveBtn>
              <PokeImage
                className="poke-image"
                onClick={() => selectPokemon(pokemon)}
                url={pokemon.sprites.front_default}
              />
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
  removePokemon: PropTypes.func.isRequired,
};

export default PokemonLineup;
