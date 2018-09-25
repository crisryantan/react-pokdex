import styled from 'styled-components';

export const TrainerWrapper = styled.div`
  background-color: rgba(221, 7, 35, 1);
  flex: 2 1 450px;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    order: 2;
    flex: 2 1 675px;
  }
`;
