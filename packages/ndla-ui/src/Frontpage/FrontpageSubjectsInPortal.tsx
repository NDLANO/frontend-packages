/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { spacing, fonts, colors, mq, breakpoints } from '@ndla/core';
// @ts-ignore
import Modal, { ModalBody, ModalCloseButton, ModalHeader } from '@ndla/modal';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import Button from '@ndla/button';
import SafeLink from '../common/SafeLink';
import { category as categoryProp } from './types';
import {
  categoryIllustrations,
  categoryIllustrationsInModal,
} from './illustrations';

const StyledHeader = styled.h1`
  color: ${colors.brand.primary};
  ${fonts.sizes(24, 1)};
  margin-bottom: ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes(26, 1)};
    margin-top: 0;
    margin-bottom: -${spacing.spacingUnit * 2}px;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    ${fonts.sizes(32, 1)};
    margin-top: 0;
    margin-bottom: -${spacing.spacingUnit * 3}px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    margin-top: ${spacing.normal};
    margin-bottom: -${spacing.spacingUnit * 4}px;
  }
`;

const StyledSafeLink = styled(SafeLink)`
  box-shadow: none;
  text-decoration: underline;
  color: ${colors.brand.primary};
  &:hover, &:focus {
    text-decoration: none;
  }
`;

const StyledYearInfo = styled.span`
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
  color: ${colors.brand.primary};
  margin: 2px 0 0 ${spacing.xsmall}
`;

type StyledImageProps = {
  mobile?: boolean;
};

const StyledFigure = styled.figure<StyledImageProps>`
  pointer-events: none;
  display: ${(props: StyledImageProps) => !props.mobile ? 'none' : 'block'};
  margin-top: -160px;
  ${mq.range({ from: breakpoints.tablet })} {
    display: ${(props: StyledImageProps) => props.mobile ? 'none' : 'block'};
    margin-top: 0;
  }
  > svg {
    width: 100%;
    height: 100%;
  }
  width: ${(props: StyledImageProps) => props.mobile ? '130px' : '100%'};
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    align-items: flex-start;
  }
`;

const StyledList = styled.ul`
  column-count: 1;
  column-gap: ${spacing.normal};
  list-style: none;
  margin: ${spacing.small} 0;
  width: 100%;
  padding: ${spacing.normal} 0 0;
  ${mq.range({ from: breakpoints.tablet })} {
    padding: 0;
    column-count: 2;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    column-count: 3;
  }
`;

const StyledListItem = styled.li`
  padding: ${spacing.small} 0;
  ${fonts.sizes(18, 1.4)};
  font-weight: ${fonts.weight.semibold};
  display: inline-flex;
  align-items: center;
  width: 100%;
  margin: 0;
`;

interface Props {
  category: categoryProp;
  linkToAbout: React.ReactNode,
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
}

const FrontpageSubjectsInPortal: React.FunctionComponent<Props> = ({
  category,
  linkToAbout,
  t,
}) => {
  // @ts-ignore
  const Illustration = categoryIllustrationsInModal[category.name]
  // @ts-ignore
  const IllustrationMobile = categoryIllustrations[category.name]

  return (
    <StyledNav>
      <StyledHeader>{t(`welcomePage.category.${category.name}`)}</StyledHeader>
      <StyledFigure>
        <Illustration />
      </StyledFigure>
      <StyledFigure mobile>
        <IllustrationMobile />
      </StyledFigure>
      <StyledList>
        {category.subjects.map(subject => (
          <StyledListItem key={subject.url}>
            <StyledSafeLink to={subject.url}>{subject.text}</StyledSafeLink>
            {subject.yearInfo && <StyledYearInfo>{subject.yearInfo}</StyledYearInfo>}
            {subject.beta && (
              <Modal
                narrow
                activateButton={
                  <Button
                    lighter
                    css={css`
                      padding: ${spacing.xsmall};
                      margin-left: ${spacing.xsmall};
                      line-height: 1em;
                      background: ${colors.brand.light};
                    `}
                    aria-label={t('subjectPage.subjectIsBeta.dialogHeader', {
                      title: subject.text,
                    })}>
                    {t('subjectPage.subjectIsBeta.iconLabel')}
                  </Button>
                }>
                {(onClose: void) => (
                  <>
                    <ModalHeader>
                      <ModalCloseButton
                        onClick={onClose}
                        title={t('modal.closeModal')}
                      />
                    </ModalHeader>
                    <ModalBody>
                      <h1>
                        {t('subjectPage.subjectIsBeta.dialogHeader', {
                          title: subject.text,
                        })}
                      </h1>
                      <hr />
                      <p>
                        {t('subjectPage.subjectIsBeta.dialogText')} {linkToAbout}
                      </p>
                    </ModalBody>
                  </>
                )}
              </Modal>
            )}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledNav>
  )
};
  
export default injectT(FrontpageSubjectsInPortal);