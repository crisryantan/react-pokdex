/**
 *
 * Pokemon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { PokeRow } from './css';

/* eslint-disable react/prefer-stateless-function */
class Pokemon extends React.PureComponent {
  render() {
    const { pokeId, pokemon, selectPokemon } = this.props;
    const { name } = pokemon;
    return (
      <PokeRow onClick={() => selectPokemon(pokemon)}>
        {`${pokeId} ${name}`}
      </PokeRow>
    );
  }
}

Pokemon.propTypes = {
  pokeId: PropTypes.string.isRequired,
  pokemon: PropTypes.object.isRequired,
  selectPokemon: PropTypes.func.isRequired,
};

export default Pokemon;
