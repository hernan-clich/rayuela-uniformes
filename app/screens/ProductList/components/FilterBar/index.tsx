import FilterItem from './components/FilterItem';
import FilterBarContainer from './styles';

function FilterBar() {
  return (
    <FilterBarContainer>
      <div className="filter-items">
        <FilterItem name="Colegios" />
      </div>
    </FilterBarContainer>
  );
}

export default FilterBar;
