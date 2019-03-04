/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as React from 'react';
import styled from 'react-emotion';
// @ts-ignore
import { colors, spacing, mq } from '@ndla/core';
import SafeLink from '../common/SafeLink';

const StyledErrorMessage = styled('article')`
  text-align: center;
  a {
    color: ${colors.brand.primary};
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

interface Props {
  messages: {
    title: string;
    description?: string;
    linksTitle?: string;
    back: string;
    goToFrontPage: string;
  };
  illustration: {
    url: string;
    altText: string;
  };
}
export const ErrorMessage: React.FunctionComponent<Props> = ({
  children,
  messages,
  illustration,
}) => (
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

export default ErrorMessage;
