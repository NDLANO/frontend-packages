import React from 'react';

import { storiesOf } from '@kadira/storybook';
import { Center } from './helpers';
import article from '../dummydata/article93.json';
import {Table} from '../src/table/Table';

/*
 * Example content
 */
const articleHTML = document.createElement('div');
articleHTML.innerHTML = article.content[0].content;

const paragraph = articleHTML.getElementsByTagName('p')[0];
const table = articleHTML.getElementsByTagName('table')[0];
console.log(table);
const heading = (level) => {
  if (!articleHTML.getElementsByTagName(`h${level}`)[0]) return `<span>Overskrift ${level}:</span><h${level}>Overskrift ${level}</h${level}>`;
  return `<span>Overskrift ${level}:</span><h${level}>${articleHTML.getElementsByTagName(`h${level}`)[0].innerHTML} <h${level}>`;
};


storiesOf('Typografi', module)
  .add('Overskrifter', () => (
    <Center>
      <h1 className="e-heading">Overskrifter på NDLA</h1>
      <div dangerouslySetInnerHTML={{ __html: heading(1) }} />
      <div dangerouslySetInnerHTML={{ __html: heading(2) }} />
      <div dangerouslySetInnerHTML={{ __html: heading(3) }} />
      <div dangerouslySetInnerHTML={{ __html: heading(4) }} />
    </Center>
  ))
  .add('Avsnitt', () => (
    <Center>
      <h1 className="e-heading">Avsnitt på NDLA</h1>
      <div dangerouslySetInnerHTML={{ __html: paragraph.outerHTML }} />
    </Center>
  ))
  .add('Tabeller', () => (
    <Center>
      <h1 className="e-heading">Tabeller på NDLA</h1>
      <p>Tabeller skal brukes til tabulær data, ikke for tekstutforming</p>
      <h2>Enkle tabeller</h2>
      <Table>{<div dangerouslySetInnerHTML={{ __html: table.outerHTML }} />}</Table>
    </Center>
  ))
  .add('Lister', () => (
    <Center>
      <h1 className="e-heading">Lister på NDLA</h1>
      <p>Punktlister</p>
      <ul>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>Listepunkt 3</li>
        <li>Listepunkt 4</li>
      </ul>

      <p>Nummererte lister</p>
      <ol>
        <li>Listepunkt 1</li>
        <li>Listepunkt 2</li>
        <li>Listepunkt 3</li>
        <li>Listepunkt 4</li>
      </ol>
    </Center>
  ))
  ;
