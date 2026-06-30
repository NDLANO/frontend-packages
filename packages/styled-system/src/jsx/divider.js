import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { dividerRaw } from '../patterns/divider';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const Divider = /* @__PURE__ */ forwardRef(function Divider(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["color","orientation","thickness"])
  const styleProps = dividerRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})