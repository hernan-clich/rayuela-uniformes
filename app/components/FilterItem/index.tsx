import React, { useState, useRef, Dispatch } from 'react';
import ArrowIcon from '@components/ArrowIcon';
import CustomText from '@components/CustomText';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { TSingleFilterItem } from '@interfaces/generalInterfaces';
import { FilterAction } from '@interfaces/productInterfaces';
import * as Styled from './styles';

type Props = {
  dispatch: Dispatch<FilterAction>;
  filtersToList: TSingleFilterItem[];
  title: string;
};

function FilterItem({ dispatch, filtersToList, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
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
