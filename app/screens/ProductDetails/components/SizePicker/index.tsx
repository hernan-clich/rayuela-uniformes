import { Dispatch, SetStateAction } from 'react';
import CustomText from '~components/CustomText';
import { TProductSizes } from '~types/product';
import * as Styled from './styles';

type Props = {
  currentSize: TProductSizes;
  setCurrentSize: Dispatch<SetStateAction<TProductSizes>>;
  sizesArray: TProductSizes[];
};

function SizePicker({ currentSize, setCurrentSize, sizesArray }: Props) {
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCurrentSize(e.target.value as TProductSizes);

  return (
    <Styled.SizePickerContainer>
      <CustomText as="label" htmlFor="size" size="small" weight="regular" textAlign="left">
        TALLE
      </CustomText>
      <select
        name="size"
        id="size"
        className="sizeSelect"
        value={currentSize}
        onChange={handleSizeChange}
        onBlur={handleSizeChange}
      >
        <optgroup label="TALLE">
          {sizesArray.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </optgroup>
      </select>
    </Styled.SizePickerContainer>
  );
}

export default SizePicker;
