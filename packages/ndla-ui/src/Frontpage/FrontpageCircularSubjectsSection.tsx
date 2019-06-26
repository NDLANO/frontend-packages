import React from 'react';
import styled from '@emotion/styled';
import { mq, breakpoints, spacing } from '@ndla/core';
// @ts-ignore
import FrontpageCombinedSubjects from './FrontpageCombinedSubjects';
import { category as categoryProp } from './types';
import { sortCategories } from './sortCategories';
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
  t: () => void;
}

const FrontpageCircularSubjectsSection: React.FunctionComponent<Props> = ({
  categories, linkToAbout,
}) => {
  const testArray: categoryProp[] = [
    {
      name: 'fellesfag',
      subjects: [
        {
          url: '#1',
          text: 'Engelsk'
        },
      ]
    },
    {
      name: 'studiespesialiserende',
      subjects: [
        {
          url: '#1',
          text: 'Biologi 1'
        },
      ]
    },
    {
      name: 'yrkesfag',
      subjects: [
        {
          url: '#1',
          text: 'Barne- og undersarbeiderfag',
        },
      ]
    }
  ];
  console.log(sortCategories(testArray));
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
