/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentType } from 'react';
import { ControlProps, OptionProps, MenuProps, IndicatorsContainerProps } from 'react-select';

export type SingleValue = Option | null;
export type MultiValue = readonly Option[];

export type Option = {
  value: string;
  label: string;
};

export type ControlPropsType<T extends boolean> = ControlProps<Option, T>;
export type OptionPropsType<T extends boolean> = OptionProps<Option, T>;
export type MenuPropsType<T extends boolean> = MenuProps<Option, T>;
export type IndicatorsContainerPropsType<T extends boolean> = IndicatorsContainerProps<Option, T>;

export type ControlComponentType<T extends boolean> = ComponentType<ControlPropsType<T>>;
export type OptionComponentType<T extends boolean> = ComponentType<OptionPropsType<T>>;
export type MenuComponentType<T extends boolean> = ComponentType<MenuPropsType<T>>;
