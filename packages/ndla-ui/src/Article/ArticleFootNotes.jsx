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

const FootNote = ({ footNote, messages, refNr }) => (
  <li className="c-footnote__item">
    <cite className="c-footnote__cite">{`${footNote.title} (${
      footNote.year
    }), ${footNote.authors.join(' ')} ${messages.edition}: ${
      footNote.edition
    }, ${messages.publisher}: ${footNote.publisher}`}</cite>
    &nbsp;<a href={`#ref_${refNr}_sup`} name={`ref_${refNr}_cite`}>
      &#8617;
    </a>
  </li>
);

FootNote.propTypes = {
  refNr: PropTypes.string.isRequired,
  footNote: FootNoteShape.isRequired,
  messages: PropTypes.shape({
    edition: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
  }),
};

const ArticleFootNotes = ({ footNotes, ...rest }) => (
  <ol className="c-footnotes">
    {Object.keys(footNotes).map(key => (
      <FootNote
        key={key}
        refNr={key.replace('ref_', '')}
        footNote={footNotes[key]}
        {...rest}
      />
    ))}
  </ol>
);

ArticleFootNotes.propTypes = {
  footNotes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  messages: PropTypes.shape({
    edition: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
  }),
};

export default ArticleFootNotes;
