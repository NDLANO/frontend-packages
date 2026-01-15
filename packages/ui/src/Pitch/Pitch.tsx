/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { CardHeading, CardImage, CardRoot, Text } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { linkOverlay } from "@ndla/styled-system/patterns";
import { getPossiblyRelativeUrl } from "../utils/relativeUrl";

export interface Props {
  title: string;
  url: string;
  description?: string;
  metaImage: {
    url: string;
    alt: string;
  };
  path?: string;
}

const StyledCardHeading = styled(CardHeading, {
  base: {
    paddingBlockStart: "medium",
  },
});

const StyledText = styled(Text, {
  base: {
    paddingBlockEnd: "medium",
  },
});

const StyledCardRoot = styled(CardRoot, {
  base: {
    outline: "0px",
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    gap: "small",
  },
});

const StyledCardImage = styled(CardImage, {
  base: {
    aspectRatio: "16/9",
    height: "unset",
  },
});

export const Pitch = ({ title, url, metaImage, path, description }: Props) => {
  const href = getPossiblyRelativeUrl(url, path);

  return (
    <StyledCardRoot nonInteractive data-embed-type="pitch" asChild consumeCss>
      <div>
        <StyledCardHeading textStyle="heading.small" asChild consumeCss>
          <SafeLink to={href} unstyled css={linkOverlay.raw()}>
            {parse(title)}
          </SafeLink>
        </StyledCardHeading>
        {!!description && (
          <StyledText textStyle="body.xlarge" asChild consumeCss>
            <div>{parse(description)}</div>
          </StyledText>
        )}
        <StyledCardImage
          variant="rounded"
          src={metaImage.url}
          alt={metaImage.alt}
          sizes="480px"
          fallbackWidth={300}
          width={550}
          height={310}
        />
      </div>
    </StyledCardRoot>
  );
};
