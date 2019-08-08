import React from 'react';
import PropTypes from 'prop-types';
import { ArticleByline } from '@ndla/ui';

const ArticleBylineExample = ({ useRealText, additional }) => {
  return (
    <ArticleByline
      published={useRealText ? '24.04.2018' : '[dato]'}
      additional={additional}
    />
  );
};

ArticleBylineExample.propTypes = {
  useRealText: PropTypes.bool,
  additional: PropTypes.bool,
};

ArticleBylineExample.defaultProps = {
  useRealText: false,
  additional: false,
};

export default ArticleBylineExample;
