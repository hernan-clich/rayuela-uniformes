import Link from 'next/link';
import CustomButton from '~components/CustomButton';
import CustomTable from '~components/CustomTable';
import CustomText from '~components/CustomText';
import Loading from '~components/Loading';
import PATHS from '~constants/paths';
import { ESchools } from '~constants/schools';
import useDbSnapshot from '~hooks/useDbSnapshot';
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
  },
  {
    displayName: 'Talles',
    propertyName: 'sizes'
  },
  {
    displayName: 'Acciones',
    propertyName: 'actions'
  }
];

function AdminProductsContent() {
  const { data, loading } = useDbSnapshot<TProduct>('products');
  const tableContent = data?.map((data) => ({
    id: data.id,
    imageUrl: data.imageUrl,
    stockBySize: data.stockBySize,
    textFields: [data.name, data.price, ESchools[data.school]]
  }));

  if (loading) return <Loading />;

  return (
    <Styled.AdminProductsContentContainer>
      <div className="headingContainer">
        <CustomText size="regular" weight="bold">
          Productos
        </CustomText>
        <Link href={PATHS.ADMIN_PRODUCT_FORM}>
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
        rowActions={{ delete: true, edit: true }}
      />
    </Styled.AdminProductsContentContainer>
  );
}

export default AdminProductsContent;
