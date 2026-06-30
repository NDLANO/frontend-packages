import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { hstackRaw } from '../patterns/hstack';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const HStack = /* @__PURE__ */ forwardRef(function HStack(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["gap","justify"])
  const styleProps = hstackRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})