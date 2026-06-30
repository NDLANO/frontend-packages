import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { visuallyHiddenRaw } from '../patterns/visually-hidden';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const VisuallyHidden = /* @__PURE__ */ forwardRef(function VisuallyHidden(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])
  const styleProps = visuallyHiddenRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})