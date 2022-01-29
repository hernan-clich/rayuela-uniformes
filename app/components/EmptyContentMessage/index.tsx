import Link from 'next/link';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import PATHS from '~constants/paths';
import * as Styled from './styles';

type Props = {
  icon: React.ReactNode;
  messages: {
    title: string;
    cta: string;
  };
  redirectHref: typeof PATHS[keyof typeof PATHS];
};

function EmptyContentMessage({ icon, messages, redirectHref }: Props) {
  return (
    <Styled.CartEmptyContainer>
      {icon}
      <div className="cta">
        <CustomText as="h2" size="regular" weight="bold">
          {messages.title}
        </CustomText>
        <Link href={redirectHref}>
          <CustomButton as="a" size="small" weight="regular" noMaxWidth>
            {messages.cta}
          </CustomButton>
        </Link>
      </div>
    </Styled.CartEmptyContainer>
  );
}

export default EmptyContentMessage;
