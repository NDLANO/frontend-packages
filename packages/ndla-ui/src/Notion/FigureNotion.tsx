/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */

import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { getGroupedContributorDescriptionList, getLicenseByAbbreviation, getLicenseCredits } from '@ndla/licenses';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Figure, FigureCaption, FigureLicenseDialog, FigureType } from '../Figure';
import { Copyright } from '../types';

const BottomBorder = styled.div`
  margin-top: ${spacing.normal};
  border-bottom: 1px solid ${colors.brand.greyLight};
`;

interface Props {
  resizeIframe?: boolean;
  figureId: string;
  children: ReactNode | ((params: { typeClass: string }) => ReactNode);
  id: string;
  title: string;
  copyright?: Partial<Copyright>;
  licenseString: string;
  type: 'video' | 'h5p' | 'image' | 'concept' | 'other';
  hideFigCaption?: boolean;
  hideIconsAndAuthors?: boolean;
  figureType?: FigureType;
  licenseButtons?: ReactNode;
}

const FigureNotion = ({
  resizeIframe,
  figureId,
  children,
  id,
  copyright,
  licenseString,
  title,
  type,
  hideFigCaption,
  hideIconsAndAuthors,
  figureType,
  licenseButtons,
}: Props) => {
  const { t, i18n } = useTranslation();
  const license = getLicenseByAbbreviation(licenseString, i18n.language);
  const licenseCredits = getLicenseCredits(copyright);
  const { creators, rightsholders, processors } = licenseCredits;

  const authors = creators.length || rightsholders.length ? [...creators, ...rightsholders] : [...processors];

  const groupedAuthors = getGroupedContributorDescriptionList(licenseCredits, i18n.language).map((item) => ({
    name: item.description,
    type: item.label,
  }));

  return (
    <Figure resizeIframe={resizeIframe} id={figureId} type={figureType || 'full-column'}>
      {({ typeClass }) => (
        <>
          {typeof children === 'function' ? children({ typeClass }) : children}
          {copyright?.license?.license ? (
            <FigureCaption
              hideFigcaption={hideFigCaption}
              figureId={figureId}
              id={id}
              reuseLabel={t(`${type}.reuse`)}
              authors={authors}
              licenseRights={license.rights}
              hideIconsAndAuthors={hideIconsAndAuthors}
            >
              <FigureLicenseDialog
                id={id}
                authors={groupedAuthors}
                locale={i18n.language}
                title={title}
                origin={copyright?.origin}
                license={license}
                messages={{
                  close: t('close'),
                  rulesForUse: t(`license.${type}.rules`),
                  source: t('source'),
                  learnAboutLicenses: t('license.learnMore'),
                  title: t('title'),
                }}
              >
                {licenseButtons}
              </FigureLicenseDialog>
            </FigureCaption>
          ) : (
            <BottomBorder />
          )}
        </>
      )}
    </Figure>
  );
};

export default FigureNotion;
