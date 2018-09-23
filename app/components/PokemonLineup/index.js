/**
 *
 * PokemonLineup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
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
  padding: 10px;
`;

const LineupChild = styled.div`
  width: calc(33.3333% - 4px);
  height: 120px;
  display: inline-block;
  margin-bottom: 10px;
  border: 2px dashed;
  margin-right: 4px;
  cursor: pointer;
`;

const PokemonBox = styled.div`
  text-align: center;
  margin-top: 45px;
`;

// const dummyImage = 'http://dummyimage.com/250x250.png/dddddd/000000';

/* eslint-disable react/prefer-stateless-function */
class PokemonLineup extends React.PureComponent {
  render() {
    const { pokeRoster, selectPokemon } = this.props;
    console.log(pokeRoster);
    return (
      <Wrapper>
        <Title>Pokemon Lineup</Title>
        <Lineup>
          {pokeRoster.map(pokemon => (
            <LineupChild
              key={pokemon.name}
              onClick={() => selectPokemon(pokemon)}
            >
              <PokemonBox>{pokemon.name}</PokemonBox>
            </LineupChild>
          ))}
        </Lineup>
      </Wrapper>
    );
  }
}

PokemonLineup.propTypes = {
  pokeRoster: PropTypes.array.isRequired,
  selectPokemon: PropTypes.func.isRequired,
};

export default PokemonLineup;
