/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLProps, MutableRefObject, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { spacing, spacingUnit, fonts, colors } from '@ndla/core';
import { Download, InformationOutline } from '@ndla/icons/common';
import Tooltip from '@ndla/tooltip';
import { createUniversalPortal } from '@ndla/util';
import { File, FileListMessages } from './FileListEditor';

interface InputComponentProps extends Omit<HTMLProps<HTMLInputElement>, 'as'> {
  forwardedRef: MutableRefObject<HTMLUListElement | null>;
  usePortal?: boolean;
  childIndex: number;
}
const InputComponent = ({ usePortal, forwardedRef, childIndex, ...rest }: InputComponentProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (usePortal && inputRef.current) {
      const element = forwardedRef.current?.childNodes[childIndex].firstChild as HTMLDivElement | undefined;
      const rect = element?.getBoundingClientRect();
      if (rect) {
        inputRef.current.style.top = `${rect.top + window.scrollY - 15}px`;
        inputRef.current.style.left = `${rect.left + spacingUnit * 0.75}px`;
        inputRef.current.style.width = `${rect.width - spacingUnit}px`;
      }
    }
    inputRef.current?.focus();
    inputRef.current?.select();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!usePortal) {
    return <StyledInput ref={inputRef} {...rest} />;
  }
  return createUniversalPortal(<StyledInput ref={inputRef} {...rest} />, 'body');
};

const getButtonComponent = (file: File, isMissing: boolean, messages: FileListMessages) => {
  if (isMissing) {
    return (
      <Tooltip tooltip={messages.missingFileTooltip}>
        <LinkButton
          type="button"
          css={css`
            color: red;
          `}
        >
          {file.title === '' ? messages.missingTitle : file.title}
          {` `}
          <span>
            ({file.type}) {<InformationOutline aria-hidden="true" />}
          </span>
        </LinkButton>
      </Tooltip>
    );
  } else {
    return (
      <div
        css={css`
          max-width: 100%;
        `}
      >
        <Tooltip tooltip={`${file.title} (${file.type.toUpperCase()})`}>
          <LinkButton type="button" onClick={() => window.open(file.url)}>
            {file.title === '' ? messages.missingTitle : file.title}
            {` `}
            <span>({file.type})</span>
          </LinkButton>
        </Tooltip>
      </div>
    );
  }
};

interface Props extends HTMLProps<HTMLInputElement> {
  editMode: boolean;
  useRef: MutableRefObject<HTMLUListElement | null>;
  isMissing: boolean;
  file: File;
  value: string;
  childIndex: number;
  usePortal?: boolean;
  type: string;
  placeholder: string;
  messages: FileListMessages;
}
const FileNameInput = ({ editMode, useRef, file, isMissing, messages, ...rest }: Props) => {
  if (editMode)
    return (
      <div>
        <InputComponent {...rest} forwardedRef={useRef} />
      </div>
    );
  return (
    <div>
      <div aria-hidden="true">
        <Download />
      </div>
      {getButtonComponent(file, isMissing, messages)}
    </div>
  );
};

const StyledInput = styled.input`
  height: ${spacing.medium};
  position: absolute;
  z-index: 9999;
  ${fonts.sizes(18, 1.1)};
  font-weight: ${fonts.weight.normal};
  font-family: ${fonts.sans};
`;

const LinkButton = styled.button`
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-size: inherit;
  margin: 0 0 0 ${spacing.xsmall};
  padding: 0;
  color: ${colors.brand.primary};
  box-shadow: inset 0 -1px;
  border: 0;
  background: none;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  transform: translateY(-2px);
  span {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    box-shadow: none;
  }
`;

export default FileNameInput;
