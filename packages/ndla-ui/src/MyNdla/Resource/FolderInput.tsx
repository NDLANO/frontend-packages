/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { IconButtonV2 } from "@ndla/button";
import { spacing } from "@ndla/core";
import { InputContainer, FieldErrorMessage, InputV3, FieldHelper, FormControl, Label } from "@ndla/forms";
import { Spinner } from "@ndla/icons";
import { Cross } from "@ndla/icons/action";
import { Done } from "@ndla/icons/editor";
import { composeRefs } from "@ndla/util";

interface Props {
  loading?: boolean;
  onClose?: () => void;
  onSave: () => void;
  error?: string;
  label: string;
}

const StyledSpinner = styled(Spinner)`
  margin: ${spacing.small};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xxsmall};
  padding-right: ${spacing.xsmall};
`;

const FolderInput = forwardRef<HTMLInputElement, Props & ComponentPropsWithRef<"input">>(
  ({ loading, label, error, onClose, onSave, ...rest }, ref) => {
    const { t } = useTranslation();
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (isMobile) {
        inputRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, []);

    return (
      <FormControl id="folder-name" isRequired isInvalid={!!error}>
        <Label visuallyHidden>{label}</Label>
        <FieldErrorMessage>{error}</FieldErrorMessage>
        <InputContainer>
          <InputV3 autoComplete="off" disabled={loading} ref={composeRefs(ref, inputRef)} {...rest} />
          <Row>
            {!loading ? (
              <>
                {!error && (
                  <IconButtonV2
                    variant={"ghost"}
                    colorTheme="light"
                    tabIndex={0}
                    aria-label={t("save")}
                    title={t("save")}
                    size="small"
                    onClick={onSave}
                  >
                    <Done />
                  </IconButtonV2>
                )}
                <IconButtonV2 aria-label={t("close")} title={t("close")} size="small" variant="ghost" onClick={onClose}>
                  <Cross />
                </IconButtonV2>
              </>
            ) : (
              <FieldHelper>
                <StyledSpinner size="normal" aria-label={t("loading")} />
              </FieldHelper>
            )}
          </Row>
        </InputContainer>
      </FormControl>
    );
  },
);

export default FolderInput;
