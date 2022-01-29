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
    margin: ${SECONDARY_SPACING_EM} clamp(${SECONDARY_SPACING_EM}, 2.2vw, ${PRIMARY_SPACING_EM});
    word-break: break-word;
  }

  .subheadings {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${PRIMARY_SPACING_EM};
    padding: 8px;

    span {
      margin-right: ${SECONDARY_SPACING_EM};
    }
  }

  .chipsContainer {
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: ${PRIMARY_SPACING_EM};

    .chip {
      display: flex;
      flex-flow: column nowrap;
      margin-bottom: ${PRIMARY_SPACING_EM};

      button {
        cursor: default;
      }

      span {
        margin-bottom: 8px;
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
