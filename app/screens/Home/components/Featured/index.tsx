import useWindowSize from '@hooks/useWindowSize';
import SingleBox from '@screens/Home/components/SingleBox';
import { FEATURED_DATA } from './constants';
import FeaturedContainer from './styles';

function Featured() {
  const { width } = useWindowSize();
  return (
    <FeaturedContainer width={width}>
      {FEATURED_DATA.map((featured) => (
        <SingleBox
          key={featured.id}
          boxTitle={featured.name}
          bgImg={featured.img}
          squaredShape={false}
        />
      ))}
    </FeaturedContainer>
  );
}

export default Featured;
