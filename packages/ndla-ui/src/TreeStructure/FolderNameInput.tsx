import React, { useState, useRef, useEffect } from 'react';

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
    <div>
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
    </div>
  );
};

export default FolderNameInput;
