/**
 *
 * PokemonLineup
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../commonStyled';

const Wrapper = styled.div`
  padding-top: 20px;
  flex: 1 1 250px;
  background-color: #a2a2a2;
  border: 10px solid #f1f1f1;
  margin: 15px 15px 0px 15px;
  border-radius: 10px;
`;

const Lineup = styled.div`
  display: flex;
  height: 75px;
`;

const LineupChild = styled.div`
  flex: 1;
  border: 2px;
`;

/* eslint-disable react/prefer-stateless-function */
class PokemonLineup extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>Pokemon Lineup</Title>
        <Lineup>
          <LineupChild>1</LineupChild>
          <LineupChild>2</LineupChild>
          <LineupChild>3</LineupChild>
        </Lineup>
        <Lineup>
          <LineupChild>4</LineupChild>
          <LineupChild>5</LineupChild>
          <LineupChild>6</LineupChild>
        </Lineup>
      </Wrapper>
    );
  }
}

PokemonLineup.propTypes = {};

export default PokemonLineup;
