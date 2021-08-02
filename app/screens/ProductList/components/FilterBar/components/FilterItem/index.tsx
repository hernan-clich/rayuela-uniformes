import { useState } from 'react';
import ArrowIcon from '@components/ArrowIcon';
import CustomText from '@components/CustomText';
import * as Styled from './styles';

type Props = {
  name: string;
};

function FilterItem({ name }: Props) {
  const [isFilterActive, setFilterActive] = useState(false);

  const handleClick = () => setFilterActive((prevState) => !prevState);

  return (
    <Styled.FilterItemContainer onClick={handleClick}>
      <CustomText as="span" isUnselectable size="xsmall" textTransform="uppercase" weight="bold">
        {name}
      </CustomText>
      <ArrowIcon isActive={isFilterActive} />
    </Styled.FilterItemContainer>
  );
}

export default FilterItem;
