import styled from 'styled-components';

export const PokedexWrapper = styled.div`
  background-color: rgba(221, 7, 35, 1);
  padding-right: 15px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  flex: 1 1 250px;
`;

export const PokeList = styled.div`
  margin-top: 5px;
  height: 530px;
  background-color: #a2a2a2;
  padding: 5px 10px 10px 10px;
  border-radius: 10px;
  border: 10px solid #f1f1f1;
  overflow: scroll;
  overflow-x: hidden;
`;

export const PokedexTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 30px;
`;

export const LightsWrapper = styled.div`
  margin-top: -35px;
  float: right;
`;

export const PokeLights = styled.div`
  display: flex;
`;

export const CircleLight = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-right: 4px;
`;
