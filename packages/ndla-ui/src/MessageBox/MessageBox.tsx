import { ReactNode } from 'react';
import styled from '@emotion/styled';
import Sticky from 'react-sticky-el';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { InformationOutline } from '@ndla/icons/common';
import { WithTranslation, withTranslation } from 'react-i18next';

type WrapperProps = {
  boxType?: 'info';
};

const colorsByType = (type: WrapperProps['boxType']) => {
  const colors = {
    color: '#551700',
    backgroundColor: '#FEEFB3',
  };
  switch (type) {
    case 'info':
    default:
      break;
  }
  return colors;
};

const Wrapper = styled.div<WrapperProps>`
  background: ${(props) => colorsByType(props.boxType).backgroundColor};
  color: ${(props) => colorsByType(props.boxType).color};
  font-size: 18px;
  line-height: 32px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  display: flex;
  padding: ${spacing.small};
  position: relative;
`;

const Label = styled.label`
  font-weight: ${fonts.weight.bold};
  display: inline-block;
  margin-right: ${spacing.small};
  ${mq.range({ until: breakpoints.tabletWide })} {
    font-size: 18px;
    font-weight: ${fonts.weight.semibold};
  }
`;

const InfoWrapper = styled.div`
  margin: 0 auto;
  padding: 0 100px;
  display: flex;
  ${mq.range({ until: breakpoints.tabletWide })} {
    padding: 0 90px 0 0;
  }
  ${mq.range({ until: breakpoints.mobileWide })} {
    padding: 0 50px 0 0;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${mq.range({ until: breakpoints.tabletWide })} {
    line-height: 24px;
    font-size: 16px;
  }
`;

const IconWrapper = styled.div`
  padding-right: ${spacing.small};
  display: flex;
  align-items: flex-start;
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding-top: 4px;
  }
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 13px;
  right: ${spacing.small};
  display: flex;
  justify-content: flex-end;
  ${mq.range({ from: breakpoints.tabletWide })} {
    top: 16px;
  }
`;

const CloseButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${fonts.weight.semibold};
  font-size: 16px;
  color: ${(props) => colorsByType(props.boxType).color};
  &:hover {
    color: ${(props) => colorsByType(props.boxType).color};
  }
  ${mq.range({ until: breakpoints.mobileWide })} {
    flex-direction: column-reverse;
  }
`;

const CloseButtonText = styled.span`
  margin-right: ${spacing.small};
  line-height: 1;
  ${mq.range({ until: breakpoints.mobileWide })} {
    margin-right: 0;
    ${fonts.sizes('14px', '18px')};
    font-weight: ${fonts.weight.normal};
  }
`;

type Props = {
  type?: WrapperProps['boxType'];
  heading?: string;
  sticky?: boolean;
  onClose?: () => void;
  children: ReactNode;
};

export const MessageBox = ({
  heading,
  type = 'info',
  sticky = true,
  onClose,
  children,
  t,
}: Props & WithTranslation) => (
  <Sticky disabled={!sticky} stickyStyle={{ zIndex: 9999 }}>
    <Wrapper boxType={type}>
      <InfoWrapper>
        <IconWrapper>
          <InformationOutline style={{ width: '24px', height: '24px' }} />
        </IconWrapper>
        <TextWrapper>
          {heading && <Label>{heading}</Label>}
          {children}
        </TextWrapper>
      </InfoWrapper>
      {onClose && (
        <CloseButtonWrapper>
          <CloseButton link onClick={onClose}>
            <CloseButtonText>{t('close')}</CloseButtonText>
            <Cross style={{ width: '24px', height: '24px' }} />
          </CloseButton>
        </CloseButtonWrapper>
      )}
    </Wrapper>
  </Sticky>
);

export default withTranslation()(MessageBox);
