import React from 'react';
import styled from '@emotion/styled';
import { mq, breakpoints, spacing } from '@ndla/core';
// @ts-ignore
import FrontpageCombinedSubjects from './FrontpageCombinedSubjects';
import { category as categoryProp } from './types';
import {
  categoryIllustrations,
  categoryIllustrationsInModal,
} from './illustrations';

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 940px;
  padding: 0;
`;

const StyledSubjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  padding: 0;
  max-width: 940px;
  margin: ${spacing.small} auto 0 auto;
  ${mq.range({ from: breakpoints.tablet })} {
    margin: ${spacing.large} auto ${spacing.medium} auto;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    margin: ${spacing.spacingUnit * 6}px auto ${spacing.spacingUnit * 3}px;
  }
`;

type Props = {
  categories: categoryProp[];
  linkToAbout: React.ReactNode;
  t: any;
}

export const sortCategories = (categories: categoryProp[]): categoryProp[] | undefined => {
  // Illustation requires categories to be ordered in a specific way..
  const indexFellesfag: number = categories.findIndex(category => category.name === 'fellesfag');
  const indexYrkesfag: number = categories.findIndex(category => category.name === 'yrkesfag');
  const indexstudieSpesialiserende: number = categories.findIndex(category => category.name === 'studiespesialiserende');
  const allIndexedSummed: number = indexFellesfag + indexYrkesfag + indexstudieSpesialiserende;
  if (allIndexedSummed !== 3 || indexFellesfag === -1 || indexYrkesfag === -1 || indexstudieSpesialiserende === -1) {
    return undefined;
  }
  return [
    categories[indexFellesfag],
    categories[indexstudieSpesialiserende],
    categories[indexYrkesfag],
  ];
}

const FrontpageCircularSubjectsSection: React.FunctionComponent<Props> = ({
  categories, linkToAbout,
}) => {
  const sortedCategories: categoryProp[] | undefined = sortCategories(categories);
  if (!sortedCategories) {
    console.warn('Category types not valid. Must have names [fellesfag, yrkesfag, studiespesialiserende] and only that.')
    return null;
  }
  return (
    <StyledSection>
      <StyledSubjects>
        <FrontpageCombinedSubjects
          categoryIllustrations={categoryIllustrations}
          categoryIllustrationsInModal={categoryIllustrationsInModal}
          categories={sortedCategories}
          linkToAbout={linkToAbout}
        />
      </StyledSubjects>
    </StyledSection>
  );
}

export default FrontpageCircularSubjectsSection;
