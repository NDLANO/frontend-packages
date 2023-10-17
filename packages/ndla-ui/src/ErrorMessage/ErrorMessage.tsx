/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors, spacing, breakpoints } from '@ndla/core';
import SafeLink from '@ndla/safelink';

const StyledErrorMessage = styled.article`
  text-align: center;
  a {
    color: ${colors.brand.primary};
  }

  h1 {
    margin-top: 0;
  }
`;

const IllustrationWrapper = styled('div')`
  margin-bottom: ${spacing.normal};
  @media (min-width: ${breakpoints.tablet}) {
    margin-top: ${spacing.large};
  }
`;

const Description = styled('p')`
  margin-bottom: ${spacing.normal};
  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${spacing.large};
  }
`;

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
    logInFailed?: string;
  };
  illustration?: {
    url: string;
    altText: string;
  };
  illustrationElement?: ReactNode;
  customElement?: ReactNode;
  children?: ReactNode;
}
export const ErrorMessage = ({ children, messages, illustration, illustrationElement, customElement }: Props) => (
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
    {messages.back && (
      <SafeLink to={`/#${encodeURI(messages.back)}`} onClick={() => window.history.back()}>
        {messages.back}
      </SafeLink>
    )}
    {messages.goToFrontPage && (
      <div css={{ marginTop: spacing.xsmall }}>
        <SafeLink to="/">{messages.goToFrontPage}</SafeLink>
      </div>
    )}
    {messages.logInFailed && (
      <div css={{ marginTop: spacing.xsmall }}>
        <SafeLink to="/minndla">{messages.logInFailed}</SafeLink>
      </div>
    )}
    {children}
  </StyledErrorMessage>
);

export default ErrorMessage;
