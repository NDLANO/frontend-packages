/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { spacing, fonts, breakpoints, mq, colors } from '@ndla/core';

export const wrapperCSS = css`
  margin-bottom: ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: ${spacing.large};
  }
`;

export const headingCSS = css`
  font-weight: ${fonts.weight.bold};
  ${fonts.sizes(22, 1.2)};
  color: ${colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
  margin: ${spacing.small} 0;
  small {
    font-weight: normal;
    padding-left: ${spacing.small};
    color: ${colors.brand.greyLight};
  }
`;

export const movieTitleCSS = css`
  ${fonts.sizes(22, 1.4)};
  font-weight: ${fonts.weight.bold};
  color: #fff;
  margin: ${spacing.small} / 2 0 ${spacing.small};
  ${mq.range({ from: breakpoints.mobileWide, to: breakpoints.tablet })} {
    ${fonts.sizes(16, 1.4)};
  }
  ${mq.range({ from: breakpoints.tablet })} {
    margin: ${spacing.small} 0;
    ${fonts.sizes(18, 1.4)};
  }
`;
/*
  &__movie-tags-wrapper {
    padding: $spacing--small / 2 $spacing--small;
    flex-flow: wrap;
    display: flex;
    position: absolute;
    bottom: 0;
  }
  &__movie-tags {
    transition: opacity 200ms ease;
    background: $brand-grey--light;
    padding: $spacing--small / 4 $spacing--small / 2;
    @include font-size(14px, 16px);
    font-weight: $font-weight-semibold;
    border-radius: $border-radius;
    color: $primary-color;
    margin-right: $spacing--small / 2;
    margin-bottom: $spacing--small / 4;
    opacity: 0;
  }
  &__slide-item {
    padding: $spacing--small / 2;
    color: #fff;
    box-shadow: none;
    &:hover,
    &:focus {
      .c-film-movielist__movie-title {
        text-decoration: underline;
      }
      .c-film-movielist__movie-tags {
        opacity: 1;
      }
      .c-film-movielist__slidecolumn-image:before {
        opacity: 0.3;
      }
    }
  }
  &__slidecolumn-image {
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    position: relative;
    &:before {
      content: '';
      transition: 200ms ease;
      display: block;
      background: $film-color;
      opacity: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  &__slide-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  &__slide-content {
    display: flex;
    transition: transform 600ms ease;
    &--swiping {
      transition: none;
    }
  }
  &__slide-navigation {
    background: #091a2a80;
    border: 0;
    outline: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    .c-icon {
      fill: #fff;
      opacity: 0;
      width: 78px;
      height: 78px;
      transition: transform 200ms ease, opacity 200ms ease;
    }
    &--prev {
      left: 0;
      .c-icon {
        opacity: 0.7;
        transform: translate(-$spacing--small / 2, -$spacing--medium);
      }
    }
    &--next {
      right: 0;
      .c-icon {
        opacity: 0.7;
        transform: translate($spacing--small / 2, -$spacing--medium);
      }
    }
    &:focus {
      .c-icon {
        opacity: 0.7;
        transform: translate(0, -$spacing--medium);
      }
    }
    &:hover {
      .c-icon {
        opacity: 1;
        transform: translate(0, -$spacing--medium);
      }
    }
    &--hidden {
      display: none;
    }
    @include mq($until: tablet) {
      display: none;
    }
  }
}
*/
