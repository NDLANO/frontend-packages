import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { containerRaw } from '../patterns/container';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const Container = /* @__PURE__ */ forwardRef(function Container(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])
  const styleProps = containerRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})