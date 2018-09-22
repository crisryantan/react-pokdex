/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';

import Pokedex from 'components/Pokedex';
import TrainerInfo from 'components/TrainerInfo';

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <TrainerInfo />
        <Pokedex />
      </Wrapper>
    );
  }
}
