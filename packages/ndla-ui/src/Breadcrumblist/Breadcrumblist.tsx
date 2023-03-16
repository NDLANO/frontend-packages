/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, useEffect, useState, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { mq, breakpoints, colors } from '@ndla/core';
import {
  School as SchoolIcon,
  MenuBook as MenuBookIcon,
  Bookmark as BookmarkIcon,
  Class as ClassIcon,
  Home as HomeIcon,
} from '@ndla/icons/action';
import SafeLink from '@ndla/safelink';
import { useTranslation } from 'react-i18next';
import MessageBoxTag from '../Messages/MessageBoxTag';
import { useMastheadHeight } from '../Masthead';

type WrapperProps = {
  startOffset?: number;
  isVisible?: boolean;
  leftAlign?: boolean;
  hideOnNarrow?: boolean;
  mastheadHeight?: number;
};

type InvertItProps = {
  invertedStyle?: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 32px 0 16px;
  width: auto;
  z-index: 1;
  ${(props) => props.hideOnNarrow && `display:none;`}
  ${mq.range({ from: breakpoints.wide })} {
    display: flex;
    margin: 32px 0;
    width: 240px;
    position: fixed;
    left: 22px;
    top: ${(props) => props.mastheadHeight || 85}px;
    ${(props) =>
      props.startOffset &&
      `
        top: calc(${props.startOffset}px + ${props.mastheadHeight || 85}px); 
    `}
  }
  ${mq.range({ from: breakpoints.wide })} {
    ${(props) =>
      !props.isVisible &&
      `
    opacity: 0;
    transition: opacity 125ms ease-in-out;
  `}
  }
  ${mq.range({ from: breakpoints.ultraWide })} {
    margin: 32px 0;
    left: 52px;
    ${(props) =>
      props.leftAlign &&
      `
        left: 0;
    `}
  }
  ${mq.range({ from: '1440px' })} {
    margin-left: 52px;
    left: calc((100vw - 1480px) / 2);
    ${(props) =>
      props.leftAlign &&
      `
        left: 0;
    `}
  }
`;
const Heading = styled.div<InvertItProps>`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  padding: 0 0 10px 10px;
  ${(props) =>
    props.invertedStyle &&
    `
      color: #fff;
  `}
`;

const List = styled.ul`
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
  width: 100%;
`;

const ListItem = styled.li<InvertItProps>`
  font-size: 16px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  a {
    color: ${colors.brand.primary};
    text-decoration: none;
    box-shadow: none;
    display: inline-block;
    width: 99%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props) =>
      props.invertedStyle &&
      `
        color: white;
    `}
    &:hover {
      text-decoration: underline;
      color: ${colors.brand.primary};
      ${(props) =>
        props.invertedStyle &&
        `
          color: #fff;
      `}
    }
  }
`;

type IconProps = {
  isCurrent: boolean;
  invertedStyle?: boolean;
};

const IconWrapper = styled.span<IconProps>`
  margin: 0 8px;
  color: ${colors.brand.tertiary};
  display: inline-block;
  min-width: 24px;
  text-align: center;
  ${(props) =>
    props.isCurrent &&
    `
    color: ${colors.brand.primary};
  `}
  ${(props) =>
    props.invertedStyle &&
    `
      color: #fff;
  `}
  .crumbicon {
    width: 24px;
    height: 24px;
    margin-top: -4px;
  }
`;

const Dot = styled.span<InvertItProps>`
  height: 10px;
  width: 10px;
  background-color: #20588f;
  border-radius: 50%;
  display: inline-block;
  margin-left: -15px;
  margin-right: 5px;
  ${(props) =>
    props.invertedStyle &&
    `
      background-color: #fff;
  `}
`;

const TypeIcon = (type: string) => {
  switch (type) {
    case 'Subjecttype':
      return <SchoolIcon className="crumbicon" />;
    case 'Subject':
      return <MenuBookIcon className="crumbicon" />;
    case 'Topic':
      return <BookmarkIcon className="crumbicon" />;
    case 'Subtopic':
    case 'SubSubtopic':
      return <ClassIcon className="crumbicon" />;
    case 'Home':
      return <HomeIcon className="crumbicon" />;
    default:
      return null;
  }
};

export type BreadcrumbItemProps = {
  id: string | number;
  label: string;
  url: string;
  typename?: 'Subjecttype' | 'Subject' | 'Topic' | 'Subtopic' | 'SubSubtopic' | 'Home';
  isCurrent?: boolean | false;
  icon?: ReactNode;
};

type BreadCrumbProps = {
  children?: ReactNode;
  items: BreadcrumbItemProps[];
  startOffset?: number;
  isVisible?: boolean;
  invertedStyle?: boolean;
  leftAlign?: boolean;
  hideOnNarrow?: boolean;
  onNav?: (e: MouseEvent<HTMLElement>, item: BreadcrumbItemProps) => void;
  messageBoxTagMessage?: string;
};

const Breadcrumblist = ({
  children,
  items,
  startOffset = 0,
  isVisible = true,
  invertedStyle,
  leftAlign,
  hideOnNarrow,
  onNav,
  messageBoxTagMessage,
}: BreadCrumbProps) => {
  const { t } = useTranslation();
  const [wrapperOffset, setWrapperOffset] = useState(startOffset);
  const [useScrollEvent, setUseScrollEvent] = useState(false);

  const { height: mastheadHeight } = useMastheadHeight();

  useEffect(() => {
    const handleScroll = () => {
      let position = 0;
      if (window.pageYOffset < startOffset) {
        position = startOffset;
      }
      setWrapperOffset(position);
    };

    if (useScrollEvent) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [useScrollEvent, startOffset]);

  const checkScreenSize = () => {
    if (window.innerWidth >= 1301) {
      // Wide. If larger, and there is a startOffset, the breadcrumb is positioned absolute at start
      setUseScrollEvent(true);
    } else {
      setUseScrollEvent(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      <Wrapper
        leftAlign={leftAlign}
        startOffset={wrapperOffset}
        hideOnNarrow={hideOnNarrow}
        isVisible={isVisible}
        mastheadHeight={mastheadHeight}
      >
        {items.length > 0 && (
          <>
            <Heading invertedStyle={invertedStyle}>{t('breadcrumb.youAreHere')}</Heading>
            {messageBoxTagMessage && <MessageBoxTag tagMessage={messageBoxTagMessage} />}
            <List data-testid="breadcrumb-list">
              {items.map((item: BreadcrumbItemProps) => {
                const { id, label, url, typename, icon, isCurrent = false } = item;
                return (
                  <ListItem invertedStyle={invertedStyle} key={`${id}-${typename}`}>
                    {isCurrent && <Dot invertedStyle={invertedStyle} />}
                    <SafeLink
                      className="linkitem"
                      to={url}
                      onClick={(e: MouseEvent<HTMLElement>) => {
                        onNav && onNav(e, item);
                      }}
                      aria-label={label}
                    >
                      <IconWrapper invertedStyle={invertedStyle} isCurrent={isCurrent}>
                        {icon && icon}
                        {typename && TypeIcon(typename)}
                      </IconWrapper>
                      <span>{label}</span>
                    </SafeLink>
                  </ListItem>
                );
              })}
            </List>
          </>
        )}
        {children}
      </Wrapper>
    </>
  );
};

export default Breadcrumblist;
