import React, { useState } from 'react';
import styled from '@emotion/styled';
import Sticky from 'react-sticky-el';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { InformationOutline, HumanMaleBoard } from '@ndla/icons/common';
import { WithTranslation, withTranslation } from 'react-i18next';

type WrapperProps = {
  boxType?: 'ghost' | 'fullpage' | 'medium' | 'hide';
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
    case 'hide':
      styles.display = 'none';
      break;
  }
  return styles;
};

const Wrapper = styled.div<WrapperProps>`
  background: ${(props) => StyleByType(props.boxType).backgroundColor};
  color: ${(props) => StyleByType(props.boxType).color};
  font-size: 18px;
  line-height: 32px;
  font-family: 'Source Sans Pro', Helvetica, Arial, STKaiti, 华文楷体, KaiTi, SimKai, 楷体, KaiU, DFKai-SB, 標楷體,
    SongTi, 宋体, sans-serif;
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
    padding: 0 5px 0 0;
    font-size: 16px;
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

const LinkWrapper = styled.div`
  display: block;
  width: 100%;
  background-color: #f9f4c8;
  padding-bottom: 20px;
  margin-top: -2px;
  padding-left: 56px;
  border-radius: 0px 0px 5px 5px;
  ${mq.range({ until: breakpoints.mobileWide })} {
    padding-left: 45px;
  }
`;
const Link = styled.a`
  color: #20588f;
  font-size: 16px;
  padding-bottom: 5px;
  margin: 0px 50px 1px 5px;
  font-family: 'Source Sans Pro', Helvetica, Arial, STKaiti, 华文楷体, KaiTi, SimKai, 楷体, KaiU, DFKai-SB, 標楷體,
    SongTi, 宋体, sans-serif;
  ${mq.range({ until: breakpoints.mobileWide })} {
    margin: 0px 15px 1px 5px;
    box-shadow: none;
  }
`;
type Props = {
  type?: WrapperProps['boxType'];
  heading?: string;
  sticky?: boolean;
  onClose?: boolean;
  children?: React.ReactNode;
  links?: []; //Takes and object with a name and a link. Eks: {'link1', 'www.link.no'}
};

export const MessageBox = ({ heading, type, sticky = false, onClose, children, links, t }: Props & WithTranslation) => {
  const [hideMessageBox, setHideMessageBox] = useState(false);
  const onCloseMessageBox = () => {
    setHideMessageBox(true);
  };

  return (
    //StickyStyle top:84 makes sure that the messagebox sits beneath the masthead (header ) and the topOffsett sets it so that it applies when reaching the top of the messagebox
    <Sticky disabled={!sticky} stickyStyle={{ zIndex: 9998, top: 84 }} topOffset={-84}>
      <Wrapper boxType={type} style={{ display: hideMessageBox ? 'none' : 'flex' }}>
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
            <CloseButton link onClick={onCloseMessageBox}>
              <Cross style={{ width: '24px', height: '24px' }} aria-hidden={true} />
            </CloseButton>
          </CloseButtonWrapper>
        )}
      </Wrapper>

      {links && (
        //loops through the links passed in as properties if there are any and creates a working link for each of them
        <LinkWrapper style={{ display: hideMessageBox ? 'none' : 'flex' }}>
          {links.map((x) => (
            <Link href={x['href']}>{x['name']}</Link>
          ))}
        </LinkWrapper>
      )}
    </Sticky>
  );
};

export default withTranslation()(MessageBox);
