/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { injectT } from '@ndla/i18n';
import { WithInjectedTProps } from '@ndla/i18n/lib/injectT';
// @ts-ignore
import { Code } from '@ndla/icons/editor';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';
// @ts-ignore
import { Wrapper, Header, HeaderColumn, HeaderRow } from './style';
import { ICodeLangugeOption, languageOptions } from './languages';

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

const CodeBlockEditor = ({
  onSave,
  onAbort,
  t,
  content = null,
}: WithInjectedTProps<Props>) => {
  const [defaultLang] = languageOptions;
  const [codeContent, setCodeContent] = useState({
    code: content ? content.code : '',
    title: content ? content.title : defaultLang.title,
    format: content ? content.format : defaultLang.format,
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const selectedLanguage = languageOptions.find(
      (item: ICodeLangugeOption) => item.title === value,
    );
    if (selectedLanguage) {
      const { format } = selectedLanguage;
      setCodeContent({ ...codeContent, title: value, format });
    }
  };

  const abort = () => {
    setCodeContent({
      code: '',
      title: defaultLang.title,
      format: defaultLang.format,
    });
    onAbort();
  };

  const save = () => {
    const selectedLanguage = languageOptions.find(
      (item: ICodeLangugeOption) => item.title === codeContent.title,
    );
    if (selectedLanguage) {
      const { title, format } = selectedLanguage;
      onSave({ ...codeContent, title, format });
    }
  };
  return (
    <Wrapper>
      <Header>
        <HeaderColumn>
          {t('codeEditor.title')}
          <br />
          <b>
            <Code />
            &nbsp;{t('codeEditor.subtitle')}
          </b>
        </HeaderColumn>
        <HeaderRow>
          <span className="label">{t('codeEditor.languageSelect')}:&nbsp;</span>
          <select onChange={handleChange} value={codeContent.title}>
            {languageOptions.map((item: ICodeLangugeOption) => (
              <option key={`${item.title}`} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </HeaderRow>
        <HeaderRow>
          <Button onClick={save}>
            <span>{t('codeEditor.save')}</span>
          </Button>
          &nbsp;
          <Button outline onClick={abort}>
            <span>{t('codeEditor.abort')}</span>
          </Button>
        </HeaderRow>
      </Header>
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
