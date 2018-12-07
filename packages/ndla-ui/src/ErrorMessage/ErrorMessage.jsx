/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { colors, spacing, mq } from '@ndla/core';
import SafeLink from '../common/SafeLink';

const StyledErrorMessage = styled('article')`
  text-align: center;
  a {
    ${colors.brand.primary};
  }

  h1 {
    margin-top: 0;
  }
`;

const Illustration = styled('img')(
  mq.tablet({
    marginBottom: spacing.normal,
    marginTop: [null, spacing.large],
  }),
);

const Description = styled('p')(
  mq.tablet({
    marginBottom: [spacing.normal, spacing.large],
  }),
);

export const ErrorMessage = ({ children, messages, illustration }) => (
  <StyledErrorMessage>
    <Illustration src={illustration.url} alt={illustration.altText} />
    <h1>{messages.title}</h1>
    <Description>{messages.description}</Description>
    {messages.linksTitle && <h2>{messages.linksTitle}</h2>}
    {messages.back &&
      typeof window !== 'undefined' &&
      window.history.length > 1 && (
        <SafeLink
          to={`/#${encodeURI(messages.back)}`}
          onClick={() => window.history.back()}>
          {messages.back}
        </SafeLink>
      )}
    {messages.goToFrontPage && (
      <div css={{ marginTop: spacing.xsmall }}>
        <SafeLink to="/">{messages.goToFrontPage}</SafeLink>
      </div>
    )}
    {children}
  </StyledErrorMessage>
);

ErrorMessage.propTypes = {
  children: PropTypes.node,
  messages: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    goToFrontPage: PropTypes.string,
    linksTitle: PropTypes.string,
    back: PropTypes.string,
  }),
  illustration: PropTypes.shape({
    url: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  }),
};

export default ErrorMessage;
