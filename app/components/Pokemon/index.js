/**
 *
 * Pokemon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PokeRow = styled.div`
  :hover {
    background-color: rgba(58, 60, 70, 0.8);
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Pokemon extends React.PureComponent {
  render() {
    const { pokeId, name } = this.props;
    return <PokeRow>{`${pokeId} ${name}`}</PokeRow>;
  }
}

Pokemon.propTypes = {
  pokeId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Pokemon;
