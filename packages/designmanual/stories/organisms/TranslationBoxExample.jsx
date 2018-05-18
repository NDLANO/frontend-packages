import React, { Component } from 'react';
import { TranslationBox } from 'ndla-ui';
import { initArticleTabs } from 'ndla-article-scripts';

class TranslationBoxExample extends Component {
  componentDidMount() {
    initArticleTabs();
  }
  render() {
    return (
      <TranslationBox
        tabs={[
          {
            id: 'zh-s',
            title: 'Kinesisk forenklet',
            content: <p>Bilde innhold</p>,
          },
          {
            id: 'zh-t',
            title: 'Kinesisk tradisjonell',
            content: <p>Video innhold</p>,
          },
        ]}
      />
    );
  }
}

export default TranslationBoxExample;
