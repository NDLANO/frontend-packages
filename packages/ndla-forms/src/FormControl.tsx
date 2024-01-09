/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  ComponentPropsWithRef,
  ElementType,
  HTMLAttributes,
  Ref,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import styled from "@emotion/styled";
import { composeRefs } from "@ndla/util";

type Merge<T, P> = P & Omit<T, keyof P>;

type PropGetter<T extends ElementType = ElementType, P = {}> = (
  props?: Merge<ComponentPropsWithRef<T>, P>,
  ref?: Ref<any> | RefObject<any>,
) => Merge<ComponentPropsWithRef<T>, P>;

export interface FormControlOptions {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
}

export interface FormControlProps extends FormControlOptions {
  id: string;
}

const StyledFormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

type FormControlContextType = ReturnType<typeof useFormControlProvider>;

const useFormControlProvider = ({ id: idProp, isRequired, isDisabled, isInvalid }: FormControlProps) => {
  const id = `field-${idProp}`;
  const labelId = `${id}-label`;
  const errorTextId = `${id}-error-message`;
  const helpTextId = `${id}-helper`;

  const [hasErrorText, setHasErrorText] = useState(false);
  const [hasHelpText, setHasHelpText] = useState(false);

  const getHelpTextProps = useCallback<PropGetter>(
    (props = {}, forwardedRef = null) => {
      return {
        id: helpTextId,
        ...props,
        ref: composeRefs(forwardedRef, (node) => {
          if (!node) return;
          setHasHelpText(true);
        }),
      };
    },
    [helpTextId],
  );

  const getLabelProps = useCallback<PropGetter>(
    (props = {}, forwardedRef = null) => {
      return {
        ...props,
        ref: forwardedRef,
        "data-disabled": isDisabled,
        "data-invalid": isInvalid,
        id: props.id !== undefined ? props.id : labelId,
        htmlFor: props.htmlFor !== undefined ? props.htmlFor : id,
      };
    },
    [id, isDisabled, isInvalid, labelId],
  );

  const getErrorMessageProps = useCallback<PropGetter>(
    (props = {}, forwardedRef = null) => {
      return {
        id: errorTextId,
        ...props,
        ref: composeRefs(forwardedRef, (node) => {
          if (!node) return;
          setHasErrorText(true);
        }),
        "aria-live": "polite",
      };
    },
    [errorTextId],
  );

  return {
    isRequired: !!isRequired,
    isDisabled: !!isDisabled,
    isInvalid: !!isInvalid,
    hasErrorText,
    setHasErrorText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    errorTextId,
    helpTextId,
    getHelpTextProps,
    getErrorMessageProps,
    getLabelProps,
  };
};

const FormControlContext = createContext<FormControlContextType | undefined>(undefined);

/**
 * Form control component inspired by chakra-ui. Allows for easy composition of form fields.
 */
export const FormControl = ({
  children,
  id,
  isDisabled,
  isInvalid,
  isRequired,
  ...rest
}: HTMLAttributes<HTMLDivElement> & FormControlProps) => {
  const context = useFormControlProvider({
    id,
    isDisabled,
    isInvalid,
    isRequired,
  });
  return (
    <FormControlContext.Provider value={context}>
      <StyledFormControl {...rest}>{children}</StyledFormControl>
    </FormControlContext.Provider>
  );
};

export const useFormControlContext = () => {
  const context = useContext(FormControlContext);
  return context;
};

export interface UseFormControlProps extends FormControlOptions {
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  "aria-describedby"?: string;
}

export const useFormControlProps = ({
  id,
  disabled,
  required,
  isDisabled,
  isInvalid,
  isRequired,
  ...rest
}: UseFormControlProps) => {
  const field = useFormControlContext();
  const labelIds = rest["aria-describedby"] ? [rest["aria-describedby"]] : [];
  if (field?.hasErrorText && field?.isInvalid) {
    labelIds.push(field.errorTextId);
  }
  if (field?.hasHelpText) {
    labelIds.push(field.helpTextId);
  }

  return {
    ...rest,
    "aria-describedby": labelIds.join(" ") || undefined,
    id: id ?? field?.id,
    isDisabled: disabled ?? field?.isDisabled,
    isRequired: required ?? field?.isRequired,
    isInvalid: isInvalid ?? field?.isInvalid,
  };
};

export const useFormControl = (props: UseFormControlProps) => {
  const { isDisabled, isInvalid, isRequired, ...rest } = useFormControlProps(props);
  return {
    ...rest,
    disabled: isDisabled,
    required: isRequired,
    "aria-invalid": isInvalid ? true : undefined,
    "aria-required": isRequired ? true : undefined,
  };
};
