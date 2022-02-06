import styled from 'styled-components';
import { GREEN_HAZE, MONZA } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: ${PRIMARY_SPACING_EM};
  padding: ${SECONDARY_SPACING_EM} clamp(${PRIMARY_SPACING_EM}, 5vw, 4em);
  width: calc(100vw - 15px);

  .backBtn {
    margin-top: 1em;
  }

  .icon {
    margin-right: 0.5em;
  }

  .cartProdsWrapper {
    width: 100%;
  }

  .heading,
  .subheadings,
  .chipsContainer {
    margin: ${SECONDARY_SPACING_EM} 0;
    word-break: break-word;
  }

  .subheadings {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${PRIMARY_SPACING_EM};
    padding: 8px;

    .prodPrice {
      white-space: nowrap;
    }

    span {
      margin-right: ${SECONDARY_SPACING_EM};
    }
  }

  .statusContainer {
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: ${PRIMARY_SPACING_EM};

    .status {
      align-items: center;
      display: flex;
      flex-flow: row nowrap;
      margin-bottom: ${PRIMARY_SPACING_EM};

      .chip {
        border-radius: 5px;
        margin: 0 8px;
        padding: 4px;
      }

      .paymentBtn {
        border-radius: 4px;
        padding: 12px;
      }
    }
  }

  .green {
    background-color: ${GREEN_HAZE};
  }

  .red {
    background-color: ${MONZA};
  }
`;
