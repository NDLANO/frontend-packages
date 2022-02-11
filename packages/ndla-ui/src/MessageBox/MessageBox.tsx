/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import Sticky from 'react-sticky-el';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { InformationOutline, HumanMaleBoard } from '@ndla/icons/common';
import { WithTranslation, withTranslation } from 'react-i18next';

export enum MessageBoxType {
  ghost = 'ghost',
  fullpage = 'fullpage',
  medium = 'medium',
}
type WrapperProps = {
  boxType?: MessageBoxType;
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
      styles.position = 'relative';
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
  font-family: ${fonts.sans};
  display: flex;
  padding: ${spacing.small};
  position: ${(props) => StyleByType(props.boxType).position};
  border: ${(props) => StyleByType(props.boxType).border};
  border-radius: 5px;
  transform: ${(props) => StyleByType(props.boxType).transform};
  left: ${(props) => StyleByType(props.boxType).left};
  z-index: 10;
  width: ${(props) => StyleByType(props.boxType).width};
`;

const InfoWrapper = styled.div<WrapperProps>`
  margin: ${(props) => StyleByType(props.boxType).margin};
  padding: 10px;
  display: flex;
  ${mq.range({ until: breakpoints.tabletWide })} {
    padding: 0 90px 0 0;
  }
  ${mq.range({ until: breakpoints.mobileWide })} {
    padding: 0 5px 0 0;
    font-size: 16px;
  }
`;
const TextWrapper = styled.div<WrapperProps>`
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
  top: 1px;
  right: -1px;
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
  background-color: transparent;
  border: none;
  font-weight: ${fonts.weight.semibold};
  font-size: 16px;
  color: ${(props) => StyleByType(props.boxType).color};
  &:hover {
    color: ${(props) => StyleByType(props.boxType).color};
    background-color: transparent;
    border: none;
    font-size: 16;
  }
  ${mq.range({ until: breakpoints.mobileWide })} {
    flex-direction: column-reverse;
  }
`;

const LinkWrapper = styled.div`
  display: block;
  width: 100%;
  background-color: #f9f4c8;
  padding-bottom: 20px;
  margin-top: -2px;
  padding-left: 58px;
  border-radius: 0px 0px 5px 5px;
  ${mq.range({ until: breakpoints.mobileWide })} {
    padding-left: 45px;
  }
`;
const Link = styled.a`
  color: #20588f;
  font-size: 16px;
  padding-bottom: 1px;
  margin: 0px 40px 1px 2px;
  font-family: ${fonts.sans};
  ${mq.range({ until: breakpoints.mobileWide })} {
    margin: 0px 15px 1px 5px;
    box-shadow: none;
  }
`;

type LinkProps = {
  href?: string;
  text?: string;
};
type Props = {
  type?: WrapperProps['boxType'];
  sticky?: boolean;
  onClose?: boolean;
  children?: string;
  links?: LinkProps[];
};

export const MessageBox = ({ type, sticky = false, onClose, children, links, t }: Props & WithTranslation) => {
  const [hideMessageBox, setHideMessageBox] = useState(false);
  const onCloseMessageBox = () => {
    setHideMessageBox(true);
  };
    const Icon = type === 'ghost' ? <HumanMaleBoard> : <InformationOutline>;
  return (
    //StickyStyle top:84 makes sure that the messagebox sits beneath the masthead (header ) and the topOffsett sets it so that it applies when reaching the top of the messagebox
    <Sticky disabled={!sticky} stickyStyle={{ zIndex: 9998, top: 84 }} topOffset={-84}>
      <Wrapper boxType={type} style={{ display: hideMessageBox ? 'none' : 'flex' }}>
        <InfoWrapper boxType={type}>
          <IconWrapper boxType={type}>
            {type === 'ghost' && <HumanMaleBoard style={{ width: '24px', height: '24px' }} />}
            {type !== 'ghost' && <InformationOutline style={{ width: '24px', height: '24px' }} />}
          </IconWrapper>
          <TextWrapper>{children}</TextWrapper>
        </InfoWrapper>
        {onClose && (
          <CloseButtonWrapper>
            <CloseButton onClick={onCloseMessageBox}>
              <Cross style={{ width: '24px', height: '24px' }} aria-hidden={true} />
            </CloseButton>
          </CloseButtonWrapper>
        )}
      </Wrapper>

      {links && (
        //loops through the links passed in as properties if there are any and creates a working link for each of them
        <LinkWrapper style={{ display: hideMessageBox ? 'none' : 'flex' }}>
          {links.map((x) => (
            <Link href={x.href}>{x.text}</Link>
          ))}
        </LinkWrapper>
      )}
    </Sticky>
  );
};

export default withTranslation()(MessageBox);
