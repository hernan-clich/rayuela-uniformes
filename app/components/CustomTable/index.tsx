import clsx from 'clsx';
import CustomText from '~components/CustomText';
import DeleteIcon from '~components/Icons/DeleteIcon';
import EditIcon from '~components/Icons/EditIcon';
import * as Styled from './styles';

type Props = {
  columnHeaders: { propertyName: string; displayName: string }[];
  rowActions?: {
    delete: boolean;
    edit: boolean;
  };
  stockBySizeData?: [string, boolean][][];
  tableContent: (string | number)[][];
  thumbnailUrl?: string[];
};

function CustomTable({
  columnHeaders,
  stockBySizeData,
  tableContent,
  thumbnailUrl,
  rowActions = { delete: true, edit: true }
}: Props) {
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
        {tableContent.map((body, i) => (
          <Styled.TableRowContainer key={body[0]} isLastRow={i === tableContent.length - 1}>
            {thumbnailUrl && (
              <div className="tableTd">
                <img src={thumbnailUrl[i]} alt="Thumbnail" className="thumbnail" />
              </div>
            )}
            {body.map((char) => (
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
                {rowActions.edit && <EditIcon />}
                {rowActions.delete && (
                  <button type="button">
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
