import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { bleedRaw } from '../patterns/bleed';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const Bleed = /* @__PURE__ */ forwardRef(function Bleed(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["block","inline"])
  const styleProps = bleedRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})