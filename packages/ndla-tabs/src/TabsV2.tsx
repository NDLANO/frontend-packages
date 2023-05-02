/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';

const TabsTrigger = styled(Tabs.Trigger)`
  padding: 0 30px;
  height: 25px;
  user-select: none;
  border: none;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  color: ${colors.brand.primary};
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('12px')};
  background-color: ${colors.brand.light};
  z-index: 1;
  position: relative;
  cursor: pointer;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:not(:first-child) {
    margin-left: -16px;
  }
  &:hover {
    color: var(--violet11);
  }
  &[data-state='active'] {
    background-color: ${colors.brand.lighter};
    z-index: 2;
  }
  &:focus {
    position: relative;
    box-shadow: 0 0 0 2px ${colors.brand.primary};
  }
`;

const TabsContent = styled(Tabs.Content)`
  flex-grow: 1;
  padding: ${spacing.nsmall};
  background-color: ${colors.brand.lighter};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;

  &:focus {
    z-index: 3;
    box-shadow: 0 0 0 2px ${colors.brand.primary};
  }
`;

const TabsList = styled(Tabs.List)`
  display: flex;

  :after {
    content: '';
    position: relative;
    width: 10px;
  }
`;

interface TabType {
  title: string;
  content: ReactNode;
}

interface Props {
  /** Tabs array. Title is tab name to be displayed in the top menu,
   * content is the content to be rendered when the associated tab is active. */
  tabs: TabType[];
  ariaLabel: string;
}

const keyName = (index: number) => `tab${index + 1}`;

const TabsV2 = ({ tabs, ariaLabel }: Props) => {
  return (
    <Tabs.Root defaultValue="tab1">
      <TabsList aria-label={ariaLabel}>
        {tabs.map((t, index) => {
          const key = keyName(index);
          return (
            <TabsTrigger key={key} value={key}>
              {t.title}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {tabs.map((t, index) => {
        const key = keyName(index);
        return (
          <TabsContent key={key} value={key}>
            {t.content}
          </TabsContent>
        );
      })}
    </Tabs.Root>
  );
};

export default TabsV2;
