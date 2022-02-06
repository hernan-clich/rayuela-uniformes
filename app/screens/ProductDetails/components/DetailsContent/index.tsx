import { useRouter } from 'next/router';
import CustomButton from '~components/CustomButton';
import { isServer } from '~constants/general';
import { TProduct } from '~types/product';
import DetailsCard from '../DetailsCard';
import * as Styled from './styles';

type Props = {
  product: TProduct;
};

function DetailsContent({ product }: Props) {
  const router = useRouter();

  if (isServer) return null;

  return (
    <Styled.DetailsContentContainer>
      {window && window?.history?.length > 2 && (
        <CustomButton
          className="backBtn"
          size="small"
          weight="regular"
          onClick={() => router.back()}
        >
          <span className="icon" role="img" aria-label="finger pointing left">
            ←
          </span>
          Volver
        </CustomButton>
      )}
      <DetailsCard product={product} />
    </Styled.DetailsContentContainer>
  );
}

export default DetailsContent;
