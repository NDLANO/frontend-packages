import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '@ndla/editor';

const FetchArticle = React.memo((({ useComponent, sanityContent, sanityClient, sanityConfig }) => {
    const FetchComponents = React.lazy(() => import(`./Examples/${useComponent}`));
    return (
      <Suspense fallback={<Spinner />}>
        <FetchComponents
          tabInherited={sanityContent && {
            title: 'Beskrivelse',
            content: <div>{sanityContent}</div>,
          }}
          sanityClient={sanityClient}
          sanityConfig={sanityConfig}
        />
      </Suspense>
    );
  }));

FetchArticle.propTypes = {
  useComponent: PropTypes.string,
  sanityContent: PropTypes.shape({}),
};

export default FetchArticle;