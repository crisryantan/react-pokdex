/**
 *
 * Pokedex
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { stubData } from './stubData';

const PokedexWrapper = styled.div`
  background-color: rgba(221, 7, 35, 1);
  padding-right: 15px;
  flex: 1 1 200px;
`;

const InnerWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  height: 630px;
  background-color: #d5d8c5;
  padding: 10px;
  padding-top: 0px;
  border-radius: 10px;
  border-top-right-radius: 0px;
  overflow: scroll;
  overflow-x: hidden;
`;

function zeroPad(num, places) {
  const zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join('0') + num;
}

/* eslint-disable react/prefer-stateless-function */
class Pokedex extends React.PureComponent {
  render() {
    return (
      <PokedexWrapper>
        <InnerWrapper>
          {stubData.results.map((pokemon, index) => (
            <div>
              #{zeroPad(index + 1, 3)} {pokemon.name}
            </div>
          ))}
        </InnerWrapper>
      </PokedexWrapper>
    );
  }
}

Pokedex.propTypes = {};

export default Pokedex;
