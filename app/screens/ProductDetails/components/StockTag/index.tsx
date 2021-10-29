import CustomText from '~components/CustomText';
import * as Styled from './styles';

type Props = {
  hasStock: boolean;
};

function StockTag({ hasStock }: Props) {
  return (
    <Styled.StockTagContainer hasStock={hasStock}>
      <CustomText
        as="span"
        isUnselectable
        size="xsmall"
        textTransform="uppercase"
        weight="bold"
        secondary
      >
        {hasStock ? 'EN STOCK' : 'SIN STOCK'}
      </CustomText>
    </Styled.StockTagContainer>
  );
}

export default StockTag;
