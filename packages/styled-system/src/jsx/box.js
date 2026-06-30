import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { boxRaw } from '../patterns/box';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const Box = /* @__PURE__ */ forwardRef(function Box(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])
  const styleProps = boxRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})