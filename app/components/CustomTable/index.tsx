import CustomText from '~components/CustomText';
import * as Styled from './styles';

type Props = {
  columnHeaders: { propertyName: string; displayName: string }[];
  tableContent: (string | number)[][];
  thumbnailUrl?: string[];
};

function CustomTable({ columnHeaders, tableContent, thumbnailUrl }: Props) {
  return (
    <Styled.CustomTableContainer>
      <header className="tableHeader">
        {columnHeaders.map(({ propertyName, displayName }) => (
          <CustomText as="span" key={propertyName} size="xsmall" weight="bold">
            {displayName}
          </CustomText>
        ))}
      </header>
      <main className="tableBody">
        {tableContent.map((body, i) => (
          <Styled.TableRowContainer key={body[0]} isLastRow={i === tableContent.length - 1}>
            {thumbnailUrl && <img src={thumbnailUrl[i]} alt="Thumbnail" className="thumbnail" />}
            {body.map((char) => (
              <CustomText as="span" key={char} size="xsmall" weight="bold">
                {char}
              </CustomText>
            ))}
          </Styled.TableRowContainer>
        ))}
      </main>
    </Styled.CustomTableContainer>
  );
}

export default CustomTable;
