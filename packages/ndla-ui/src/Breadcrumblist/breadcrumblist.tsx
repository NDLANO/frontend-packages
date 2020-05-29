/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { mq, breakpoints } from '@ndla/core';

import {
  School as SchoolIcon,
  MenuBook as MenuBookIcon,
  Bookmark as BookmarkIcon,
  Class as ClassIcon,
  // @ts-ignore
} from '@ndla/icons/action';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 32px 0 16px;
  width: auto;
  background: #fff;
  z-index: 1;
  ${mq.range({ from: breakpoints.wide })} {
    margin: 32px 0;
    width: 240px;
    position: fixed;
    left: 22px;
    top: 85px;
  }
  ${mq.range({ from: breakpoints.ultraWide })} {
    margin: 32px 0;
    left: 52px;
    width: 290px;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  /* margin-left: 20px; */
  width: 100%;
`;

const ListItem = styled.li`
  color: #20588f;
  font-size: 16px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  a {
    text-decoration: none;
    box-shadow: none;
    display: inline-block;
    width: 99%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

type IconProps = {
  isCurrent: boolean;
};

const IconWrapper = styled.span<IconProps>`
  margin: 0px 8px;
  color: #a5bcd3;
  ${props =>
    props.isCurrent &&
    `
    color: #20588F;
  `}
  .crumbicon {
    width: 24px;
    height: 24px;
    margin-top: -4px;
  }
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: #20588f;
  border-radius: 50%;
  display: inline-block;
  margin-left: -15px;
  margin-right: 5px;
`;

type BreadcrumbItemProps = {
  id: string | number;
  label: string;
  url: string;
  typename: 'Subjecttype' | 'Subject' | 'Topic' | 'Subtopic';
  isCurrent?: boolean | false;
};

type BreadCrumbProps = {
  children: React.ReactNode;
  items: [BreadcrumbItemProps];
  onNav: (e: React.MouseEvent<HTMLElement>, item: BreadcrumbItemProps) => void;
};

const TypeIcon = (type: string) => {
  switch (type) {
    case 'Subjecttype':
      return <SchoolIcon className="crumbicon" />;
    case 'Subject':
      return <MenuBookIcon className="crumbicon" />;
    case 'Topic':
      return <BookmarkIcon className="crumbicon" />;
    case 'Subtopic':
      return <ClassIcon className="crumbicon" />;
    default:
      return null;
  }
};

const BreadCrumblist = ({ children, items, onNav }: BreadCrumbProps) => (
  <Wrapper>
    <List>
      {items.map((item: BreadcrumbItemProps, level: number) => {
        const { id, label, url, typename, isCurrent = false } = item;
        return (
          <ListItem key={`${id}-${typename}`}>
            {isCurrent ? <Dot /> : null}
            <a
              href={url}
              onClick={e => {
                onNav(e, item);
              }}
              aria-label={label}>
              <IconWrapper isCurrent={isCurrent}>
                {TypeIcon(typename)}
              </IconWrapper>
              <span>{label}</span>
            </a>
          </ListItem>
        );
      })}
    </List>
  </Wrapper>
);

export default BreadCrumblist;
