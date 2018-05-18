import React from 'react';
import { ArticleTabs } from 'ndla-tabs';

const TranslationBox = props => (
  <div className="c-translation-box">
    <div className="c-bodybox c-bodybox--translation">
      <ArticleTabs {...props} />
    </div>
  </div>
);

export default TranslationBox;
