/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import { FootNoteShape } from '../shapes';


const FootNote = ({ footNote, editionTitle, publisherTitle }) =>
  <li className="article_foot-note">
    <cite>{`${footNote.title} (${footNote.year}), ${footNote.authors.join(' ')} ${editionTitle}: ${footNote.edition}, ${publisherTitle}: ${footNote.publisher}`}</cite>
  </li>;

FootNote.propTypes = {
  refNr: PropTypes.string.isRequired,
  footNote: FootNoteShape.isRequired,
  editionTitle: PropTypes.string.isRequired,
  publisherTitle: PropTypes.string.isRequired,
};


const ArticleFootNotes = ({ footNotes, ...rest }) => (
  <ol className="article_foot-notes">
    {
    Object.keys(footNotes).map(key => (
      <FootNote key={key} refNr={key.replace('ref_', '')} {...rest} />
    ))
    }
  </ol>
);

ArticleFootNotes.propTypes = {
  footNotes: PropTypes.object,
  editionTitle: PropTypes.string.isRequired,
  publisherTitle: PropTypes.string.isRequired,
};

ArticleFootNotes.defaultProps = {
  editionTitle: 'Edition',
  publisherTitle: 'Publisher',
};

export default ArticleFootNotes;
