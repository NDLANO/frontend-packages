import { createElement, forwardRef } from 'react'
import { mergeCss } from '../css/css.js';
import { splitProps } from '../helpers.js';
import { getCenterStyle } from '../patterns/center.js';
import { styled } from './factory.js';

export const Center = /* @__PURE__ */ forwardRef(function Center(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["inline"])

const styleProps = getCenterStyle(patternProps)
const cssProps = { css: mergeCss(styleProps, props.css) }
const mergedProps = { ref, ...restProps, ...cssProps }

return createElement(styled.div, mergedProps)
  })