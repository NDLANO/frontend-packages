import React from 'react';
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import Tabs from '@ndla/tabs';
import SafeLink from '@ndla/safelink';
import { colors, fonts, mq, breakpoints } from '@ndla/core';

const StyledWrapper = styled.nav`
  margin: 32px 0 0;
  .c-tabs--subjects {
    margin: 0;
  }
  .c-tabs__list--subjects {
    margin:0;
  }
  .c-tabs__tab--subjects {
  ${mq.range({ until: breakpoints.tablet })} {
    margin:0;
    font-size: 12px;
    padding-left:8px;
    padding-right:8px;
    :first-of-type {
      padding-left:0;
    }
    :last-of-type {
      padding-right:0;
    }
  }
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 40px 0 0;
  padding: 0;
  ${mq.range({ from: breakpoints.tablet })} {
    column-count: 2;
    column-gap: 20px;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    column-count: 3;
    column-gap: 20px;
  }
`;
const StyledListItem = styled.li`
  margin-bottom: 0;
  break-inside: avoid;
`;

const StyledLetterItem = styled.span`
  display: block;
  ${fonts.sizes(30, 1)};
  font-weight: ${fonts.weight.bold};
  color: ${colors.brand.primary};
  margin-bottom: 8px;
`;

const StyledSpacingElement = styled.span`
  display: block;
  width: 100%;
  height: 10px;
`;

const StyledLetterSpacing = styled.span`
  display: block;
  height: 16px;
`;

type subjectProps = {
  name: string;
  url: string;
};
type categoryProps = {
  name: string;
  subjects: [subjectProps];
};

export type subjectsProps = {
  categories: [categoryProps];
};

type letterCategories = {
  letter: string;
  items: subjectProps[];
};

const sortAlphabetically = (
  subjects: subjectProps[],
  locale: string = 'nb',
) => {
  const subjectsSorted = subjects.sort((a, b) =>
    a.name.localeCompare(b.name, locale),
  );
  const subjectsLetterCategories: letterCategories[] = [];
  let previousLetter = '';
  let letterItems: subjectProps[] = [];
  subjectsSorted.forEach((subject: subjectProps) => {
    const currentLetter = subject.name.substr(0, 1);
    const isNewLetter = currentLetter.localeCompare(previousLetter) === 1;
    if (isNewLetter && letterItems.length) {
      subjectsLetterCategories.push({
        letter: previousLetter,
        items: letterItems,
      });
      letterItems = [];
    }
    previousLetter = currentLetter;
    letterItems.push(subject);
  });
  return subjectsLetterCategories;
};

const renderList = (subjects: subjectProps[]) => (
  <StyledList>
    {sortAlphabetically(subjects).map((letter: any) => {
      return (
        <React.Fragment key={letter.letter}>
          {letter.items.map((subject: subjectProps, index: number) => (
            <React.Fragment key={subject.name}>
              <StyledListItem>
                {index === 0 && (
                  <StyledLetterItem>{letter.letter}</StyledLetterItem>
                )}
                <SafeLink to={subject.url}>{subject.name}</SafeLink>
                <StyledSpacingElement />
                {letter.items.length - 1 === index && <StyledLetterSpacing />}
              </StyledListItem>
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    })}
  </StyledList>
);

const FrontpageAllSubjects = ({ categories, t }: subjectsProps & tType) => {
  const allSubjects: subjectProps[] = [];
  const data: any = [];

  categories.forEach((category: categoryProps) => {
    allSubjects.push(...category.subjects);
    data.push({
      title: category.name,
      content: renderList(category.subjects),
    });
  });

  data.unshift({
    title: t('frontpageMenu.allsubjects'),
    content: renderList(allSubjects),
  });

  return (
    <StyledWrapper>
      <Tabs modifier="subjects" tabs={data} />
    </StyledWrapper>
  );
};

export default injectT(FrontpageAllSubjects);
