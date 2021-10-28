import PATHS from '~constants/paths';
import useWindowSize from '~hooks/useWindowSize';
import SingleBox from '~screens/Home/components/SingleBox';
import { FEATURED_DATA } from './constants';
import * as Styled from './styles';

function Featured() {
  const { width } = useWindowSize();
  return (
    <Styled.FeaturedContainer width={width}>
      {FEATURED_DATA.map((featured) => (
        <SingleBox
          asHtmlElement={featured.asHtmlElement}
          key={featured.id}
          boxTitle={featured.name}
          bgImg={featured.img}
          fontColor={featured.fontColor}
          squaredShape={false}
          path={{ pathname: PATHS.PRODUCTS, query: { categories: featured.id } }}
        />
      ))}
    </Styled.FeaturedContainer>
  );
}

export default Featured;
