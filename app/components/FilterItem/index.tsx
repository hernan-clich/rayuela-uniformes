import React, { useState, useRef, useReducer } from 'react';
import ArrowIcon from '@components/ArrowIcon';
import CustomText from '@components/CustomText';
import useOnClickOutside from '@hooks/useOnClickOutside';
import {
  ESingleFilterAlias,
  TSingleFilterAlias,
  TSingleFilterItem
} from '@interfaces/generalInterfaces';
import * as Styled from './styles';

type Props = {
  filtersToList: TSingleFilterItem[];
  title: string;
};

type State = {
  [ESingleFilterAlias.categories]: string;
  [ESingleFilterAlias.school]: string;
};

type Action = {
  type: TSingleFilterAlias;
  payload: string;
};

const queriesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ESingleFilterAlias.categories:
      return { ...state, categories: action.payload };
    case ESingleFilterAlias.school:
      return { ...state, school: action.payload };
    default:
      return state;
  }
};

function FilterItem({ filtersToList, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialReducerState = { categories: '', school: '' };
  const [, dispatch] = useReducer(queriesReducer, initialReducerState);
  const [isFilterActive, setFilterActive] = useState(false);

  const handleDivClickOutside = () => setFilterActive(false);
  const handleDivClickInside = () => setFilterActive((prevState) => !prevState);

  useOnClickOutside(containerRef, handleDivClickOutside);

  return (
    <Styled.FilterItemContainer
      ref={containerRef}
      onClick={handleDivClickInside}
      $isActive={isFilterActive}>
      <CustomText as="span" isUnselectable size="xsmall" textTransform="uppercase" weight="bold">
        {title}
      </CustomText>
      <ArrowIcon isActive={isFilterActive} />
      {isFilterActive && (
        <Styled.SingleListItem>
          <div>
            {filtersToList.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => dispatch({ type: filterItem.alias, payload: filterItem.id })}>
                {filterItem.name}
              </button>
            ))}
          </div>
        </Styled.SingleListItem>
      )}
    </Styled.FilterItemContainer>
  );
}

export default FilterItem;
