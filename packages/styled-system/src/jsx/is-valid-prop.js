import { splitProps } from '../helpers';

const cssPropertySet = new Set(["css"])

export function isCssProperty(value) {
  return cssPropertySet.has(value)
}

export function splitCssProps(props) {
  return splitProps(props, isCssProperty)
}