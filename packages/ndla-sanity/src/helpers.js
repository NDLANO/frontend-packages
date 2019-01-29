import React from 'react';

export const serializers = {
    types: {
      code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
      ),
      hr: () => (
        <hr />
      ),
    },
    
  }

export const getArticleQuery = pageId => (
  `*[_type == "designmanualDocuments" && _id == "${pageId}"]{title, lead, content, searchBlock, 'imageUrl': image.asset->url, 'reactComponent': useComponent->{name}}[0]`
);