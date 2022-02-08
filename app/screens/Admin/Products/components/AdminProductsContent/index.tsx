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

const COLUMN_HEADERS = {
  desktop: ['', 'Nombre', 'Precio', 'Escuela', 'Talles', 'Acciones'],
  mobile: ['Nombre', 'Precio', 'Escuela']
};

function AdminProductsContent() {
  const { data, loading } = useDbSnapshot<TProduct>({ collectionName: 'products' });
  const tableContent = data?.map((data) => ({
    id: data.id,
    imageUrl: data.imageUrl,
    sizes: data.sizes,
    textFields: [
      data.name,
      `$ ${data.sizes?.[0]?.price.toLocaleString('es-AR') || data.sizes?.[0]?.price}`,
      ESchools[data.school]
    ]
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
