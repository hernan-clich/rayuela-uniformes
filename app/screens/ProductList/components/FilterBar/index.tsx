import FilterItem from '@components/FilterItem';
import { CATEGORIES } from '@constants/categories';
import { SCHOOL_DATA } from '@constants/schools';
import { TSingleFilterItem } from '@interfaces/generalInterfaces';
import * as Styled from './styles';

function FilterBar() {
  const schoolItems: TSingleFilterItem[] = SCHOOL_DATA.map((schoolItem) => {
    return { id: schoolItem.id, name: schoolItem.name, alias: 'school' };
  });

  return (
    <Styled.FilterBarContainer>
      <Styled.FilterCategories>
        <FilterItem filtersToList={schoolItems} title="Colegios" />
        <FilterItem filtersToList={CATEGORIES} title="Categorias" />
      </Styled.FilterCategories>
    </Styled.FilterBarContainer>
  );
}

export default FilterBar;
