import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { circleRaw } from '../patterns/circle';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const Circle = /* @__PURE__ */ forwardRef(function Circle(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["size"])
  const styleProps = circleRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})