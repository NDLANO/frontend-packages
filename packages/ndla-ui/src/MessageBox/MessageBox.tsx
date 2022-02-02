import React from 'react';
import styled from '@emotion/styled';
import Sticky from 'react-sticky-el';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { InformationOutline, HumanMaleBoard } from '@ndla/icons/common';
import { WithTranslation, withTranslation } from 'react-i18next';

type WrapperProps = {
  boxType?: 'ghost' | 'fullpage' | 'medium';
};

const StyleByType = (type: WrapperProps['boxType']) => {
  const styles = {
    margin: '1px',
    color: '#444444',
    backgroundColor: '#f9f4c8',
    border: 'none',
    display: 'flex',
    width: 'auto',
    position: 'relative',
    transform: 'auto',
    left: 'auto',
  }; //Different CSS properties for different types of message-boxes
  switch (type) {
    case 'fullpage':
      styles.margin = '0 auto';
      styles.display = 'none';
      styles.width = '100vw';
      styles.position = 'absolute';
      styles.left = '50%';
      styles.transform = 'translateX(-50%)';
      break;
    case 'medium':
      styles.margin = '0px';
      break;
    case 'ghost':
      styles.backgroundColor = 'transparent';
      styles.border = '1px solid #D1D6DB';
      styles.color = '#444444';
      break;
  }
  return styles;
};

const Wrapper = styled.div<WrapperProps>`
  background: ${(props) => StyleByType(props.boxType).backgroundColor};
  color: ${(props) => StyleByType(props.boxType).color};
  font-size: 18px;
  line-height: 32px;
  display: flex;
  padding: ${spacing.small};
  position: ${(props) => StyleByType(props.boxType).position};
  border: ${(props) => StyleByType(props.boxType).border};
  border-radius: 5px;
  transform: ${(props) => StyleByType(props.boxType).transform};
  left: ${(props) => StyleByType(props.boxType).left};
  z-index: 1000;
  width: ${(props) => StyleByType(props.boxType).width};
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

const InfoWrapper = styled.div<WrapperProps>`
  margin: ${(props) => StyleByType(props.boxType).margin};
  padding: 10px;
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

const IconWrapper = styled.div<WrapperProps>`
  padding-right: ${spacing.small};
  display: ${(props) => StyleByType(props.boxType).display};
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
  color: ${(props) => StyleByType(props.boxType).color};
  &:hover {
    color: ${(props) => StyleByType(props.boxType).color};
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
const LinkWrapper = styled.div`
  display: block;
  width: 100%;
  background-color: #f9f4c8;
  padding-bottom: 20px;
  padding-left: 56px;
`;
const Link = styled.a`
  color: #20588f;
  font-size: 16px;
  padding-bottom: 5px;
  margin: 0px 50px 1px 5px;
`;

type Props = {
  type?: WrapperProps['boxType'];
  heading?: string;
  sticky?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  links?: []; //Takes and object with a name and a link. Eks: {'link1', 'www.link.no'}
};

export const MessageBox = ({ heading, type, sticky = false, onClose, children, links, t }: Props & WithTranslation) => (
  <Sticky disabled={!sticky} stickyStyle={{ zIndex: 9999 }}>
    <Wrapper boxType={type}>
      <InfoWrapper boxType={type}>
        <IconWrapper boxType={type}>
          {type === 'ghost' && <HumanMaleBoard style={{ width: '24px', height: '24px' }} />}
          {type !== 'ghost' && <InformationOutline style={{ width: '24px', height: '24px' }} />}
        </IconWrapper>
        <TextWrapper>
          {heading && <Label>{heading}</Label>}
          {children}
        </TextWrapper>
      </InfoWrapper>
      {onClose && (
        <CloseButtonWrapper>
          <CloseButton link onClick={onClose}>
            <CloseButtonText>{'close'}</CloseButtonText>
            <Cross style={{ width: '24px', height: '24px' }} aria-hidden={true} />
          </CloseButton>
        </CloseButtonWrapper>
      )}
    </Wrapper>

    {links && (
      //loops through the links passed in as properties if there are any and creates a working link for each of them
      <LinkWrapper>
        {links.map((x) => (
          <Link href={x['href']}>{x['name']}</Link>
        ))}
      </LinkWrapper>
    )}
  </Sticky>
);

export default withTranslation()(MessageBox);
