import useWindowSize from '@hooks/useWindowSize';
import SchoolsContainer from './styles';

function Schools() {
  const { width } = useWindowSize();
  return (
    <SchoolsContainer width={width}>
      <div className="single-school" />
      <div className="single-school" />
      <div className="single-school" />
      <div className="single-school" />
    </SchoolsContainer>
  );
}

export default Schools;
