import styled from 'styled-components';
import { ALABASTER, SILVER, PORCELAIN, PRUSSIAN_BLUE, MONZA, GREEN_HAZE } from '~styles/colors';
import { SECONDARY_SPACING_EM } from '~styles/variables';

export const CustomTableContainer = styled.div<{ fieldsLength: number }>`
  .tableHeader,
  .tableBody {
    background-color: ${ALABASTER};
    box-shadow: 0px 0px 5px 0px ${SILVER};
    border-radius: ${SECONDARY_SPACING_EM};
    display: flex;
    padding: ${SECONDARY_SPACING_EM};
    text-align: center;
    width: 100%;
  }

  .tableHeader {
    justify-content: space-around;
    margin-bottom: ${SECONDARY_SPACING_EM};
  }

  .tableBody {
    flex-flow: column nowrap;
  }

  .tableTd {
    width: ${({ fieldsLength }) => `calc(100% / ${fieldsLength})`};
  }
`;

export const TableRowContainer = styled.div<{ isLastRow: boolean }>`
  align-items: center;
  border-bottom: ${({ isLastRow }) => !isLastRow && `1px solid ${PORCELAIN}`};
  display: flex;
  flex-flow: row nowrap;
  max-height: 4em;
  justify-content: space-around;
  overflow: hidden;
  padding: ${SECONDARY_SPACING_EM} 0;
  width: 100%;

  .thumbnail {
    height: 2em;
    width: auto;
  }

  .sizesContainer {
    display: flex;
    flex-flow: row wrap;

    .size {
      background-color: ${PRUSSIAN_BLUE};
      border-radius: 5px;
      margin: 0.3em;
      padding: 0 0.3em;

      span {
        color: ${PORCELAIN};
      }
    }

    .green {
      background-color: ${GREEN_HAZE};
    }

    .red {
      background-color: ${MONZA};
    }
  }
`;