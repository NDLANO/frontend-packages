/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { SearchLine } from "@ndla/icons/common";
import { Input, FormPill, InputProps } from ".";
//@ts-ignore
import { getFieldValue } from "./dropdownHelper";
import { Spinner } from "./Spinner";

type StringObject<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
interface Props<T extends object> extends InputProps {
  multiSelect?: boolean;
  removeItem: (id: string) => void;
  idField?: keyof T;
  labelField?: keyof StringObject<T>;
  name?: string;
  loading?: boolean;
  values?: T[];
}

const StyledSpinner = styled(Spinner)`
  margin: 0;
`;

const DropdownInput = <T extends object>({
  multiSelect,
  loading = false,
  values = [],
  removeItem,
  idField,
  labelField,
  ...rest
}: Props<T>) => (
  <Input
    iconRight={loading ? <StyledSpinner data-size="normal" aria-hidden="true" /> : <SearchLine aria-hidden="true" />}
    {...rest}
    tags={
      multiSelect &&
      values.map((value) => (
        <FormPill
          //@ts-ignore
          label={labelField ? value[labelField] : ""}
          //@ts-ignore
          key={getFieldValue(value, idField)}
          //@ts-ignore
          id={getFieldValue(value, idField)}
          onClick={removeItem}
        />
      ))
    }
  />
);

export default DropdownInput;
