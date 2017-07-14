/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const ArticleIntroductionText = ({ text }) =>
  text
    ? <p>
        {text}
      </p>
    : null;

ArticleIntroductionText.propTypes = {
  text: PropTypes.string,
};

const ArticleIntroduction = ({ introduction }) => {
  if (!introduction) {
    return null;
  }

  return (
    <section className="article_introduction">
      <ArticleIntroductionText text={introduction} />
    </section>
  );
};

ArticleIntroduction.propTypes = {
  introduction: PropTypes.string,
};

export default ArticleIntroduction;
