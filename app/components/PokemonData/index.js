/**
 *
 * PokemonData
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ChildWrapper, Title } from './css';

/* eslint-disable react/prefer-stateless-function */
class PokemonData extends React.PureComponent {
  render() {
    const { focusedPokemon } = this.props;
    return (
      <ChildWrapper>
        <Title>Pokemon Data</Title>
        <div>NAME: {focusedPokemon.name}</div>
      </ChildWrapper>
    );
  }
}

PokemonData.propTypes = {
  focusedPokemon: PropTypes.object.isRequired,
};

export default PokemonData;
