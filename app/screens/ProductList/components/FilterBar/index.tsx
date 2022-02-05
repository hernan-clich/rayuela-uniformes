import Link from 'next/link';
import FilterItem from '~components/FilterItem';
import { CATEGORIES } from '~constants/categories';
import { SCHOOL_DATA } from '~constants/schools';
import PATHS from '~constants/paths';
import { TSingleFilterItem } from '~types/general';
import * as Styled from './styles';
import CustomText from '~components/CustomText';

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
      <Link href={PATHS.PRODUCTS} shallow>
        <CustomText
          as="a"
          size="xsmall"
          weight="bold"
          textTransform="uppercase"
          className="clearFiltersCta"
        >
          Borrar filtros
        </CustomText>
      </Link>
    </Styled.FilterBarContainer>
  );
}

export default FilterBar;
