/**
 *
 * Pokedex
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pokemon from 'components/Pokemon';

import { stubData } from './stubData';

const PokedexWrapper = styled.div`
  background-color: rgba(221, 7, 35, 1);
  padding-right: 15px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  flex: 1 1 250px;
`;

const PokeList = styled.div`
  margin-top: 5px;
  height: 530px;
  background-color: #a2a2a2;
  padding: 5px 10px 10px 10px;
  border-radius: 10px;
  border: 10px solid #f1f1f1;
  overflow: scroll;
  overflow-x: hidden;
`;

const PokedexTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 30px;
`;

const LightsWrapper = styled.div`
  margin-top: -35px;
  float: right;
`;

const PokeLights = styled.div`
  display: flex;
`;

const CircleLight = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-right: 4px;
`;

function zeroPad(num, places) {
  const zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join('0') + num;
}

const lightList = {
  red: 'radial-gradient(#fb7b7b, #fb0505)',
  yellow: 'radial-gradient(#fbfb9b, #fbfb05)',
  green: 'radial-gradient(#b0fb7b, #50fb05)',
};

/* eslint-disable react/prefer-stateless-function */
class Pokedex extends React.PureComponent {
  render() {
    return (
      <PokedexWrapper>
        <PokedexTitle>Pokedex</PokedexTitle>
        <LightsWrapper>
          <PokeLights>
            <CircleLight style={{ background: lightList.red }} />
            <CircleLight style={{ background: lightList.yellow }} />
            <CircleLight style={{ background: lightList.green }} />
          </PokeLights>
        </LightsWrapper>
        <PokeList>
          {stubData.results.map((pokemon, index) => {
            const pokeId = `#${zeroPad(index + 1, 3)}`;
            return <Pokemon key={pokeId} name={pokemon.name} pokeId={pokeId} />;
          })}
        </PokeList>
      </PokedexWrapper>
    );
  }
}

Pokedex.propTypes = {};

export default Pokedex;
