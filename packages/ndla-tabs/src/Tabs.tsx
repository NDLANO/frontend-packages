/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import { HTMLAttributes, ReactNode } from 'react';

interface TabType {
  title: string;
  id: string;
  content: ReactNode;
}

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'dir'> {
  tabs: TabType[];
  variant?: 'rounded' | 'underlined';
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

const TabsRoot = styled(Root)`
  [data-tab-trigger] {
    border: none;
    user-select: none;
    cursor: pointer;
  }

  [data-tab-list] {
    position: relative;
  }

  &[data-variant='rounded'] {
    [data-tab-trigger] {
      ${fonts.sizes('12px')};
      padding: 0 30px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      color: ${colors.brand.primary};
      font-weight: ${fonts.weight.semibold};
      background-color: ${colors.brand.light};
      z-index: 1;
      position: relative;
      &[data-state='active'] {
        background-color: ${colors.brand.lighter};
        z-index: 2;
      }
      &:not(:first-child) {
        margin-left: -16px;
      }
    }
    [data-tab-panel] {
      background-color: ${colors.brand.lighter};
      border-radius: 0px 10px 10px 10px;
      padding: ${spacing.nsmall};
      position: relative;
    }
    [data-tab-panel]:focus-within,
    [data-tab-trigger]:focus-within {
      z-index: 3;
      box-shadow: 0 0 0 2px ${colors.brand.primary};
    }
  }
  &[data-variant='underlined'] {
    [data-tab-list]:after {
      border-bottom: 1px solid ${colors.brand.tertiary};
      position: absolute;
      bottom: 1.5px;
      left: 0px;
      content: '';
      width: 100%;
      z-index: -1;
    }

    [data-tab-trigger] {
      font-weight: ${fonts.weight.bold};
      border-bottom: 5px solid transparent;
      background-color: transparent;
      color: inherit;
      padding: ${spacing.xsmall} ${spacing.nsmall};
      &:hover {
        color: ${colors.brand.primary};
      }
      &[data-state='active'] {
        color: ${colors.brand.primary};
        border-bottom-color: ${colors.brand.primary};
      }
    }
  }
`;

const Tabs = ({ tabs, variant = 'underlined', defaultValue: defaultValueProp, ...rest }: Props) => {
  const defaultValue = defaultValueProp ?? tabs[0]?.id;
  return (
    <TabsRoot defaultValue={defaultValue} data-variant={variant} {...rest}>
      <List data-tab-list="">
        {tabs.map((tab) => (
          <Trigger key={tab.id} value={tab.id} data-tab-trigger="">
            {tab.title}
          </Trigger>
        ))}
      </List>
      {tabs.map((tab) => (
        <Content key={tab.id} value={tab.id} data-tab-panel="">
          {tab.content}
        </Content>
      ))}
    </TabsRoot>
  );
};

export default Tabs;
