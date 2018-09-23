/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import Pokedex from 'components/Pokedex';
import TrainerInfo from 'components/TrainerInfo';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import saga from './saga';

import {
  makeSelectPokeList,
  makeSelectPokeRoster,
  makeSelectFocusedPokemon,
} from './selectors';
import {
  getPokeList as getPokeListAction,
  selectPokemon as selectPokemonAction,
} from './actions';

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.getPokeList();
  }

  render() {
    const { pokeList, selectPokemon, pokeRoster, focusedPokemon } = this.props;

    return (
      <Wrapper>
        <TrainerInfo
          selectPokemon={selectPokemon}
          pokeRoster={pokeRoster}
          focusedPokemon={focusedPokemon}
        />
        <Pokedex pokeList={pokeList} selectPokemon={selectPokemon} />
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  getPokeList: PropTypes.func.isRequired,
  selectPokemon: PropTypes.func.isRequired,
  pokeList: PropTypes.array.isRequired,
  pokeRoster: PropTypes.array.isRequired,
  focusedPokemon: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pokeList: makeSelectPokeList(),
  pokeRoster: makeSelectPokeRoster(),
  focusedPokemon: makeSelectFocusedPokemon(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPokeList: () => dispatch(getPokeListAction()),
    selectPokemon: pokemon => dispatch(selectPokemonAction(pokemon)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
