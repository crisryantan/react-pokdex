import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1 1 300px;
  background-color: #a2a2a2;
  border: 10px solid #f1f1f1;
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
  position: relative;
`;

export const Title = styled.div`
  margin-bottom: 20px;
`;

export const FormField = styled.div`
  margin-bottom: 10px;
`;

export const SaveBtn = styled.button`
  height: 50px;
  background: -webkit-linear-gradient(top, #307bfb 0%, #0530e5 80%);
  width: 50px;
  border-radius: 100px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
