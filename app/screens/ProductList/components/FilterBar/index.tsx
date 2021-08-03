import FilterItem from '@components/FilterItem';
import * as Styled from './styles';

function FilterBar() {
  return (
    <Styled.FilterBarContainer>
      <Styled.FilterCategories>
        <FilterItem name="Colegios" />
      </Styled.FilterCategories>
    </Styled.FilterBarContainer>
  );
}

export default FilterBar;
