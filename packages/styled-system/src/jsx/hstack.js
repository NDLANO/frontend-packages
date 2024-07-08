import { createElement, forwardRef } from 'react'
import { mergeCss } from '../css/css.js';
import { splitProps } from '../helpers.js';
import { getHstackStyle } from '../patterns/hstack.js';
import { styled } from './factory.js';

export const HStack = /* @__PURE__ */ forwardRef(function HStack(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["justify","gap"])

const styleProps = getHstackStyle(patternProps)
const cssProps = { css: mergeCss(styleProps, props.css) }
const mergedProps = { ref, ...restProps, ...cssProps }

return createElement(styled.div, mergedProps)
  })