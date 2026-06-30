import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { stackRaw } from '../patterns/stack';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const Stack = /* @__PURE__ */ forwardRef(function Stack(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["align","direction","gap","justify"])
  const styleProps = stackRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})