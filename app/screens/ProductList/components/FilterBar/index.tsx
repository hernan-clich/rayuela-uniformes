import FilterItem from '~components/FilterItem';
import { CATEGORIES } from '~constants/categories';
import { SCHOOL_DATA } from '~constants/schools';
import { TSingleFilterItem } from '~types/general';
import * as Styled from './styles';

function FilterBar() {
  const SCHOOLS: TSingleFilterItem[] = SCHOOL_DATA.map((schoolItem) => {
    return { id: schoolItem.id, name: schoolItem.name, alias: 'school' };
  });

  return (
    <Styled.FilterBarContainer>
      <Styled.FilterCategories>
        <FilterItem filtersToList={SCHOOLS} title="Colegios" />
        <FilterItem filtersToList={CATEGORIES} title="Categorias" />
      </Styled.FilterCategories>
    </Styled.FilterBarContainer>
  );
}

export default FilterBar;
