import useWindowSize from '~hooks/useWindowSize';
import { StyledMobileLabel } from './styles';

type Props = {
  labelText: string;
};

function MobileLabel({ labelText }: Props) {
  const { isSmallScreen } = useWindowSize();

  if (!isSmallScreen) return null;

  return (
    <StyledMobileLabel as="span" size="xsmall" weight="bold" textTransform="uppercase">
      {labelText}
    </StyledMobileLabel>
  );
}

export default MobileLabel;
