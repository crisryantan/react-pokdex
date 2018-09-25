import styled from 'styled-components';

export const PokedexWrapper = styled.div`
  background-color: rgba(221, 7, 35, 1);
  padding-right: 15px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  flex: 1 1 320px;

  @media (max-width: 992px) {
    border-bottom-right-radius: 0px;
    padding-left: 15px;
    order: 1;
  }
`;

export const PokeList = styled.div`
  margin-top: 10px;
  height: 587px;
  background-color: #a2a2a2;
  padding: 5px 10px 10px 10px;
  border-radius: 10px;
  border: 10px solid #f1f1f1;
  overflow: scroll;
  overflow-x: hidden;

  @media (max-width: 992px) {
    height: 400px;
  }
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

export const PowerCircle = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid #fff;
  float: left;
  box-shadow: 0 0 10px #490000;
  background: radial-gradient(#05fbfb, #29abe3);
  border-radius: 35px;

  flex: 1;
  margin: 10px 15px 10px 20px;

  .reflect {
    width: 30px;
    height: 18px;
    margin: 3px 0 0 15px;
    background: #fff;
    opacity: 0.6;
    border-radius: 15px 9px;
  }
`;
