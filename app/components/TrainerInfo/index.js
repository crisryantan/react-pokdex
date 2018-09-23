/**
 *
 * TrainerInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PokemonLineup from 'components/PokemonLineup';
import PokemonData from 'components/PokemonData';

const TrainerWrapper = styled.div`
  background-color: rgba(221, 7, 35, 1);
  flex: 1 1 400px;
  display: flex;
  flex-direction: column;
`;

/* eslint-disable react/prefer-stateless-function */
class TrainerInfo extends React.PureComponent {
  render() {
    const { selectPokemon, pokeRoster, focusedPokemon } = this.props;
    return (
      <TrainerWrapper>
        <PokemonLineup pokeRoster={pokeRoster} selectPokemon={selectPokemon} />
        <PokemonData focusedPokemon={focusedPokemon} />
      </TrainerWrapper>
    );
  }
}

TrainerInfo.propTypes = {
  selectPokemon: PropTypes.func.isRequired,
  pokeRoster: PropTypes.array.isRequired,
  focusedPokemon: PropTypes.object.isRequired,
};

export default TrainerInfo;
