import styled from 'styled-components';
import { ALABASTER, SILVER, PORCELAIN, PRUSSIAN_BLUE, MONZA, GREEN_HAZE } from '~styles/colors';
import { SECONDARY_SPACING_EM } from '~styles/variables';

export const CustomTableContainer = styled.div<{ fieldsLength: number }>`
  .tableHeader,
  .tableBody {
    display: flex;
    text-align: center;
    width: 100%;
  }

  .tableHeader {
    justify-content: space-around;
    padding: 12px;

    .headerItem {
      opacity: 0.6;
    }
  }

  .tableBody {
    flex-flow: column nowrap;
  }

  .tableTd {
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
  flex-flow: row nowrap;
  justify-content: space-around;
  margin-bottom: 6px;
  max-height: 4em;
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
