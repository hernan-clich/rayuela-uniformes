import Link from 'next/link';
import { useState } from 'react';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import FilterItem from '~components/FilterItem';
import FiltersIcon from '~components/Icons/FiltersIcon';
import { CATEGORIES } from '~constants/categories';
import PATHS from '~constants/paths';
import { SCHOOL_DATA } from '~constants/schools';
import { TSingleFilterItem } from '~types/general';
import * as Styled from './styles';

function FilterMobile() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const SCHOOLS: TSingleFilterItem[] = SCHOOL_DATA.map((schoolItem) => {
    return { id: schoolItem.id, name: schoolItem.name, alias: 'school' };
  });

  return (
    <>
      <Styled.FilterBarMobileContainer>
        <CustomText size="small" weight="bold">
          Filtros
        </CustomText>
        <button type="button" className="openFilterBtn" onClick={() => setIsFilterOpen(true)}>
          <FiltersIcon />
        </button>
      </Styled.FilterBarMobileContainer>
      {isFilterOpen && (
        <Styled.FilterMobileContainer>
          <div className="header">
            <CustomText size="regular" weight="bold">
              Filtrar por:
            </CustomText>
            <div>
              <Link href={PATHS.PRODUCTS} shallow>
                <a className="cleanFiltersCta">Borrar filtros</a>
              </Link>
              <CustomButton
                size="big"
                weight="black"
                secondary
                className="closeFilterBtn"
                onClick={() => setIsFilterOpen(false)}
              >
                ✕
              </CustomButton>
            </div>
          </div>
          <FilterItem filtersToList={SCHOOLS} title="Colegios" />
          <FilterItem filtersToList={CATEGORIES} title="Categorias" />
        </Styled.FilterMobileContainer>
      )}
    </>
  );
}

export default FilterMobile;
