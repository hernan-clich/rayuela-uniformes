import CustomText from '~components/CustomText';
import * as Styled from './styles';

type Props = {
  columnHeaders: { propertyName: string; displayName: string }[];
  tableContent: (string | number)[][];
  thumbnailUrl?: string[];
};

function CustomTable({ columnHeaders, tableContent, thumbnailUrl }: Props) {
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
          </Styled.TableRowContainer>
        ))}
      </main>
    </Styled.CustomTableContainer>
  );
}

export default CustomTable;
