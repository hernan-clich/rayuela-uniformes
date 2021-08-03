import { useState, useRef } from 'react';
import ArrowIcon from '@components/ArrowIcon';
import CustomText from '@components/CustomText';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { TSingleFilterItem } from '@interfaces/generalInterfaces';
import * as Styled from './styles';

type Props = {
  filtersToList: TSingleFilterItem[];
  title: string;
};

export type TFilterQueries = {
  school: string;
  categories: string;
};

function FilterItem({ filtersToList, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  // const initialFilters = { school: '', categories: '' };
  // const [currentFilters, setCurrentFilters] = useState<TFilterQueries>(initialFilters);
  const [isFilterActive, setFilterActive] = useState(false);

  const handleDivClickOutside = () => setFilterActive(false);
  const handleDivClickInside = () => setFilterActive((prevState) => !prevState);
  const handleButtonClick = (_alias: string, _id: string) => null;

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
                onClick={() => handleButtonClick(filterItem.alias, filterItem.id)}>
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
