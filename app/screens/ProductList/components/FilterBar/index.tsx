import FilterItem from './components/FilterItem';
import * as Styled from './styles';

function FilterBar() {
  return (
    <Styled.FilterBarContainer>
      <div className="filter-items">
        <FilterItem name="Colegios" />
      </div>
    </Styled.FilterBarContainer>
  );
}

export default FilterBar;
