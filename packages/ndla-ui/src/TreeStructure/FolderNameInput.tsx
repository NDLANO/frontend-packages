import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Spinner } from '@ndla/editor';
import { spacing, colors, misc } from '@ndla/core';

const InputWrapper = styled.div<{ loading?: boolean }>`
  display: flex;
  border: 1px solid ${({ loading }) => loading ? colors.brand.lighter : colors.brand.primary};
  border-style: dashed;
  border-radius: ${misc.borderRadius};
  padding: ${spacing.small};
  input {
    flex-shrink: 1;
    border: 0;
    outline: none;
    padding: ${spacing.small};
    background: transparent;
  }
`;

interface FolderNameInputProps {
  onSaveNewFolder: (props: { value: string; cancel: boolean }) => void;
  loading?: boolean;
}

const FolderNameInput = ({ onSaveNewFolder, loading }: FolderNameInputProps) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  return (
    <InputWrapper loading={loading}>
      <input
        disabled={loading}
        ref={inputRef}
        value={value}
        onBlur={() => onSaveNewFolder({ value, cancel: true })}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter' || e.key === 'Tab' || e.key === 'Escape') {
            onSaveNewFolder({ value, cancel: e.key === 'Escape' });
            e.preventDefault();
          }
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const target = e.target as HTMLInputElement;
          setValue(target.value);
        }}
      />
      {loading && <Spinner size='xsmall' />}
    </InputWrapper>
  );
};

export default FolderNameInput;
