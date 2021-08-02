import useWindowSize from '@hooks/useWindowSize';
import SingleBox from '@screens/Home/components/SingleBox';
import { SCHOOL_DATA } from './constants';
import * as Styled from './styles';

function Schools() {
  const { width } = useWindowSize();
  return (
    <Styled.SchoolsContainer width={width}>
      {SCHOOL_DATA.map((school) => (
        <SingleBox
          key={school.id}
          boxTitle={school.name}
          bgImg={school.img}
          fontColor={school.fontColor}
          squaredShape
        />
      ))}
    </Styled.SchoolsContainer>
  );
}

export default Schools;
