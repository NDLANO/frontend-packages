import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SafeLink from '../common/SafeLink';
import { Document } from '../icons';
import { ResourceShape } from '../shapes';

const classes = new BEMHelper({
  name: 'related-articles',
  prefix: 'c-',
});

const RelatedArticles = ({ resources }) =>
  <div>
    <h2 {...classes('component-title')}>Relaterte artikler</h2>
    <div {...classes('')}>
      {resources.filter((item, index) => index < 2).map(item =>
        <div {...classes('item')}>
          <h3 {...classes('title')}>
            <Document className="c-icon--medium" />
            <SafeLink to={() => {}} {...classes('link')}>
              {item.title}
            </SafeLink>
          </h3>
          <p {...classes('description')}>
            {item.introduction}
          </p>
        </div>,
      )}
    </div>
  </div>;

RelatedArticles.propTypes = {
  resources: PropTypes.arrayOf(ResourceShape),
};

export default RelatedArticles;
