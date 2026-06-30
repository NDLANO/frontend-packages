import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { gridRaw } from '../patterns/grid';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const Grid = /* @__PURE__ */ forwardRef(function Grid(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["columnGap","columns","gap","minChildWidth","rowGap"])
  const styleProps = gridRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})