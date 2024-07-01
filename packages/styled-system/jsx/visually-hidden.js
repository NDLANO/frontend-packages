import { createElement, forwardRef } from 'react'
import { mergeCss } from '../css/css.js';
import { splitProps } from '../helpers.js';
import { getVisuallyHiddenStyle } from '../patterns/visually-hidden.js';
import { styled } from './factory.js';

export const VisuallyHidden = /* @__PURE__ */ forwardRef(function VisuallyHidden(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getVisuallyHiddenStyle(patternProps)
const cssProps = { css: mergeCss(styleProps, props.css) }
const mergedProps = { ref, ...restProps, ...cssProps }

return createElement(styled.div, mergedProps)
  })