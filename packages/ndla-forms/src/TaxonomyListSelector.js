/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { spacing, fonts, colors, misc, animations } from 'ndla-core';
import { ChevronRight } from 'ndla-icons/common';

import FormRemoveButton from './FormRemoveButton';
import FormSections from './FormSections';
import RadiobuttonItem from './RadiobuttonItem';
import CheckboxItem from './CheckboxItem';

const TaxonomyListItem = styled.div`
  display: flex;
  font-family: ${fonts.sans};
  ${animations.fadeInBottom(animations.durations.normal)};
  &:last-item {
    margin-bottom: 100px;
  }
  > div {
    background: ${colors.brand.greyLightest};
    display: flex;
    &:first-child,
    &:last-child {
      width: calc(${spacing.large} + ${spacing.normal});
      align-items: center;
      justify-content: center;
    }
    &:first-child {
      border-top-left-radius: ${misc.borderRadius};
      border-bottom-left-radius: ${misc.borderRadius};
    }
    &:last-child {
      border-top-right-radius: ${misc.borderRadius};
      border-bottom-right-radius: ${misc.borderRadius};
    }
    &.__taxonomy-content {
      padding: ${spacing.small} calc(${spacing.xsmall} + ${spacing.small});
      margin: 0 2px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      flex-basis: 0;
      flex-grow: 1;
      align-items: left;
      .__taxonomy-header {
        font-weight: ${fonts.weight.semibold};
        ${fonts.sizes(20, 1.25)};
        color: ${colors.text.primary};
        margin: 0;
      }
      .__taxonomy-filtertag {
        margin-left: ${spacing.small};
        background: ${colors.brand.lighter};
        padding: calc(${spacing.xsmall} / 2) ${spacing.small};
        ${fonts.sizes(14, 1.25)};
        border-radius: ${misc.borderRadius};
      }
      .__taxonomy-breadcrumb {
        ${fonts.sizes(16, 1.25)};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: ${spacing.xsmall};
      }
    }
  }
  ${props =>
    props.primary &&
    css`
      > div:first-child {
        background: ${colors.brand.greyLight};
      }
    `};
`;

const headerCSS = css`
  ${fonts.sizes(16, 1.25)};
  font-family: ${fonts.sans};
  font-weight: ${fonts.semiBold};
  margin-bottom: ${spacing.small};
  margin-top: ${spacing.normal};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
`;

const TaxonomyListSelector = ({
  list,
  removeItem,
  toggleItemCore,
  removeLabel,
  selectPrimary,
  primaryId,
}) =>
  list.length ? (
    <Fragment>
      <div className={headerCSS}>
        <span>Velg primærkobling</span>
        <span>Kjernestoff</span>
      </div>
      {list.map(listItem => (
        <FormSections key={listItem.uniqeId}>
          <TaxonomyListItem primary={primaryId === listItem.uniqeId}>
            <div>
              <RadiobuttonItem
                checked={primaryId === listItem.uniqeId}
                id={listItem.uniqeId}
                onChange={selectPrimary}
              />
            </div>
            <div className="__taxonomy-content">
              <p className="__taxonomy-header">
                {listItem.subjectName}
                {listItem.filterName && (
                  <span className="__taxonomy-filtertag">
                    {listItem.filterName}
                  </span>
                )}
              </p>
              <div className="__taxonomy-breadcrumb">
                <ChevronRight />
                <span>{listItem.mainTopicName}</span>
                {listItem.subTopicNames.map(subTopicName => (
                  <Fragment key={subTopicName}>
                    <ChevronRight />
                    <span>{subTopicName}</span>
                  </Fragment>
                ))}
              </div>
            </div>
            <div>
              <CheckboxItem
                checked={listItem.core}
                id={`checkboxId_${listItem.uniqeId}`}
                onChange={() => {
                  toggleItemCore(listItem.uniqeId);
                }}
              />
            </div>
          </TaxonomyListItem>
          <div>
            <FormRemoveButton
              onClick={() => {
                removeItem(listItem.uniqeId);
              }}>
              {removeLabel}
            </FormRemoveButton>
          </div>
        </FormSections>
      ))}
    </Fragment>
  ) : null;

TaxonomyListSelector.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      subjectName: PropTypes.string.isRequired,
      uniqeId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      filterName: PropTypes.string,
      subTopicNames: PropTypes.arrayOf(PropTypes.string),
      core: PropTypes.bool,
    }),
  ).isRequired,
  removeLabel: PropTypes.string,
  primaryLabel: PropTypes.string,
  coreLabel: PropTypes.string,
  primaryId: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  selectPrimary: PropTypes.func.isRequired,
  toggleItemCore: PropTypes.func.isRequired,
};

export default TaxonomyListSelector;
