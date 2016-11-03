import React from 'react';

import { storiesOf } from '@kadira/storybook';
import { Center } from './helpers';
import article from '../dummydata/article89.json';

/*
 * Example content
 */
const articleHTML = document.createElement('div');
articleHTML.innerHTML = article.content[0].content;

const paragraph = articleHTML.getElementsByTagName('p')[0];

const heading = (level) => {
  if (!articleHTML.getElementsByTagName(`h${level}`)[0]) return `<h${level}>Overskrift ${level}</${level}>`;
  return `<h${level}>${articleHTML.getElementsByTagName(`h${level}`)[0].innerHTML}<h${level}>`;
};


storiesOf('Typography', module)
  .add('Headlines', () => (
    <Center>
      <div dangerouslySetInnerHTML={{ __html: heading(1) }} />
      <div dangerouslySetInnerHTML={{ __html: heading(2) }} />
      <div dangerouslySetInnerHTML={{ __html: heading(3) }} />
      <div dangerouslySetInnerHTML={{ __html: heading(4) }} />
    </Center>
  ))
  .add('Paragraphs', () => (
    <Center>
      <div dangerouslySetInnerHTML={{ __html: paragraph.innerHTML }} />
    </Center>
  ))
  .add('Lists', () => (
    <Center>
      <p>Un-ordered</p>
      <ul>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
        <li>list item 4</li>
      </ul>

      <p>Ordered</p>
      <ol>
        <li>list item 1</li>
        <li>list item 2</li>
        <li>list item 3</li>
        <li>list item 4</li>
      </ol>
    </Center>
  ))
  ;
