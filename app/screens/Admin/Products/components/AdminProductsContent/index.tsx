import Link from 'next/link';
import CustomButton from '~components/CustomButton';
import CustomTable from '~components/CustomTable';
import CustomText from '~components/CustomText';
import PATHS from '~constants/paths';
import { ESchools } from '~constants/schools';
import useDbQuery from '~hooks/useDbQuery';
import { TProduct } from '~types/product';
import * as Styled from './styles';

const COLUMN_HEADERS = [
  {
    displayName: '',
    propertyName: 'thumbnail'
  },
  {
    displayName: 'Nombre',
    propertyName: 'name'
  },
  {
    displayName: 'Precio',
    propertyName: 'price'
  },
  {
    displayName: 'Escuela',
    propertyName: 'school'
  }
];

function AdminProductsContent() {
  const [data] = useDbQuery<TProduct>('products');
  const tableContent = data?.map((data) => [
    data.name,
    `$ ${data.price.toLocaleString('de-DE')}`,
    ESchools[data.school]
  ]);
  const thumbnailArr = data?.map((data) => data.imageUrl);

  return (
    <Styled.AdminProductsContentContainer>
      <div className="headingContainer">
        <CustomText size="regular" weight="bold">
          Productos
        </CustomText>
        <Link href={PATHS.ADMIN_ADD_NEW_PRODUCT}>
          <a>
            <CustomButton size="small" weight="bold" noMaxWidth>
              Nuevo producto
            </CustomButton>
          </a>
        </Link>
      </div>
      <CustomTable
        columnHeaders={COLUMN_HEADERS}
        tableContent={tableContent}
        thumbnailUrl={thumbnailArr}
      />
    </Styled.AdminProductsContentContainer>
  );
}

export default AdminProductsContent;
