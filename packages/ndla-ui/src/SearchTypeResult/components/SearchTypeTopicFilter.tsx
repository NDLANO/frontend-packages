import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Button from '@ndla/button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0px 0;
`;

type TopicProps = {
  isCurrent?: boolean;
};
const Topic = styled.div<TopicProps>`
  margin: 5px 12px;

  ${props =>
    props.isCurrent &&
    `
      border-bottom: 3px solid #20598F;
    }`}
  button {
    box-shadow: none;
    color: #303030;
    ${props =>
      props.isCurrent &&
      `
      box-shadow: none;
      color: #20598F;
      border-bottom: 0;
      &:hover {
        border-bottom: 0;
      }
      &:focus {
        outline: none;
        outline-width: 0px;
      }
    }`}
  }
  :first-of-type {
    margin-left: 0;
  }
  :last-of-type {
    margin-right: 0;
  }
`;

type TopicType = {
  value: string | null;
  title: string;
};

type Props = {
  topics: Array<TopicType>;
  currentTopic: string | null;
  setTopic: any;
};

const SearchTypeTopicFilter = ({ topics, currentTopic, setTopic }: Props) => {
  return (
    <>
      <p>current topic: {currentTopic}</p>
      <Wrapper>
        {topics.map((option: TopicType) => {
          const { value, title } = option;
          return (
            <Topic
              isCurrent={currentTopic === value}
              key={option.value ? option.value : 'all'}>
              <Button
                link
                size="small"
                disabled={false}
                onClick={() => setTopic(value)}>
                {title}
              </Button>
            </Topic>
          );
        })}
      </Wrapper>
    </>
  );
};

export default SearchTypeTopicFilter;
