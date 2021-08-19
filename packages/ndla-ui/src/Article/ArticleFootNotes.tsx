/*
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { FootNote as FootNoteType } from '../types';

const citeDetailString = (description: string | undefined) => (description ? `${description}. ` : '');

type FootNoteProps = {
  footNote: FootNoteType;
};

const FootNote = ({ footNote }: FootNoteProps) => (
  <li className="c-footnotes__item">
    <cite className="c-footnotes__cite" id={`note${footNote.ref}`}>
      <sup>
        <a href={`#ref${footNote.ref}`} target="_self">
          {footNote.ref}
        </a>
      </sup>
      {`«${footNote.title}». ${footNote.authors.join(' ')}. ${citeDetailString(footNote.edition)}${citeDetailString(
        footNote.publisher,
      )}${footNote.year}. `}
      {footNote.url ? (
        <a href={footNote.url}>
          {footNote.url}
          {'.'}
        </a>
      ) : null}
    </cite>
  </li>
);

type ArticleFootNotesProps = {
  footNotes: Array<FootNoteType>;
};

const ArticleFootNotes = ({ footNotes }: ArticleFootNotesProps) => (
  <ol className="c-footnotes">
    {footNotes.map((footNote) => (
      <FootNote key={footNote.ref} footNote={footNote} />
    ))}
  </ol>
);

export default ArticleFootNotes;
