/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ChangeEvent, createRef, useState } from 'react';
import Editor from 'react-simple-code-editor';
import { useTranslation } from 'react-i18next';
import { Code } from '@ndla/icons/editor';
import { ButtonV2 } from '@ndla/button';
// @ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { Wrapper, FlexContainer, FlexElement } from './style';
import { languageOptions, ICodeLangugeOption } from '../languageOptions';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-ini';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-lua';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-matlab';
import 'prismjs/components/prism-nsis';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-vhdl';
import 'prismjs/components/prism-bash';

const hightlightWithLineNumbers = (input: string, language: string) =>
  highlight(input, language)
    .split('\n')
    .map((line: string, i: number) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
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

const StyledInput = styled.input`
  ${fonts.sizes(18, 1.15)};
  border: 1px solid ${colors.brand.greyDark};
  font-family: ${fonts.sans};
  font-weight: ${fonts.weight.normal};
  min-height: 1.5em;
  padding: 0.4em 1.4em 0.4em 1em;
`;

const StyledSelect = styled.select`
  appearance: none;
  background: ${colors.white};
  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20fill%3D%22%23555555%22%20%0A%09%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%22-261%20145.2%2024%2024%22%20style%3D%22enable-background%3Anew%20-261%20145.2%2024%2024%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cpath%20d%3D%22M-245.3%2C156.1l-3.6-6.5l-3.7%2C6.5%20M-252.7%2C159l3.7%2C6.5l3.6-6.5%22%2F%3E%0A%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: 100%;
  border: 1px solid ${colors.brand.greyDark};
  color: ${colors.brand.greyDark};
  line-height: 1.15;
  min-height: 1.5em;
  padding: 0.4em 1.4em 0.4em 1em;
`;

interface CodeContentState {
  code: string;
  title: string;
  format: string;
}

const CodeBlockEditor = ({ onSave, onAbort, content = null }: Props) => {
  const { t } = useTranslation();
  const [defaultLang] = languageOptions;
  const [codeContent, setCodeContent] = useState<CodeContentState>({
    code: content ? content.code : '',
    title: content ? content.title : defaultLang.title,
    format: content ? content.format : defaultLang.format,
  });

  const titleRef = createRef<HTMLInputElement>();

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const selectedLanguage = languageOptions.find((item: ICodeLangugeOption) => item.format === value);
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
    const selectedLanguage = languageOptions.find((item: ICodeLangugeOption) => item.format === codeContent.format);
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
            <Code aria-hidden="true" />
            &nbsp;{t('codeEditor.subtitle')}
          </b>
        </FlexElement>
        <FlexElement>
          <span className="label">{t('codeEditor.titleLabel')}</span>
          <StyledInput ref={titleRef} type="text" defaultValue={codeContent.title} />
        </FlexElement>
        <FlexElement>
          <span className="label">{t('codeEditor.languageSelect')}</span>
          <StyledSelect onChange={handleChangeLanguage} value={codeContent.format}>
            {languageOptions.map((item: ICodeLangugeOption) => (
              <option key={`${item.title}`} value={item.format}>
                {item.title}
              </option>
            ))}
          </StyledSelect>
        </FlexElement>
        <FlexElement
          css={{
            display: 'flex',
            gap: spacing.xxsmall,
            'align-items': 'flex-end',
            'justify-content': 'flex-end',
            'margin-bottom': '1px',
          }}>
          <ButtonV2 onClick={save}>
            <span>{t('codeEditor.save')}</span>
          </ButtonV2>
          <ButtonV2 variant="outline" onClick={abort}>
            <span>{t('codeEditor.abort')}</span>
          </ButtonV2>
        </FlexElement>
      </FlexContainer>
      <Editor
        className="editor"
        value={codeContent.code}
        onValueChange={(code) => {
          setCodeContent({ ...codeContent, code });
        }}
        highlight={(code) =>
          hightlightWithLineNumbers(code, languages[codeContent.format] ? languages[codeContent.format] : '')
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

export default CodeBlockEditor;
