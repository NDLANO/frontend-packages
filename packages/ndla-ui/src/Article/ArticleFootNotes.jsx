/*
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FootNoteShape } from '../shapes';

const citeDetailString = description => (description ? `${description}. ` : '');

const FootNote = ({ footNote }) => (
  <li className="c-footnotes__item">
    <cite className="c-footnotes__cite" id={`note${footNote.ref}`}>
      <sup>
        <a href={`#ref${footNote.ref}`} target="_self">
          {footNote.ref}
        </a>
      </sup>
      {`«${footNote.title}». ${footNote.authors.join(' ')}. ${citeDetailString(
        footNote.edition,
      )}${citeDetailString(footNote.publisher)}${footNote.year}. `}
      {footNote.url ? (
        <a href={footNote.url}>
          {footNote.url}
          {'.'}
        </a>
      ) : null}
    </cite>
  </li>
);

FootNote.propTypes = {
  footNote: FootNoteShape.isRequired,
};

const ArticleFootNotes = ({ footNotes, ...rest }) => (
  <ol className="c-footnotes">
    {footNotes.map(footNote => (
      <FootNote key={footNote.ref} footNote={footNote} {...rest} />
    ))}
  </ol>
);

ArticleFootNotes.propTypes = {
  footNotes: PropTypes.arrayOf(FootNoteShape).isRequired,
};

export default ArticleFootNotes;
