import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { gridItemRaw } from '../patterns/grid-item';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const GridItem = /* @__PURE__ */ forwardRef(function GridItem(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["colEnd","colSpan","colStart","rowEnd","rowSpan","rowStart"])
  const styleProps = gridItemRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})