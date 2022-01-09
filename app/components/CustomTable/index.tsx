import clsx from 'clsx';
import Link from 'next/link';
import CustomText from '~components/CustomText';
import DeleteIcon from '~components/Icons/DeleteIcon';
import EditIcon from '~components/Icons/EditIcon';
import PATHS from '~constants/paths';
import useDbCrud from '~hooks/useDbCrud';
import { EDbCollections } from '~types/db';
import { TProduct } from '~types/product';
import * as Styled from './styles';

type Props = {
  columnHeaders: { propertyName: string; displayName: string }[];
  tableContent: ({ textFields: (string | number)[] } & Pick<
    TProduct,
    'imageUrl' | 'id' | 'stockBySize'
  >)[];
  rowActions?: {
    delete: boolean;
    edit: boolean;
  };
};

function CustomTable({
  columnHeaders,
  tableContent,
  rowActions = { delete: true, edit: true }
}: Props) {
  const { deleteDbDocument } = useDbCrud(EDbCollections.products);

  const stockBySizeData = tableContent[0]?.stockBySize
    ? tableContent?.map((data) => Object.entries(data.stockBySize))
    : null;

  return (
    <Styled.CustomTableContainer fieldsLength={columnHeaders.length}>
      <header className="tableHeader">
        {columnHeaders.map(({ propertyName, displayName }) => (
          <div key={propertyName} className="tableTd">
            <CustomText as="span" size="xsmall" weight="bold">
              {displayName}
            </CustomText>
          </div>
        ))}
      </header>
      <main className="tableBody">
        {tableContent?.map((body, i) => (
          <Styled.TableRowContainer key={body.id} isLastRow={i === tableContent.length - 1}>
            {body?.imageUrl && (
              <div className="tableTd">
                <img src={body?.imageUrl} alt="Thumbnail" className="thumbnail" />
              </div>
            )}
            {body?.textFields?.map((char) => (
              <div key={char} className="tableTd">
                <CustomText as="span" size="xsmall" weight="bold">
                  {char}
                </CustomText>
              </div>
            ))}
            {stockBySizeData && (
              <div className="tableTd">
                <div className="sizesContainer">
                  {stockBySizeData[i].map(([size, hasStock]) => (
                    <div
                      key={size}
                      className={clsx('size', {
                        red: !hasStock,
                        green: hasStock
                      })}
                    >
                      <CustomText as="span" size="xsmall" weight="bold">
                        {size}
                      </CustomText>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {rowActions && (
              <div className="tableTd">
                {rowActions.edit && (
                  <Link href={{ pathname: PATHS.ADMIN_PRODUCT_FORM_EDIT, query: { id: body.id } }}>
                    <a className="ctaBtn" title="Editar">
                      <EditIcon />
                    </a>
                  </Link>
                )}
                {rowActions.delete && (
                  <button
                    type="button"
                    className="ctaBtn"
                    title="Eliminar"
                    onClick={() => deleteDbDocument(body.id)}
                  >
                    <DeleteIcon />
                  </button>
                )}
              </div>
            )}
          </Styled.TableRowContainer>
        ))}
      </main>
    </Styled.CustomTableContainer>
  );
}

export default CustomTable;
