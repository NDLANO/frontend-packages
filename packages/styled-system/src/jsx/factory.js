import { createElement, forwardRef } from 'react';
import { cx, cva, css } from '../css/index';
import { composeCvaFn, composeShouldForwardProps, getDisplayName, serializeSplitStyles, splitJsxProps } from './helper';
import { isCssProperty } from './is-valid-prop';

function styledFn(BaseComponent, recipeOrConfig = {}, options = {}) {
  const recipeFn = recipeOrConfig.__cva__ || recipeOrConfig.__recipe__ ? recipeOrConfig : cva(recipeOrConfig)
  const composedRecipeFn = composeCvaFn(BaseComponent.__cva__, recipeFn)
  const variantKeys = composedRecipeFn.variantKeys
  const variantSet = new Set(variantKeys)
  const forwardFn = options.shouldForwardProp || ((prop) => !variantSet.has(prop) && !isCssProperty(prop))
  const forwardProps = options.forwardProps
  const forwardPropSet = forwardProps?.length ? new Set(forwardProps) : void 0
  const shouldForwardProp = forwardPropSet
    ? (prop) => forwardPropSet.has(prop) || forwardFn(prop, variantKeys)
    : (prop) => forwardFn(prop, variantKeys)

  const dataProps = options.dataAttr && recipeOrConfig.__name__ ? Object.assign({}, { 'data-recipe': recipeOrConfig.__name__ }) : {}
  const defaultProps = Object.assign(dataProps, options.defaultProps)
  const hasDefaultProps = Object.keys(defaultProps).length > 0

  const shouldForward = composeShouldForwardProps(BaseComponent, shouldForwardProp)
  const DefaultElement = BaseComponent.__base__ || BaseComponent
  const contextConsume = options.baseComponent || BaseComponent.__base__ !== void 0 || typeof BaseComponent === "string"
  const isBaseComponent = options.baseComponent || BaseComponent.__baseComponent__

  const StyledComponent = /* @__PURE__ */ forwardRef(function StyledComponent(props, ref) {
    const Element = props.as === void 0 ? DefaultElement : props.as
    const unstyled = props.unstyled
    const children = props.children
    let combinedProps = props
    if (hasDefaultProps) {
      const { as, unstyled, children, ...restProps } = props
      combinedProps = Object.assign({}, defaultProps, restProps)
    }
    const [htmlProps, forwardedProps, variantProps, propStyles, cssStyles, elementProps] = splitJsxProps(
      combinedProps,
      shouldForward,
      variantSet,
      isCssProperty,
    )
    const consumeCss = forwardedProps?.consumeCss
    if (forwardedProps) delete forwardedProps.consumeCss
    const consume = forwardedProps?.asChild ? consumeCss && isBaseComponent : contextConsume
    const hasStyles = propStyles || cssStyles !== void 0
    let className
    if (unstyled) {
      className = cx(hasStyles && serializeSplitStyles(propStyles, cssStyles), combinedProps.className)
    } else if (recipeOrConfig.__recipe__) {
      const compoundVariantClasses = composedRecipeFn.__getCompoundVariantClasses__?.(variantProps)
      className = cx(
        composedRecipeFn(variantProps, false),
        compoundVariantClasses,
        hasStyles && serializeSplitStyles(propStyles, cssStyles),
        combinedProps.className,
      )
    } else if (!consume) {
      return createElement(Element, {
        ref,
        ...forwardedProps,
        ...elementProps,
        ...htmlProps,
        css: hasStyles ? css.raw(composedRecipeFn.raw(variantProps), propStyles, cssStyles) : composedRecipeFn.raw(variantProps),
        // propagate consumeCss so downstream asChild components inherit the override:
        // true propagates so the first baseComponent in the chain produces className;
        // false propagates so the entire chain stays in raw-css-forwarding mode.
        ...(consumeCss !== void 0 && { consumeCss }),
      }, children ?? combinedProps.children)
    } else {
      className = cx(
        hasStyles ? serializeSplitStyles(propStyles, cssStyles, composedRecipeFn.raw(variantProps)) : composedRecipeFn(variantProps),
        combinedProps.className,
      )
    }

    return createElement(Element, {
      ref,
      ...forwardedProps,
      ...elementProps,
      ...htmlProps,
      className,
    }, children ?? combinedProps.children)
  })

  const name = getDisplayName(DefaultElement)
  StyledComponent.displayName = `styled.${name}`
  StyledComponent.__cva__ = composedRecipeFn
  StyledComponent.__base__ = DefaultElement
  StyledComponent.__shouldForwardProps__ = shouldForwardProp
  StyledComponent.__baseComponent__ = isBaseComponent

  return StyledComponent
}

function createJsxFactory() {
  const cache = new Map()
  return new Proxy(styledFn, {
    apply(_, __, args) {
      return styledFn(...args)
    },
    get(_, el) {
      if (!cache.has(el)) cache.set(el, styledFn(el))
      return cache.get(el)
    },
  })
}

export const styled = /* @__PURE__ */ createJsxFactory()