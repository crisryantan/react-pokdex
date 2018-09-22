/**
 *
 * TrainerInfo
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const TrainerWrapper = styled.div`
  background-color: rgba(221, 7, 35, 1);
  border: 4px solid rgba(221, 7, 35, 1);
  flex: 1 1 400px;
  display: flex;
  flex-direction: column;
`;

const ChildWrapper = styled.div`
  flex: 1 1 300px;
  background-color: #d5d8c5;
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
`;

/* eslint-disable react/prefer-stateless-function */
class TrainerInfo extends React.PureComponent {
  render() {
    return (
      <TrainerWrapper>
        <ChildWrapper>Pokemon Lineup</ChildWrapper>
        <ChildWrapper>Pokemon Data</ChildWrapper>
      </TrainerWrapper>
    );
  }
}

TrainerInfo.propTypes = {};

export default TrainerInfo;
