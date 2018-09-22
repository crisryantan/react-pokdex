/**
 *
 * TrainerInfo
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
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
    return (
      <TrainerWrapper>
        <PokemonLineup />
        <PokemonData />
      </TrainerWrapper>
    );
  }
}

TrainerInfo.propTypes = {};

export default TrainerInfo;
