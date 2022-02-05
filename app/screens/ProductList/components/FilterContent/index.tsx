import useWindowSize from '~hooks/useWindowSize';
import FilterBar from '../FilterBar';
import FilterMobile from '../FilterMobile';

function FilterContent() {
  const { isSmallScreen } = useWindowSize();
  return isSmallScreen ? <FilterMobile /> : <FilterBar />;
}

export default FilterContent;
