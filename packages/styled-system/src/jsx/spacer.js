import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { spacerRaw } from '../patterns/spacer';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const Spacer = /* @__PURE__ */ forwardRef(function Spacer(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["size"])
  const styleProps = spacerRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})