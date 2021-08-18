import { useReducer } from 'react';
import FilterItem from '@components/FilterItem';
import { CATEGORIES } from '@constants/categories';
import { SCHOOL_DATA } from '@constants/schools';
import { ESingleFilterAlias, TSingleFilterItem } from '@interfaces/generalInterfaces';
import { FilterAction, FilterState } from '@interfaces/productInterfaces';
import * as Styled from './styles';

const queriesReducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case ESingleFilterAlias.categories:
      return { ...state, categories: action.payload };
    case ESingleFilterAlias.school:
      return { ...state, school: action.payload };
    default:
      return state;
  }
};

function FilterBar() {
  const initialReducerState = { categories: '', school: '' };
  const [, dispatch] = useReducer(queriesReducer, initialReducerState);

  const schoolItems: TSingleFilterItem[] = SCHOOL_DATA.map((schoolItem) => {
    return { id: schoolItem.id, name: schoolItem.name, alias: 'school' };
  });

  return (
    <Styled.FilterBarContainer>
      <Styled.FilterCategories>
        <FilterItem dispatch={dispatch} filtersToList={schoolItems} title="Colegios" />
        <FilterItem dispatch={dispatch} filtersToList={CATEGORIES} title="Categorias" />
      </Styled.FilterCategories>
    </Styled.FilterBarContainer>
  );
}

export default FilterBar;
