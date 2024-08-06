/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { Text } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";

// TODO: This has not been redesignet yet. This is just a rewrite of the previous design in panda

const StyledErrorMessage = styled("article", {
  base: {
    textAlign: "center",
    "& a": {
      color: "text.strong",
    },
    "& h1": {
      marginTop: "0",
    },
  },
});

const IllustrationWrapper = styled("div", {
  base: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "medium",
    tablet: {
      marginTop: "xxlarge",
    },
  },
});

const Description = styled(Text, {
  base: {
    marginBottom: "medium",
    tablet: {
      marginBottom: "xxlarge",
    },
  },
});

const CustomElementWrapper = styled("div", {
  base: {
    marginBlock: "xxlarge",
  },
});

const MessageWrapper = styled("div", {
  base: {
    marginTop: "3xsmall",
  },
});

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
      <MessageWrapper>
        <SafeLink to="/">{messages.goToFrontPage}</SafeLink>
      </MessageWrapper>
    )}
    {messages.logInFailed && (
      <MessageWrapper>
        <SafeLink to="/minndla">{messages.logInFailed}</SafeLink>
      </MessageWrapper>
    )}
    {children}
  </StyledErrorMessage>
);

export default ErrorMessage;
