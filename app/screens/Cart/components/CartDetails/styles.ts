import styled from 'styled-components';

export const CartDetailsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100vw;

  .cartProdsWrapper {
    flex-grow: 5;
  }

  .detailsContainer {
    flex-grow: 5;
    min-width: 230px;
  }
`;
