import HeaderBox from '@screens/Home/components/HeaderBox';
import useWindowSize from '@hooks/useWindowSize';

import SingleBoxContainer from './styles';
import { defineHeight } from './utils';

type Props = {
  bgImg: string;
  boxTitle: string;
  squaredShape: boolean;
};

function SingleBox({ bgImg, boxTitle, squaredShape }: Props) {
  const { width } = useWindowSize();

  const elementHeight = defineHeight(width, squaredShape);

  return (
    <SingleBoxContainer bgImg={bgImg} height={elementHeight}>
      <HeaderBox
        alignment={{ horizontal: 'left', vertical: 'center' }}
        buttonText="Comprar"
        titleText={boxTitle}
      />
    </SingleBoxContainer>
  );
}

export default SingleBox;
