import React, { useState, useRef } from 'react';
import ArrowIcon from '@components/ArrowIcon';
import CustomText from '@components/CustomText';
import { SCHOOL_DATA } from '@constants/schools';
import useOnClickOutside from '@hooks/useOnClickOutside';
import * as Styled from './styles';

type Props = {
  name: string;
};

type TFilteredFields = {
  school: string;
  category: string;
};

function FilterItem({ name }: Props) {
  const [isFilterActive, setFilterActive] = useState(false);
  const [, setFilteredFields] = useState<TFilteredFields>({
    school: '',
    category: ''
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDivClickOutside = () => setFilterActive(false);
  const handleDivClickInside = () => setFilterActive((prevState) => !prevState);
  const handleButtonClick = (id: string) => {
    setFilteredFields((prevState) => {
      return { ...prevState, school: id };
    });
  };

  useOnClickOutside(containerRef, handleDivClickOutside);

  return (
    <Styled.FilterItemContainer
      ref={containerRef}
      onClick={handleDivClickInside}
      $isActive={isFilterActive}>
      <CustomText as="span" isUnselectable size="xsmall" textTransform="uppercase" weight="bold">
        {name}
      </CustomText>
      <ArrowIcon isActive={isFilterActive} />
      {isFilterActive && (
        <Styled.SingleListItem>
          <div>
            {SCHOOL_DATA.map((school) => (
              <button key={school.id} onClick={() => handleButtonClick(school.id)}>
                {school.name}
              </button>
            ))}
          </div>
        </Styled.SingleListItem>
      )}
    </Styled.FilterItemContainer>
  );
}

export default FilterItem;
