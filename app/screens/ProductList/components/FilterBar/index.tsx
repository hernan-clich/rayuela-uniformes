import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FilterItem from '~components/FilterItem';
import { CATEGORIES } from '~constants/categories';
import { SCHOOL_DATA } from '~constants/schools';
import { TSingleFilterItem } from '~types/general';
import { TFilterState } from '~types/product';
import * as Styled from './styles';

function FilterBar() {
  const router = useRouter();
  const { categories, school } = router.query;
  const [filterState, setFilterState] = useState<Partial<TFilterState>>({});
  const SCHOOLS: TSingleFilterItem[] = SCHOOL_DATA.map((schoolItem) => {
    return { id: schoolItem.id, name: schoolItem.name, alias: 'school' };
  });

  // Listening for query param changes
  useEffect(() => {
    if (categories && !school) setFilterState({ categories: categories as string });
    else if (!categories && school) setFilterState({ school: school as string });
    else if (categories && school)
      setFilterState({ categories: categories as string, school: school as string });
  }, [categories, school]);

  return (
    <Styled.FilterBarContainer>
      <Styled.FilterCategories>
        <FilterItem filterState={filterState} filtersToList={SCHOOLS} title="Colegios" />
        <FilterItem filterState={filterState} filtersToList={CATEGORIES} title="Categorias" />
      </Styled.FilterCategories>
    </Styled.FilterBarContainer>
  );
}

export default FilterBar;
