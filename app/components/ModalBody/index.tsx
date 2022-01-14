import Link from 'next/link';
import React from 'react';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import PATHS from '~constants/paths';
import * as Styled from './styles';

type Props = {
  children?: React.ReactNode;
  textHeading: string;
  textBody?: string;
  buttonCta?: {
    handler: () => void;
    text: string;
  };
  closeCta?: {
    handler: () => void;
    text: string;
  };
  linkCta?: {
    href: typeof PATHS[keyof typeof PATHS];
    text: string;
  };
};

const ModalBody = ({ children, closeCta, textHeading, textBody, buttonCta, linkCta }: Props) => {
  return (
    <Styled.ModalBodyContainer>
      <CustomText as="span" size="big" weight="bold" className="modalHeading">
        {textHeading}
      </CustomText>
      {textBody && (
        <CustomText as="span" size="regular" weight="bold" className="modalSubheading">
          {textBody}
        </CustomText>
      )}
      <div className="ctaContainer">
        {closeCta && (
          <CustomButton size="small" weight="regular" onClick={closeCta.handler}>
            {closeCta.text}
          </CustomButton>
        )}
        {linkCta && (
          <Link href={linkCta.href}>
            <a>
              <CustomButton size="small" weight="regular">
                {linkCta.text}
              </CustomButton>
            </a>
          </Link>
        )}
        {buttonCta && (
          <CustomButton size="small" weight="regular" onClick={buttonCta.handler}>
            {buttonCta.text}
          </CustomButton>
        )}
        {children}
      </div>
    </Styled.ModalBodyContainer>
  );
};

export default ModalBody;
