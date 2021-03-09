/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { createRef, FC, useState } from 'react';
import Editor from 'react-simple-code-editor';
import { injectT, tType } from '@ndla/i18n';
import { Code } from '@ndla/icons/editor';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { Wrapper, FlexContainer, FlexElement } from './style';
import { ICodeLangugeOption, languageOptions } from '../languages';

const hightlightWithLineNumbers = (input: string, language: string) =>
  highlight(input, language)
    .split('\n')
    .map(
      (line: string, i: number) =>
        `<span class='editorLineNumber'>${i + 1}</span>${line}`,
    )
    .join('\n');

type Props = {
  onSave: Function;
  onAbort: Function;
  content: {
    code: string;
    title: string;
    format: string;
  } | null;
};

export const getTitleFromFormat = (format: string) => {
  const selectedLanguage = languageOptions.find(
    (item: ICodeLangugeOption) => item.format === format,
  );
  if (selectedLanguage) {
    return selectedLanguage.title;
  }
  return;
};

const StyledInput = styled.input`
  ${fonts.sizes(18, 1.1)};
  font-weight: ${fonts.weight.normal};
  font-family: ${fonts.sans};
  padding: 0.4em 1.4em 0.4em 1em;
  min-height: 1.5em;
  border: 1px solid ${colors.brand.greyDark};
`;

interface CodeContentState {
  code: string;
  title: string;
  format: string;
}

const CodeBlockEditor: FC<Props & tType> = ({
  onSave,
  onAbort,
  t,
  content = null,
}) => {
  const [defaultLang] = languageOptions;
  const [codeContent, setCodeContent] = useState<CodeContentState>({
    code: content ? content.code : '',
    title: content ? content.title : defaultLang.title,
    format: content ? content.format : defaultLang.format,
  });

  const titleRef = createRef<HTMLInputElement>();

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;
    const selectedLanguage = languageOptions.find(
      (item: ICodeLangugeOption) => item.format === value,
    );
    if (selectedLanguage) {
      const { format } = selectedLanguage;
      setCodeContent((prev: CodeContentState) => {
        return { ...prev, title: value, format };
      });
    }
  };

  const abort = () => {
    onAbort();
  };

  const save = () => {
    const selectedLanguage = languageOptions.find(
      (item: ICodeLangugeOption) => item.format === codeContent.format,
    );
    if (selectedLanguage) {
      const titleValue = titleRef.current && titleRef.current.value;
      const { title, format } = selectedLanguage;
      onSave({ ...codeContent, title: titleValue || title, format });
    }
  };
  return (
    <Wrapper>
      <FlexContainer>
        <FlexElement>
          {t('codeEditor.title')}
          <br />
          <b>
            <Code />
            &nbsp;{t('codeEditor.subtitle')}
          </b>
        </FlexElement>
        <FlexElement>
          <span className="label">{t('codeEditor.languageSelect')}</span>
          <select onChange={handleChangeLanguage} value={codeContent.format}>
            {languageOptions.map((item: ICodeLangugeOption) => (
              <option key={`${item.title}`} value={item.format}>
                {item.title}
              </option>
            ))}
          </select>
        </FlexElement>
        <FlexElement>
          <span className="label">{t('codeEditor.titleLabel')}</span>
          <StyledInput
            ref={titleRef}
            type="text"
            defaultValue={codeContent.title}
          />
        </FlexElement>
        <FlexElement
          css={{
            display: 'flex',
            gap: spacing.xxsmall,
            'align-items': 'flex-end',
            'justify-content': 'flex-end',
            'margin-bottom': '1px',
          }}>
          <Button onClick={save}>
            <span>{t('codeEditor.save')}</span>
          </Button>
          <Button outline onClick={abort}>
            <span>{t('codeEditor.abort')}</span>
          </Button>
        </FlexElement>
      </FlexContainer>
      <Editor
        className="editor"
        value={codeContent.code}
        onValueChange={code => {
          setCodeContent({ ...codeContent, code });
        }}
        highlight={code =>
          hightlightWithLineNumbers(
            code,
            languages[codeContent.format] ? languages[codeContent.format] : '',
          )
        }
        padding={10}
        textareaId="codeArea"
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 18,
          outline: 0,
        }}
      />
    </Wrapper>
  );
};

export default injectT(CodeBlockEditor);
