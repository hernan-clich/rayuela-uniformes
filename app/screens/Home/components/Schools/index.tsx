import useWindowSize from '@hooks/useWindowSize';
import SingleSchool from './components/SingleSchool';
import { SCHOOL_DATA } from './constants';
import SchoolsContainer from './styles';

function Schools() {
  const { width } = useWindowSize();
  return (
    <SchoolsContainer width={width}>
      {SCHOOL_DATA.map((school) => (
        <SingleSchool key={school.id} schoolName={school.name} bgImg={school.img} />
      ))}
    </SchoolsContainer>
  );
}

export default Schools;
