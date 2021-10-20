import { useRouter } from 'next/router';
import React, { useState, useRef } from 'react';
import ArrowIcon from '@components/ArrowIcon';
import CustomText from '@components/CustomText';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { TSingleFilterItem } from '@interfaces/generalInterfaces';
import { TFilterState } from '@interfaces/productInterfaces';
import * as Styled from './styles';

type Props = {
  filterState: TFilterState;
  filtersToList: TSingleFilterItem[];
  title: string;
};

function FilterItem({ filterState, filtersToList, title }: Props) {
  const router = useRouter();
  const { categories, school } = filterState;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFilterActive, setFilterActive] = useState(false);

  const handleDivClickOutside = () => setFilterActive(false);
  const handleDivClickInside = () => setFilterActive((prevState) => !prevState);

  useOnClickOutside(containerRef, handleDivClickOutside);

  const handleClick = (filterItem: TSingleFilterItem) => {
    if (categories || school)
      router.replace({ query: { ...filterState, [filterItem.alias]: encodeURI(filterItem.id) } });
    else router.replace({ query: { [filterItem.alias]: encodeURI(filterItem.id) } });
  };

  return (
    <Styled.FilterItemContainer
      ref={containerRef}
      onClick={handleDivClickInside}
      $isActive={isFilterActive}
    >
      <CustomText as="span" isUnselectable size="xsmall" textTransform="uppercase" weight="bold">
        {title}
      </CustomText>
      <ArrowIcon isActive={isFilterActive} />
      {isFilterActive && (
        <Styled.SingleListItem>
          <div>
            {filtersToList.map((filterItem) => (
              <button key={filterItem.id} onClick={() => handleClick(filterItem)}>
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
