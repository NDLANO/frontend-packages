/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';

import {
  School as SchoolIcon,
  MenuBook as MenuBookIcon,
  Bookmark as BookmarkIcon,
  Class as ClassIcon,
  // @ts-ignore
} from '@ndla/icons/action';

import SafeLink from '@ndla/safelink';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 32px 0;
  position: fixed;
  left: 10px;
  top: 10px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: 20px;
`;

const ListItem = styled.li`
  color: #20588f;
  font-size: 16px;
  position: relative;
  a {
    text-decoration: none;
  }
`;

type IconProps = {
  isCurrent: boolean;
};

const IconWrapper = styled.span<IconProps>`
  margin: 8px;
  color: #a5bcd3;
  ${props =>
    props.isCurrent === true &&
    `
    color: #20588F;
  `}
  .crumbicon {
    width: 24px;
    height: 24px;
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
  name: string;
  to: string;
  typename: 'Subjecttype' | 'Subject' | 'Topic' | 'Subtopic';
  isCurrent?: boolean | false;
};

type BreadCrumbProps = {
  children: React.ReactNode;
  items: [BreadcrumbItemProps];
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

const BreadCrumblist = ({ children, items }: BreadCrumbProps) => (
  <Wrapper>
    {/* {children} */}
    <List>
      {items.map((item: BreadcrumbItemProps, level: number) => {
        const { name, to, typename, isCurrent = false } = item;
        return (
          <ListItem key={`${name}-${typename}`}>
            {isCurrent ? <Dot /> : null}
            <IconWrapper isCurrent={isCurrent}>
              {TypeIcon(typename)}
            </IconWrapper>
            <SafeLink to={to} aria-label={name}>
              {name}
            </SafeLink>
            {/*  - {to}- {typename} */}
          </ListItem>
        );
      })}
    </List>
  </Wrapper>
);

export default BreadCrumblist;
