import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { flexRaw } from '../patterns/flex';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const Flex = /* @__PURE__ */ forwardRef(function Flex(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["align","basis","direction","grow","justify","shrink","wrap"])
  const styleProps = flexRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})