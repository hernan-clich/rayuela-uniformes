import { useRouter } from 'next/router';
import React, { useState, useRef } from 'react';
import ArrowIcon from '~components/Icons/ArrowIcon';
import CustomText from '~components/CustomText';
import useOnClickOutside from '~hooks/useOnClickOutside';
import { TSingleFilterItem } from '~types/general';
import * as Styled from './styles';

type Props = {
  filtersToList: TSingleFilterItem[];
  title: string;
};

function FilterItem({ filtersToList, title }: Props) {
  const router = useRouter();
  const { categories, school } = router.query;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFilterActive, setFilterActive] = useState(false);

  const handleDivClickOutside = () => setFilterActive(false);
  const handleDivClickInside = () => setFilterActive((prevState) => !prevState);

  useOnClickOutside(containerRef, handleDivClickOutside);

  const handleClick = (filterItem: TSingleFilterItem) => {
    if (categories || school)
      router.push(
        { query: { ...router.query, [filterItem.alias]: encodeURI(filterItem.id) } },
        undefined,
        { shallow: true }
      );
    else
      router.push({ query: { [filterItem.alias]: encodeURI(filterItem.id) } }, undefined, {
        shallow: true
      });
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
