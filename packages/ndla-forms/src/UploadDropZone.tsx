/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsxImportSource @emotion/react */
import { ReactNode, useEffect, useState, useRef, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, spacing, fonts, misc, animations, stackOrder } from "@ndla/core";
import { Spinner } from "@ndla/icons";
import { CloudUploadOutline, ErrorWarningFill } from "@ndla/icons/editor";
import { getIllegalFiles } from "./filetypeHelper";

const SpinnerWrapper = styled.div`
  margin: -${spacing.small} 0;
  ${animations.fadeInScaled()};
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${stackOrder.offsetSingle};
  ${fonts.sizes(16, 1.3)};
  font-family: ${fonts.sans};
  font-weight: ${fonts.weight.normal};
  color: ${colors.text.primary};
  pointer-events: none;
  svg {
    width: ${spacing.large};
    height: ${spacing.large};
    color: ${colors.brand.tertiary};
    transition:
      transform 300ms cubic-bezier(0.2, 1.44, 0.53, 1),
      color 200ms ease;
  }
`;

const DropZone = styled.div<{ draggedOver?: boolean }>`
  margin: 0;
  padding: ${spacing.large};
  border: 3px dashed ${colors.brand.tertiary};
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: ${spacing.xsmall};

  input {
    content: "";
    display: block;
    position: absolute;
    background: ${colors.support.red};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    background: ${colors.brand.tertiary};
    top: ${spacing.small};
    right: ${spacing.small};
    left: ${spacing.small};
    bottom: ${spacing.small};
    border-radius: ${misc.borderRadius};
    opacity: ${(props) => (props.draggedOver ? "0.32" : "0.16")};
    transition: opacity 200ms ease;
  }
`;

const cssHover = css`
  ${DropZone} {
    &:before {
      opacity: 0.32;
    }
  }
  ${ContentWrapper} {
    color: ${colors.brand.primary};
    svg {
      color: ${colors.brand.primary};
      transform: scale(1.32) translateY(-3px);
    }
  }
`;

const cssLoading = css`
  ${DropZone} {
    &:before {
      opacity: 0.16 !important;
    }
  }
  ${ContentWrapper} {
    > {
      opacity: 0;
    }
  }
`;

const Wrapper = styled.div`
  margin: ${spacing.normal} 0 ${spacing.large};
  ${animations.fadeInBottom()};
  &:hover,
  &:focus-within {
    ${cssHover}
  }
`;

const InputField = styled.input`
  background: ${colors.brand.primary};
  border: 0;
  color: ${colors.white};
`;

const AlertMessages = styled.div`
  margin: -${spacing.large} 0 0;
  height: ${spacing.large};
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.sans};
  color: ${colors.support.red};
  ${animations.fadeInBottom()};
  ${fonts.sizes(14, 1.1)};
`;

interface Props {
  name: string;
  allowedFiles: string[];
  onAddedFiles: (files: File[], e: ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
  useIcon?: ReactNode;
  ariaLabel: string;
  errorMessage?: string;
  loading?: boolean;
  children: ReactNode;
}

const UploadDropZone = ({
  name,
  allowedFiles,
  onAddedFiles,
  multiple,
  useIcon,
  ariaLabel,
  errorMessage,
  loading,
  children,
}: Props) => {
  const { t } = useTranslation();
  const [draggedInside, setDraggedInside] = useState(false);
  const [error, setError] = useState<string>();
  const [errorTimer, setErrorTimer] = useState<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (errorTimer) {
        clearTimeout(errorTimer);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    const nativeFiles = e.target.files;

    if (nativeFiles) {
      const files = Array.from(nativeFiles);

      const illegalFiles = getIllegalFiles(files, allowedFiles);

      if (illegalFiles.length > 0) {
        const illegalFileTypes = files.map((file) => file.type.substr(file.type.indexOf("/") + 1)).toString();
        setError(errorMessage || t("fileTypesNotSupported", { fileTypes: illegalFileTypes }));
        if (errorTimer) {
          clearTimeout(errorTimer);
        }
        setErrorTimer(
          setTimeout(() => {
            setError(undefined);
          }, 5000),
        );
      } else {
        onAddedFiles(files, e);
        setError(undefined);
      }
    }

    setDraggedInside(false);
    e.target.value = "";
  };

  const onDragEnter = () => {
    setError(undefined);
    setDraggedInside(true);
  };

  const onDragLeave = () => {
    setDraggedInside(false);
  };

  return (
    <>
      <Wrapper css={[draggedInside && cssHover, loading && cssLoading]}>
        <DropZone ref={dropZoneRef}>
          <InputField
            type="file"
            name={name}
            aria-label={ariaLabel}
            accept={allowedFiles.toString()}
            multiple={multiple}
            onChange={onChangeField}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            ref={inputRef}
            disabled={loading}
          />
          <ContentWrapper aria-live="polite" aria-busy={loading}>
            {loading ? (
              <SpinnerWrapper aria-hidden="true">
                <Spinner />
              </SpinnerWrapper>
            ) : (
              <>
                {useIcon || <CloudUploadOutline aria-hidden="true" />}
                {children}
              </>
            )}
          </ContentWrapper>
        </DropZone>
      </Wrapper>
      {error && (
        <AlertMessages>
          <ErrorWarningFill aria-hidden="true" />
          {error}
        </AlertMessages>
      )}
    </>
  );
};

export default UploadDropZone;
