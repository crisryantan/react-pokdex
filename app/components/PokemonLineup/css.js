import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 20px;
  flex: 1 1 345px;
  background-color: #a2a2a2;
  border: 10px solid #f1f1f1;
  margin: 15px 15px 0px 15px;
  border-radius: 10px;
`;

export const Lineup = styled.div`
  padding: 10px;
`;

export const LineupChild = styled.div`
  width: calc(33.3333% - 4px);
  height: 120px;
  display: inline-block;
  margin-bottom: 10px;
  border: 2px dashed;
  margin-right: 4px;
  cursor: pointer;
`;

export const PokemonBox = styled.div`
  text-align: center;
  margin-top: 45px;
`;
