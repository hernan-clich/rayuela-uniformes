import styled from 'styled-components';

export const ModalBodyContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  width: fit-content;

  .modalHeading {
    display: block;
    margin: 48px;
  }

  .modalSubheading {
    display: block;
    margin-bottom: 16px;
    max-width: 80%;
  }

  .ctaContainer {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 32px 0;
    width: 100%;
  }
`;
