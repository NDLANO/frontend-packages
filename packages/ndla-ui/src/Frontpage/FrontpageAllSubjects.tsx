import React from 'react';
import styled from '@emotion/styled';
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
  margin-bottom: 10px;
  break-inside: avoid;
`;

const StyledLetterItem = styled.span`
  display: block;
  ${fonts.sizes(30, 1)};
  font-weight: ${fonts.weight.bold};
  color: ${colors.brand.primary};
  margin-bottom: 8px;
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

const sortAlphabetically = (subjects: subjectProps[], locale: string = 'nb') =>
  subjects.sort((a, b) => a.name.localeCompare(b.name, locale));

const renderList = (subjects: subjectProps[]) => {
  let previousLetter = '';
  return (
    <StyledList>
      {sortAlphabetically(subjects).map((subject: subjectProps) => {
        const currentLetter = subject.name.substr(0, 1);
        const isFirst = !previousLetter;
        const isNewLetter = currentLetter.localeCompare(previousLetter) === 1;
        previousLetter = currentLetter;

        return (
          <React.Fragment key={subject.name}>
            {isNewLetter && !isFirst && (
              <StyledListItem>
                <StyledLetterSpacing />
              </StyledListItem>
            )}
            <StyledListItem>
              {isNewLetter && (
                <StyledLetterItem>{currentLetter}</StyledLetterItem>
              )}
              <SafeLink to={subject.url}>{subject.name}</SafeLink>
            </StyledListItem>
          </React.Fragment>
        );
      })}
    </StyledList>
  );
};

const FrontpageAllSubjects = ({ categories }: subjectsProps) => {
  const allSubjects: subjectProps[] = [];
  const data: any = [];

  categories.forEach((category: categoryProps) => {
    allSubjects.push(...category.subjects);
    data.push({
      title: category.name.toUpperCase(),
      content: renderList(category.subjects),
    });
  });

  data.unshift({
    title: 'Alle fag'.toUpperCase(),
    content: renderList(allSubjects),
  });

  return (
    <StyledWrapper>
      <Tabs modifier="subjects" tabs={data} />
    </StyledWrapper>
  );
};

export default FrontpageAllSubjects;
