/**
 *
 * PokemonData
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../commonStyled';

const ChildWrapper = styled.div`
  flex: 1 1 300px;
  background-color: #a2a2a2;
  border: 10px solid #f1f1f1;
  padding-top: 20px;
  margin: 15px;
  border-radius: 10px;
`;

/* eslint-disable react/prefer-stateless-function */
class PokemonData extends React.PureComponent {
  render() {
    return (
      <ChildWrapper>
        <Title>Pokemon Data</Title>
      </ChildWrapper>
    );
  }
}

PokemonData.propTypes = {};

export default PokemonData;
