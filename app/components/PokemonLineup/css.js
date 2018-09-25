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
  width: calc(33.3333% - 10px);
  height: 120px;
  display: inline-block;
  margin-bottom: 10px;
  border: 2px dashed;
  margin-right: 10px;
`;

export const Title = styled.div`
  margin-left: 10px;
`;

export const PokeImage = styled.div`
  height: 100%;
  background: ${props => `url(${props.url})`} no-repeat center;
  background-size: contain;
  cursor: pointer;
`;

export const RemoveBtn = styled.button`
  color: #d23737;
  float: right;
  cursor: pointer;

  :hover {
    color: #fd0000;
  }

  :focus {
    outline: 0;
  }
`;
