import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { aspectRatioRaw } from '../patterns/aspect-ratio';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const AspectRatio = /* @__PURE__ */ forwardRef(function AspectRatio(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["ratio"])
  const styleProps = aspectRatioRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})