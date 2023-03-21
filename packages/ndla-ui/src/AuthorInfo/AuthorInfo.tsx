/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import SafeLink from '@ndla/safelink';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
import Portrait from '../Portrait';

interface Props {
  authorName: string;
  authorRole: string;
  phone?: string;
  email?: string;
  image?: string;
}

const AuthorInfoSection = styled.section`
  display: flex;
  align-items: flex-start;
  padding-bottom: ${spacing.large};
  font-family: ${fonts.sans};
  p,
  a {
    margin: 0;
    ${mq.range({ until: breakpoints.tablet })} {
      ${fonts.sizes('14px', '22px')};
    }
  }
`;

const StyledPortrait = styled(Portrait)`
  margin-right: ${spacing.large};
  ${mq.range({ until: breakpoints.desktop })} {
    margin-right: ${spacing.medium};
    width: 7rem;
    height: 7rem;
    span {
      width: 7rem;
      height: 7rem;
    }
  }
  ${mq.range({ until: breakpoints.desktop })} {
    margin-right: ${spacing.small};
    width: 4rem;
    height: 4rem;
    span {
      width: 4rem;
      height: 4rem;
    }
  }
`;

const StyledHeading = styled.h1`
  margin: 0 0 ${spacing.small};
  ${mq.range({ until: breakpoints.desktop })} {
    ${fonts.sizes('22px', '22px')};
  }
  ${mq.range({ until: breakpoints.tablet })} {
    ${fonts.sizes('18px', '18px')};
    margin-bottom: ${spacing.xsmall};
  }
`;

const AuthorInfo = ({ authorName, authorRole, email, image, phone }: Props) => (
  <AuthorInfoSection>
    {image && <StyledPortrait src={image} alt={authorName} modifier="large" />}
    <div>
      <StyledHeading>{authorName}</StyledHeading>
      <p>{authorRole}</p>
      {phone && <p>{phone}</p>}
      {email && <SafeLink to={`mailto:${email}`}>{email}</SafeLink>}
    </div>
  </AuthorInfoSection>
);

export default AuthorInfo;
