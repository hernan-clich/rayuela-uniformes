import styled from 'styled-components';

export const CartDetailsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 2em;
  width: 100vw;

  .cartProdsWrapper {
    flex-grow: 5;
  }

  .title {
    margin: 1em clamp(0.9em, 2.2vw, 2em);
  }

  .detailsContainer {
    flex-grow: 5;
    min-width: 230px;
  }
`;
