/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as React from 'react';
import styled from '@emotion/styled';
import { colors, spacing, mq } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { ReactNode } from 'react';

const StyledErrorMessage = styled.article`
  text-align: center;
  a {
    color: ${colors.brand.primary};
  }

  h1 {
    margin-top: 0;
  }
`;

const IllustrationWrapper = styled('div')(
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

const CustomElementWrapper = styled.div`
  margin: ${spacing.large} 0;
`;

interface Props {
  messages: {
    title: string;
    description?: string;
    linksTitle?: string;
    back?: string;
    goToFrontPage?: string;
  };
  illustration?: {
    url: string;
    altText: string;
  };
  illustrationElement?: ReactNode;
  customElement?: ReactNode;
}
export const ErrorMessage: React.FunctionComponent<Props> = ({
  children,
  messages,
  illustration,
  illustrationElement,
  customElement,
}) => (
  <StyledErrorMessage>
    {illustration && (
      <IllustrationWrapper>
        <img src={illustration.url} alt={illustration.altText} />
      </IllustrationWrapper>
    )}
    {illustrationElement && <IllustrationWrapper>{illustrationElement}</IllustrationWrapper>}
    <h1>{messages.title}</h1>
    {messages.description && <Description>{messages.description}</Description>}
    {customElement && <CustomElementWrapper>{customElement}</CustomElementWrapper>}
    {messages.linksTitle && <h2>{messages.linksTitle}</h2>}
    {messages.back && typeof window !== 'undefined' && window.history.length > 1 && (
      <SafeLink to={`/#${encodeURI(messages.back)}`} onClick={() => window.history.back()}>
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
