/**
 *
 * Pokemon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PokeRow = styled.div`
  cursor: pointer;
  :hover {
    background-color: rgba(58, 60, 70, 0.8);
  }
`;

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
