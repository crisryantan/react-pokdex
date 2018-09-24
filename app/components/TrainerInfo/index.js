/**
 *
 * TrainerInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import PokemonLineup from 'components/PokemonLineup';
import PokemonData from 'components/PokemonData';

import { TrainerWrapper } from './css';

/* eslint-disable react/prefer-stateless-function */
class TrainerInfo extends React.PureComponent {
  render() {
    const {
      selectPokemon,
      pokeRoster,
      focusedPokemon,
      updatePokemon,
    } = this.props;
    return (
      <TrainerWrapper>
        <PokemonLineup pokeRoster={pokeRoster} selectPokemon={selectPokemon} />
        <PokemonData
          focusedPokemon={focusedPokemon}
          updatePokemon={updatePokemon}
        />
      </TrainerWrapper>
    );
  }
}

TrainerInfo.propTypes = {
  selectPokemon: PropTypes.func.isRequired,
  updatePokemon: PropTypes.func.isRequired,
  pokeRoster: PropTypes.array.isRequired,
  focusedPokemon: PropTypes.object.isRequired,
};

export default TrainerInfo;
