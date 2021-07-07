import useWindowSize from '@hooks/useWindowSize';
import SingleBox from '@screens/Home/components/SingleBox';
import { SCHOOL_DATA } from './constants';
import SchoolsContainer from './styles';

function Schools() {
  const { width } = useWindowSize();
  return (
    <SchoolsContainer width={width}>
      {SCHOOL_DATA.map((school) => (
        <SingleBox key={school.id} boxTitle={school.name} bgImg={school.img} />
      ))}
    </SchoolsContainer>
  );
}

export default Schools;
