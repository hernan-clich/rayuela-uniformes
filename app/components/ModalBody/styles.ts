import styled from 'styled-components';

export const ModalBodyContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .modalHeading {
    display: block;
    margin: 48px;
  }

  .modalSubheading {
    display: block;
    margin-bottom: 16px;
    max-width: 75%;
  }

  .ctaContainer {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 32px 0;
  }
`;
