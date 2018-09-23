/**
 *
 * PokemonData
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChildWrapper = styled.div`
  flex: 1 1 300px;
  background-color: #a2a2a2;
  border: 10px solid #f1f1f1;
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
`;

const Title = styled.div`
  margin-bottom: 20px;
`;

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
