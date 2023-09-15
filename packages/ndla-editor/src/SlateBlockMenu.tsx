/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, ReactNode } from 'react';
import FocusTrap from 'focus-trap-react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { spacing, colors, fonts, shadows, animations } from '@ndla/core';
import { Plus } from '@ndla/icons/action';
import { useTranslation } from 'react-i18next';

const ICON_SIZE = '48px';

const Wrapper = styled.div`
  position: relative;
  transform: translate(
    calc(${ICON_SIZE} + ${spacing.small}),
    calc(-${ICON_SIZE} - (${spacing.large} + ${spacing.small}))
  );
  display: inline-block;
  z-index: 10;
  > div {
    padding: ${spacing.normal} 0;
    background: #fff;
    box-shadow: ${shadows.levitate1};
    ${animations.fadeInLeft(animations.durations.fast)};
  }
`;

const HeaderLabel = styled.div`
  font-weight: ${fonts.weight.normal};
  text-transform: uppercase;
  font-family: ${fonts.sans};
  color: ${colors.text.light};
  ${fonts.sizes(16, 1.1)};
  margin: 0 ${spacing.normal} ${spacing.normal} ${spacing.normal};
`;

const Item = styled.div`
  display: flex;
  height: 42px;
  align-items: flex-start;
  justify-content: space-between;
  padding-right: ${spacing.large};
  > div {
    display: none;
    margin-right: ${spacing.normal};
    align-items: center;
    position: absolute;
    right: 0;
  }
  &:hover {
    > div {
      display: flex;
    }
  }
`;

const itemButton = css`
  padding: ${spacing.xsmall} ${spacing.normal} ${spacing.xsmall} ${spacing.normal};
  border: 0;
  background: 0;
  color: ${colors.brand.primary};
  ${fonts.sizes(18, 1.1)};
  font-weight: ${fonts.weight.semibold};
  span {
    box-shadow: inset 0 -1px;
  }
  .c-icon {
    color: ${colors.brand.tertiary};
    margin-right: ${spacing.xsmall};
    width: ${spacing.normal};
    height: ${spacing.normal};
    transition: color 100ms ease;
  }
  &:hover,
  &:focus {
    span {
      box-shadow: none;
    }
    .c-icon {
      color: ${colors.brand.primary};
    }
    + div {
      display: block;
    }
  }
`;

const buttonCSS = css`
  user-select: none;
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.brand.light};
  border: 2px solid ${colors.brand.primary};
  border-radius: 100%;
  transition: background 200ms ease, transform 200ms ease;
  .c-icon {
    width: calc(${spacing.medium} + 14px);
    height: calc(${spacing.medium} + 14px);
    color: ${colors.brand.primary};
    transition: transform 300ms ease;
    padding: 7px;
  }
  &:hover,
  &:focus {
    background: ${colors.brand.tertiary};
  }
  &:active {
    transform: scale(0.9);
  }
`;

const buttonOpen = css`
  .c-icon {
    transform: rotate(135deg);
  }
  pointer-events: none;
`;

interface Props {
  isOpen: boolean;
  onToggleOpen: (open: boolean) => void;
  heading?: string;
  clickItem: (data: any) => void;
  actions: {
    label: string;
    icon?: ReactNode;
    data: { type: string; object: string };
    helpIcon?: ReactNode;
  }[];
}

const SlateBlockMenu = forwardRef<HTMLDivElement, Props>(
  ({ heading, actions, clickItem, onToggleOpen, isOpen }: Props, ref) => {
    const { t } = useTranslation();
    return (
      <>
        <div
          ref={ref}
          css={[buttonCSS, isOpen && buttonOpen]}
          data-testid="slate-block-picker"
          onMouseDown={() => onToggleOpen(!isOpen)}
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
          aria-controls="slate-block-picker"
          aria-label={isOpen ? t('slateBlockMenu.close') : t('slateBlockMenu.open')}
        >
          <Plus aria-hidden="true" />
        </div>
        {isOpen && (
          <FocusTrap
            active
            focusTrapOptions={{
              onDeactivate: () => onToggleOpen(false),
              clickOutsideDeactivates: true,
              escapeDeactivates: true,
            }}
          >
            <Wrapper>
              <div data-testid="slate-block-picker-menu" id="slate-block-picker">
                <HeaderLabel>{heading}</HeaderLabel>
                {actions.map((action) => (
                  <Item key={action.data.object}>
                    <button
                      css={itemButton}
                      data-testid={`create-${action.data.object}`}
                      type="button"
                      onClick={() => clickItem(action.data)}
                    >
                      {action.icon && action.icon}
                      <span>{action.label}</span>
                    </button>
                    {action.helpIcon}
                  </Item>
                ))}
              </div>
            </Wrapper>
          </FocusTrap>
        )}
      </>
    );
  },
);

export default SlateBlockMenu;
