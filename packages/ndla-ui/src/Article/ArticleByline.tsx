/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import { AccordionRoot, AccordionHeader, AccordionContent, AccordionItem } from '@ndla/accordion';
import { TFunction } from 'i18next';
import { FootNote } from '../types';
import ArticleFootNotes from './ArticleFootNotes';
import LicenseLink from '../LicenseByline/LicenseLink';

const Wrapper = styled.div`
  margin-top: ${spacing.normal};
  padding-top: ${spacing.normal};
  padding-bottom: ${spacing.xsmall};
  border-top: 1px solid ${colors.brand.greyLight};
  ${fonts.sizes('16px', '24px')};
  font-family: ${fonts.sans};
  color: ${colors.brand.greyDark};
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: ${spacing.mediumlarge};
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
    flex-direction: column-reverse;
    gap: ${spacing.xsmall};
  }
`;

const PrimaryContributorsWrapper = styled.span`
  margin-left: ${spacing.xxsmall};
`;

type AuthorProps = {
  name: string;
};

type SupplierProps = {
  name: string;
};

type AccordionHeaderVariants = 'white' | 'blue';

type Props = {
  authors?: AuthorProps[];
  suppliers?: SupplierProps[];
  published: string;
  license: string;
  licenseBox?: ReactNode;
  locale?: string;
  footnotes?: FootNote[];
  accordionHeaderVariant?: AccordionHeaderVariants;
};

const renderContributors = (contributors: SupplierProps[] | AuthorProps[], t: TFunction) => {
  const contributorsArray = contributors.map((contributor, index) => {
    if (index < 1) return contributor.name;
    const sep = index === contributors.length - 1 ? ` ${t('article.conjunction')} ` : ', ';
    return `${sep}${contributor.name}`;
  });
  return contributorsArray.join('');
};

const getSuppliersText = (suppliers: SupplierProps[], t: TFunction) => {
  if (suppliers.length === 0) {
    return '';
  }
  return suppliers.length > 1
    ? t('article.multipleSuppliersLabel', {
        names: renderContributors(suppliers, t),
        interpolation: { escapeValue: false },
      })
    : t('article.supplierLabel', { name: renderContributors(suppliers, t), interpolation: { escapeValue: false } });
};

const LicenseWrapper = styled.div`
  display: flex;
  gap: ${spacing.small};
  padding-right: ${spacing.xsmall};
`;

const StyledAccordionHeader = styled(AccordionHeader)`
  background-color: ${colors.brand.lightest};
  font-size: ${fonts.sizes('16px', '29px')};
  font-weight: ${fonts.weight.semibold};

  &[data-background-color='white'][data-state='closed'] {
    background-color: ${colors.background.default};
  }
`;

const StyledAccordionContent = styled(AccordionContent)`
  &[data-background-color='white'] {
    background-color: ${colors.background.default};
  }
`;

const refRegexp = /note\d/;
const footnotesAccordionId = 'footnotes';

const ArticleByline = ({
  authors = [],
  suppliers = [],
  footnotes,
  license: licenseString,
  licenseBox,
  published,
  locale,
  accordionHeaderVariant = 'blue',
}: Props) => {
  const { t } = useTranslation();
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  const onHashChange = useCallback(
    (e: HashChangeEvent) => {
      const hash = e.newURL.split('#')[1];
      if (hash.match(refRegexp) && !openAccordions.includes(footnotesAccordionId)) {
        setOpenAccordions([...openAccordions, footnotesAccordionId]);
        const el = document.getElementById(`#${hash}`);
        el?.click();
        el?.focus();
      }
    },
    [openAccordions],
  );

  useEffect(() => {
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [onHashChange]);

  const license = getLicenseByAbbreviation(licenseString, locale);

  const showPrimaryContributors = suppliers.length > 0 || authors.length > 0;

  return (
    <Wrapper>
      <TextWrapper>
        <LicenseWrapper>
          <LicenseLink license={license} />
          {showPrimaryContributors && (
            <PrimaryContributorsWrapper>
              {authors.length > 0 &&
                `${t('article.authorsLabel', {
                  names: renderContributors(authors, t),
                  interpolation: { escapeValue: false },
                })}. `}
              {getSuppliersText(suppliers, t)}
            </PrimaryContributorsWrapper>
          )}
        </LicenseWrapper>
        <div>
          {t('article.lastUpdated')} {published}
        </div>
      </TextWrapper>
      <AccordionRoot type="multiple" onValueChange={setOpenAccordions} value={openAccordions}>
        {licenseBox && (
          <AccordionItem value="rulesForUse">
            <StyledAccordionHeader headingLevel="h2" data-background-color={accordionHeaderVariant}>
              {t('article.useContent')}
            </StyledAccordionHeader>
            <StyledAccordionContent data-background-color={accordionHeaderVariant}>{licenseBox}</StyledAccordionContent>
          </AccordionItem>
        )}

        {!!footnotes?.length && (
          <AccordionItem value={footnotesAccordionId}>
            <StyledAccordionHeader headingLevel="h2">{t('article.footnotes')}</StyledAccordionHeader>
            <StyledAccordionContent forceMount data-background-color={accordionHeaderVariant}>
              <ArticleFootNotes footNotes={footnotes} />
            </StyledAccordionContent>
          </AccordionItem>
        )}
      </AccordionRoot>
    </Wrapper>
  );
};

export default ArticleByline;
