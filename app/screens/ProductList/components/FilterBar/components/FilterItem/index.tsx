import { useState } from 'react';
import ArrowIcon from '@components/ArrowIcon';
import CustomText from '@components/CustomText';
import FilterItemContainer from './styles';

interface Props {
  name: string;
}

function FilterItem({ name }: Props) {
  const [isFilterActive, setFilterActive] = useState(false);

  const handleClick = () => setFilterActive((prevState) => !prevState);

  return (
    <FilterItemContainer onClick={handleClick}>
      <CustomText as="span" size="xsmall" textTransform="uppercase" weight="bold">
        {name}
      </CustomText>
      <ArrowIcon isActive={isFilterActive} />
    </FilterItemContainer>
  );
}

export default FilterItem;
