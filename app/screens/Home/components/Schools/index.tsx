import PATHS from '~constants/paths';
import { SCHOOL_DATA } from '~constants/schools';
import useWindowSize from '~hooks/useWindowSize';
import SingleBox from '~screens/Home/components/SingleBox';
import * as Styled from './styles';

function Schools() {
  const { width } = useWindowSize();
  return (
    <Styled.SchoolsContainer width={width}>
      {SCHOOL_DATA.map((school) => (
        <SingleBox
          asHtmlElement={school.asHtmlElement}
          key={school.id}
          boxTitle={school.name}
          bgImg={school.img}
          fontColor={school.fontColor}
          path={{ pathname: PATHS.PRODUCTS, query: { school: school.id } }}
          squaredShape
        />
      ))}
    </Styled.SchoolsContainer>
  );
}

export default Schools;
