/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styled from '@emotion/styled';
import { fonts, spacing } from '@ndla/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FeideUserApiType } from './apiTypes';
import { parseUserObject } from './parseUserObject';

const InfoList = styled.ul`
  margin: 0;
  padding: 0 0 0 ${spacing.normal};

  li {
    margin: 0;
  }
`;

const BoldSpan = styled.span`
  font-weight: ${fonts.weight.semibold};
`;

interface Props {
  user: FeideUserApiType;
}

const ShortInfoDiv = styled.div`
  margin: 2rem auto;
`;

export const UserInfo = ({ user }: Props) => {
  const { t } = useTranslation();

  const parsedUser = parseUserObject(user);

  return (
    <div>
      {
        <p>
          {t('user.loggedInAs', {
            role: parsedUser.primaryAffiliation,
          })}
        </p>
      }
      <ShortInfoDiv>
        <div>
          ID: <BoldSpan>{user.uid}</BoldSpan>
        </div>
        <div>
          {t('user.name')}: <BoldSpan>{user.displayName}</BoldSpan>
        </div>
        <div>
          {t('user.mail')}: <BoldSpan>{user.mail?.join(', ')}</BoldSpan>
        </div>
      </ShortInfoDiv>
      {t('user.modal.collectedInfo')}
      <InfoList>
        {parsedUser.organizations.map((org) => (
          <li key={org.id}>
            <div>{`${org.displayName}${org.membership.primarySchool ? ` (${t('user.primarySchool')})` : ''}`}</div>
            <InfoList>
              {Object.entries(org.children).map(([key, val]) => {
                if (val.length < 1) return null;
                return (
                  <li key={key}>
                    <div>{t(`user.groupTypes.${key}`)}</div>
                    <InfoList>
                      {val.map((group) => (
                        <li key={group.id}>{`${group.displayName}${group.grep ? ` (${group.grep.code})` : ''}`}</li>
                      ))}
                    </InfoList>
                  </li>
                );
              })}
            </InfoList>
          </li>
        ))}
      </InfoList>
    </div>
  );
};
