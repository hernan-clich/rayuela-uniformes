import HeaderBox from '@screens/Home/components/HeaderBox';
import useWindowSize from '@hooks/useWindowSize';
import SingleSchoolContainer from './styles';

type Props = {
  bgImg: string;
  boxTitle: string;
};

function SingleBox({ bgImg, boxTitle }: Props) {
  const { width } = useWindowSize();

  return (
    <SingleSchoolContainer bgImg={bgImg} width={width}>
      <HeaderBox
        alignment={{ horizontal: 'left', vertical: 'center' }}
        buttonText="Comprar"
        titleText={boxTitle}
      />
    </SingleSchoolContainer>
  );
}

export default SingleBox;
