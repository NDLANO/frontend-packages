import { createElement, forwardRef } from 'react';
import { splitProps } from '../helpers';
import { cqRaw } from '../patterns/cq';
import { styled } from './factory';
import { mergeCss } from '../css/css';

export const Cq = /* @__PURE__ */ forwardRef(function Cq(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["name","type"])
  const styleProps = cqRaw(patternProps)
  const mergedProps = { ref, ...restProps, css: mergeCss(styleProps, props.css) }
  return createElement(styled["div"], mergedProps)
})