import HeaderBox from '@screens/Home/components/HeaderBox';
import useWindowSize from '@hooks/useWindowSize';
import SingleSchoolContainer from './styles';

type Props = {
  bgImg: string;
  schoolName: string;
};

function SingleSchool({ bgImg, schoolName }: Props) {
  const { width } = useWindowSize();

  return (
    <SingleSchoolContainer bgImg={bgImg} width={width}>
      <HeaderBox
        alignment={{ horizontal: 'left', vertical: 'center' }}
        buttonText="Comprar"
        titleText={schoolName}
      />
    </SingleSchoolContainer>
  );
}

export default SingleSchool;
