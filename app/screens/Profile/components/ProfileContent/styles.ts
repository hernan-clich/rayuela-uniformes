import styled from 'styled-components';
import { SILVER } from '~styles/colors';
import { PRIMARY_SPACING_EM, SECONDARY_SPACING_EM } from '~styles/variables';

export const ProfileContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 0 4em;

  .headingContainer {
    align-items: center;
    box-shadow: 0px 1px 4px 0px ${SILVER};
    display: flex;
    flex-flow: column nowrap;
    padding: 3em 0;
    width: 100vw;
  }

  .userPic {
    border-radius: 50%;
    margin: 0 auto ${SECONDARY_SPACING_EM};
    max-width: 200px;
    width: 180px;
  }

  .memberSince {
    margin: 8px 0 ${PRIMARY_SPACING_EM};
  }

  .tableContainer {
    margin: ${PRIMARY_SPACING_EM};

    h4 {
      margin-bottom: ${SECONDARY_SPACING_EM};
    }
  }
`;
