import { createElement, forwardRef } from 'react'
import { mergeCss } from '../css/css.js';
import { splitProps } from '../helpers.js';
import { getSquareStyle } from '../patterns/square.js';
import { styled } from './factory.js';

export const Square = /* @__PURE__ */ forwardRef(function Square(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["size"])

const styleProps = getSquareStyle(patternProps)
const cssProps = { css: mergeCss(styleProps, props.css) }
const mergedProps = { ref, ...restProps, ...cssProps }

return createElement(styled.div, mergedProps)
  })