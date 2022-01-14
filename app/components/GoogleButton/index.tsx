import CustomButton from '~components/CustomButton';
import GoogIcon from '~components/Icons/GoogIcon';
import * as Styled from './styles';

type Props = {
  children: string;
  handleClick: () => void;
};

function GoogleButton({ children, handleClick }: Props) {
  return (
    <CustomButton size="regular" weight="regular" noMaxWidth onClick={handleClick}>
      <Styled.GoogleButtonContent>
        <GoogIcon secondary />
        {children}
      </Styled.GoogleButtonContent>
    </CustomButton>
  );
}

export default GoogleButton;
