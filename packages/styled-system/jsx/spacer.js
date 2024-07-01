import { createElement, forwardRef } from 'react'
import { mergeCss } from '../css/css.js';
import { splitProps } from '../helpers.js';
import { getSpacerStyle } from '../patterns/spacer.js';
import { styled } from './factory.js';

export const Spacer = /* @__PURE__ */ forwardRef(function Spacer(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["size"])

const styleProps = getSpacerStyle(patternProps)
const cssProps = { css: mergeCss(styleProps, props.css) }
const mergedProps = { ref, ...restProps, ...cssProps }

return createElement(styled.div, mergedProps)
  })