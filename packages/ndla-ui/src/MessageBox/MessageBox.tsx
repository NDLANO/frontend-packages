/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { HTMLAttributes, useState } from 'react';
import styled from '@emotion/styled';
import Sticky from 'react-sticky-el';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
import { InformationOutline, HumanMaleBoard } from '@ndla/icons/common';
import { WithTranslation, withTranslation } from 'react-i18next';
import { CloseButton } from '../CloseButton';

export enum MessageBoxType {
  ghost = 'ghost',
  fullpage = 'fullpage',
  medium = 'medium',
  masthead = 'masthead',
}
type WrapperProps = {
  boxType?: MessageBoxType;
};

const StyleByType = (type: WrapperProps['boxType']) => {
  const styles: HTMLAttributes<HTMLElement>['style'] = {
    margin: '1px',
    color: '#444444',
    backgroundColor: '#f9f4c8',
    border: 'none',
    display: 'flex',
    padding: '10px',
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
    case 'masthead':
      styles.margin = '0 auto';
      styles.display = 'none';
      styles.padding = '0';
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
  padding: ${(props) => StyleByType(props.boxType).padding};
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
const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 1px;
`;

type LinkProps = {
  href?: string;
  text?: string;
};
type Props = {
  type?: WrapperProps['boxType'];
  sticky?: boolean;
  children?: string;
  links?: LinkProps[];
  showCloseButton?: boolean;
};

export const MessageBox = ({ type, sticky = false, children, links, t, showCloseButton }: Props & WithTranslation) => {
  const [hideMessageBox, setHideMessageBox] = useState(false);
  const onCloseMessageBox = () => {
    setHideMessageBox(true);
  };
  const Icon = type === 'ghost' ? HumanMaleBoard : InformationOutline;
  return (
    //StickyStyle top:84 makes sure that the messagebox sits beneath the masthead (header ) and the topOffsett sets it so that it applies when reaching the top of the messagebox
    <Sticky disabled={!sticky} stickyStyle={{ zIndex: 9998, top: 84 }} topOffset={-84}>
      <Wrapper boxType={type} style={{ display: hideMessageBox ? 'none' : 'flex' }}>
        <InfoWrapper boxType={type}>
          <IconWrapper boxType={type}>
            <Icon style={{ width: '24px', height: '24px' }} />
          </IconWrapper>
          <TextWrapper>{children}</TextWrapper>
        </InfoWrapper>
        {showCloseButton && (
          <CloseButtonWrapper>
            <CloseButton onClick={onCloseMessageBox} />
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
