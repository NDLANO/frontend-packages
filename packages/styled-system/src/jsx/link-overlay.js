import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { linkOverlayRaw } from '../patterns/link-overlay';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const LinkOverlay = /* @__PURE__ */ forwardRef(function LinkOverlay(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])
  const styleProps = linkOverlayRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["a"], mergedProps)
})