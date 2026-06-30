import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { centerRaw } from '../patterns/center';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const Center = /* @__PURE__ */ forwardRef(function Center(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["inline"])
  const styleProps = centerRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})