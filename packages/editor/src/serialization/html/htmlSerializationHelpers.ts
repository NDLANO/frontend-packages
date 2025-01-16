/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import he from "he";
import type { ComponentProps, ElementType } from "react";

const reduceRegexp = /(-|_)[a-z]/g;

export const parseElementAttributes = (
  attributes: Pick<Attr, "name" | "value">[],
  filter?: string[],
): Record<string, string> => {
  return attributes.reduce<Record<string, string>>((acc, attr) => {
    if (attr.name === "style") {
      return acc;
    }
    if (filter?.length && !filter.includes(attr.name)) {
      return acc;
    }
    if (attr.name.startsWith("data-")) {
      const key = attr.name
        .replace("data-", "")
        // convert "-a" with "A". image-id becomes imageId
        .replace(reduceRegexp, (m) => m.charAt(1).toUpperCase());
      acc[key] = attr.value;
    } else {
      // Handle regular dash attributes like aria-label.
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
};

const attributeRegex = /[A-Z]/g;

type EmbedProps<T extends object> = {
  [Key in keyof T]: string | undefined;
};

type HTMLPropType<Tag> = Tag extends ElementType ? ComponentProps<Tag> : {};

export const createDataAttributes = <T extends object>(data?: EmbedProps<T>): Record<string, string> => {
  const entries = Object.entries(data ?? {});
  return entries.reduce<Record<string, string>>((acc, [key, value]) => {
    const newKey = key.replace(attributeRegex, (m) => `-${m.toLowerCase()}`);
    if (value != null && typeof value === "string") {
      if (key === "resourceId") {
        acc["data-resource_id"] = value.toString();
      } else {
        acc[`data-${newKey}`] = he.encode(value.toString());
      }
    }
    return acc;
  }, {});
};

interface CreateHtmlTag<Tag> {
  tag: Tag;
  data?: HTMLPropType<Tag> & {
    [key: `data-${string}`]: string | undefined;
  };
  children?: string;
  bailOnEmpty?: boolean;
  shorthand?: boolean;
}

const reactToHtmlPropMap: Record<string, string> = {
  className: "class",
  htmlFor: "for",
  acceptCharset: "accept-charset",
  httpEquiv: "http-equiv",
  autoComplete: "autocomplete",
  readOnly: "readonly",
  maxLength: "maxlength",
  minLength: "minlength",
  colSpan: "colspan",
  rowSpan: "rowspan",
  contentEditable: "contenteditable",
  tabIndex: "tabindex",
  spellCheck: "spellcheck",
  srcSet: "srcset",
};

export const stringifyAttributes = <Tag extends ElementType | "ndlaembed" | "math">(
  dataAttributes?: HTMLPropType<Tag>,
): string => {
  const keys = Object.entries(dataAttributes ?? {}).reduce<string[]>((acc, [key, value]) => {
    if (value != null) {
      acc.push(`${reactToHtmlPropMap[key] ?? key}="${value}"`);
    }
    return acc;
  }, []);
  if (keys.length) {
    return ` ${keys.join(" ")}`;
  }
  return keys[0] ?? "";
};

export const createHtmlTag = <Tag extends ElementType | "ndlaembed" | "math">({
  tag,
  data,
  children = "",
  bailOnEmpty,
  shorthand,
}: CreateHtmlTag<Tag>): string => {
  if (bailOnEmpty && (!data || Object.keys(data).length === 0)) {
    return children;
  }
  if (shorthand && !children) {
    return `<${tag}${stringifyAttributes<Tag>(data)}/>`;
  }
  return `<${tag}${stringifyAttributes<Tag>(data)}>${children}</${tag}>`;
};
