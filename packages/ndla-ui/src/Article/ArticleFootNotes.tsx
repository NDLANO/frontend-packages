/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { FootNote as FootNoteType } from '../types';

const citeDetailString = (description: string | undefined) => (description ? `${description}. ` : '');

type FootNoteProps = {
  footNote: FootNoteType;
};

const Cite = styled.cite`
  display: flex;
  gap: ${spacing.small};
  a {
    box-shadow: none;
    text-decoration: underline;
    text-underline-offset: ${spacing.xxsmall};
    &:hover,
    &:focus-visible {
      text-decoration: none;
    }
  }
`;

const FootNote = ({ footNote }: FootNoteProps) => (
  <li>
    <Cite id={`note${footNote.ref}`}>
      <a href={`#ref${footNote.ref}`} target="_self">
        {footNote.ref}
      </a>
      {`«${footNote.title}». ${footNote.authors.join(' ')}. ${citeDetailString(footNote.edition)}${citeDetailString(
        footNote.publisher,
      )}${footNote.year}. `}
      {footNote.url ? (
        <a href={footNote.url}>
          {footNote.url}
          {'.'}
        </a>
      ) : null}
    </Cite>
  </li>
);

type ArticleFootNotesProps = {
  footNotes: Array<FootNoteType>;
};

const FootnoteList = styled.ol`
  margin: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: ${spacing.small};
  color: ${colors.text.light};
`;

const ArticleFootNotes = ({ footNotes }: ArticleFootNotesProps) => (
  <FootnoteList>
    {footNotes.map((footNote) => (
      <FootNote key={footNote.ref} footNote={footNote} />
    ))}
  </FootnoteList>
);

export default ArticleFootNotes;
