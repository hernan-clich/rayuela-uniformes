import styled from 'styled-components';
import { ALABASTER, SILVER, PORCELAIN, PRUSSIAN_BLUE, MONZA, GREEN_HAZE } from '~styles/colors';
import { SECONDARY_SPACING_EM, SMALL_BR } from '~styles/variables';

export const CustomTableContainer = styled.div<{ fieldsLength: number }>`
  .tableHeader,
  .tableBody {
    display: flex;
    text-align: center;
    width: 100%;
  }

  .tableHeader {
    justify-content: space-around;
    padding: 12px 0;

    .headerItem {
      opacity: 0.6;
    }
  }

  .tableBody {
    flex-flow: column nowrap;
  }

  .tableTd {
    align-items: center;
    display: flex;
    justify-content: center;
    width: ${({ fieldsLength }) => `calc(100% / ${fieldsLength})`};
  }

  .ctaBtn {
    margin: 0 4px;
    padding: 4px;
  }
`;

export const TableRowContainer = styled.div<{ isLastRow: boolean }>`
  align-items: center;
  background-color: ${ALABASTER};
  border-bottom: ${({ isLastRow }) => !isLastRow && `1px solid ${PORCELAIN}`};
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${SILVER};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  margin-bottom: 6px;
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
  }

  .chip {
    background-color: ${PRUSSIAN_BLUE};
    border-radius: 5px;
    margin: 0.3em;
    padding: 0 0.3em;
    width: fit-content;

    span,
    button {
      color: ${PORCELAIN};
      cursor: default;
      font-weight: bold;
    }
  }

  .green {
    background-color: ${GREEN_HAZE};
  }

  .red {
    background-color: ${MONZA};
  }

  @media (min-width: ${SMALL_BR}px) {
    flex-flow: row nowrap;
    max-height: 4em;
  }
`;
